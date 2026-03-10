<template>
  <div class="approval-page">
    <!-- 流程信息卡片 -->
    <div class="info-card">
      <h2 class="page-title">待办审批</h2>
      <div class="info-grid">
        <div class="info-item">
          <span class="info-label">流程实例</span>
          <span class="info-value">{{ processId }}</span>
        </div>
        <div class="info-item">
          <span class="info-label">任务节点</span>
          <span class="info-value">{{ taskId }}</span>
        </div>
        <div class="info-item">
          <span class="info-label">表单类型</span>
          <span class="info-value">
            <select v-model="selectedFramework" class="framework-select">
              <option value="vue3">Vue 3 表单</option>
              <option value="react">React 表单</option>
            </select>
          </span>
        </div>
        <div class="info-item">
          <span class="info-label">加载状态</span>
          <span :class="['status-badge', loadStatus]">{{ statusText }}</span>
        </div>
      </div>
    </div>

    <!-- 错误提示横幅 -->
    <div v-if="formError" class="error-banner">
      <span>⚠ 业务表单异常：{{ formError }}</span>
      <button @click="formError = ''">关闭</button>
    </div>

    <!-- 操作成功提示 -->
    <div v-if="successMsg" class="success-banner">
      <span>✓ {{ successMsg }}</span>
    </div>

    <!-- 表单容器 -->
    <div class="form-card">
      <div v-if="loadStatus === 'loading'" class="form-skeleton">
        <div class="skeleton-line" />
        <div class="skeleton-line short" />
        <div class="skeleton-line" />
        <div class="skeleton-line short" />
      </div>

      <div v-else-if="loadStatus === 'error'" class="form-load-error">
        <p>业务表单加载失败，请刷新重试。</p>
        <button @click="loadForm">重新加载</button>
      </div>

      <!-- 自定义元素占位 -->
      <!-- Vue 3 / React 表单通过 ref 调用接口方法 -->
      <component
        v-else
        :is="currentTagName"
        ref="formRef"
        :process-id="processId"
        :task-id="taskId"
        :base-api-url="baseApiUrl"
        :auth-token="authToken"
        @change="handleFormChange"
        @error="handleFormError"
      />
    </div>

    <!-- 底部操作栏 -->
    <div class="action-bar">
      <div class="form-snapshot">
        <span class="snapshot-label">表单数据快照：</span>
        <code class="snapshot-code">{{ JSON.stringify(formSnapshot, null, 2) }}</code>
      </div>
      <div class="action-buttons">
        <button class="btn btn-secondary" @click="handleSaveDraft" :disabled="!formLoaded">
          保存草稿
        </button>
        <button class="btn btn-danger" @click="handleReject" :disabled="!formLoaded">
          拒绝
        </button>
        <button class="btn btn-primary" @click="handleApprove" :disabled="!formLoaded || submitting">
          {{ submitting ? '提交中...' : '通过' }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted } from 'vue';
import { loadFormScript } from '@yxst/wc-utils';

// ─── 流程参数（实际项目从路由 query 或接口获取）──────────────────────────────
const processId = ref('P-2024-001234');
const taskId = ref('T-审批节点-002');
const baseApiUrl = ref('/api/mock');
const authToken = ref('mock-token-xyz');

// ─── 状态 ─────────────────────────────────────────────────────────────────────
const selectedFramework = ref('vue3');
const loadStatus = ref('idle'); // idle | loading | loaded | error
const formLoaded = computed(() => loadStatus.value === 'loaded');
const formRef = ref(null);
const formSnapshot = ref({});
const formError = ref('');
const successMsg = ref('');
const submitting = ref(false);

const currentTagName = computed(() =>
  selectedFramework.value === 'vue3' ? 'vue3-business-form' : 'react-business-form'
);

const statusText = computed(() => {
  const map = { idle: '未加载', loading: '加载中...', loaded: '已就绪', error: '加载失败' };
  return map[loadStatus.value];
});

// ─── 表单脚本映射：开发时走本地静态服务，生产可替换为 CDN ─────────────────────
const FORMS_SERVER = import.meta.env.VITE_FORMS_SERVER_URL ?? 'http://localhost:5000';
const FORM_SCRIPTS = {
  vue3: `${FORMS_SERVER}/vue3-form.umd.js`,
  react: `${FORMS_SERVER}/react-form.umd.js`,
};

// ─── 加载表单脚本（走 UMD 架构：子应用打包为 UMD，主应用动态加载并渲染）────────────────
async function loadForm() {
  loadStatus.value = 'loading';
  formError.value = '';
  try {
    const url = FORM_SCRIPTS[selectedFramework.value];
    await loadFormScript(url);
    loadStatus.value = 'loaded';
  } catch (err) {
    loadStatus.value = 'error';
    formError.value = err.message;
  }
}

// ─── 表单事件处理 ─────────────────────────────────────────────────────────────
function handleFormChange(event) {
  formSnapshot.value = event.detail ?? event;
}

function handleFormError(event) {
  const detail = event.detail ?? event;
  formError.value = detail.message;
}

// ─── 审批操作 ─────────────────────────────────────────────────────────────────
async function handleApprove() {
  if (!formRef.value) return;
  const isValid = await formRef.value.validate();
  if (!isValid) return;

  const data = formRef.value.getData();
  submitting.value = true;
  try {
    // 模拟提交
    await new Promise((r) => setTimeout(r, 800));
    console.log('[审批通过] 提交数据:', data);
    successMsg.value = '审批通过！数据已提交。';
    setTimeout(() => (successMsg.value = ''), 3000);
  } finally {
    submitting.value = false;
  }
}

async function handleReject() {
  if (!formRef.value) return;
  const data = formRef.value.getData();
  console.log('[审批拒绝] 数据:', data);
  successMsg.value = '已拒绝该审批申请。';
  setTimeout(() => (successMsg.value = ''), 3000);
}

async function handleSaveDraft() {
  if (!formRef.value) return;
  const data = formRef.value.getData();
  console.log('[保存草稿]', data);
  // 演示：通过 setData 回显草稿
  formRef.value.setData(data);
  successMsg.value = '草稿已保存。';
  setTimeout(() => (successMsg.value = ''), 2000);
}

// ─── 切换框架时重新加载 ───────────────────────────────────────────────────────
watch(selectedFramework, () => {
  formSnapshot.value = {};
  loadForm();
});

onMounted(() => {
  loadForm();
});
</script>

<style scoped>
.approval-page {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

/* 信息卡片 */
.info-card {
  background: #fff;
  border-radius: 10px;
  padding: 20px 24px;
  box-shadow: 0 1px 4px rgb(0 0 0 / 8%);
}

.page-title {
  margin: 0 0 16px;
  font-size: 18px;
  font-weight: 600;
  color: #1a1a2e;
}

.info-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 12px;
}

.info-item {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.info-label {
  font-size: 12px;
  color: #9ca3af;
  font-weight: 500;
}

.info-value {
  font-size: 14px;
  color: #374151;
  font-weight: 500;
}

.framework-select {
  padding: 4px 8px;
  border: 1px solid #d1d5db;
  border-radius: 4px;
  font-size: 13px;
  cursor: pointer;
}

.status-badge {
  display: inline-block;
  padding: 2px 10px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 500;
}

.status-badge.idle { background: #f3f4f6; color: #6b7280; }
.status-badge.loading { background: #eff6ff; color: #3b82f6; }
.status-badge.loaded { background: #f0fdf4; color: #16a34a; }
.status-badge.error { background: #fef2f2; color: #dc2626; }

/* 横幅 */
.error-banner,
.success-banner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  border-radius: 8px;
  font-size: 14px;
  animation: slideDown 0.2s ease;
}

.error-banner {
  background: #fef2f2;
  border: 1px solid #fecaca;
  color: #dc2626;
}

.success-banner {
  background: #f0fdf4;
  border: 1px solid #bbf7d0;
  color: #16a34a;
}

.error-banner button {
  padding: 3px 10px;
  border: 1px solid #dc2626;
  background: transparent;
  color: #dc2626;
  border-radius: 4px;
  cursor: pointer;
  font-size: 12px;
}

@keyframes slideDown {
  from { opacity: 0; transform: translateY(-8px); }
  to { opacity: 1; transform: translateY(0); }
}

/* 表单卡片 */
.form-card {
  background: #fff;
  border-radius: 10px;
  padding: 24px;
  box-shadow: 0 1px 4px rgb(0 0 0 / 8%);
  min-height: 200px;
}

/* 骨架屏 */
.form-skeleton {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 8px 0;
}

.skeleton-line {
  height: 36px;
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  border-radius: 6px;
  animation: shimmer 1.5s infinite;
}

.skeleton-line.short { width: 40%; }

@keyframes shimmer {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}

/* 加载失败 */
.form-load-error {
  text-align: center;
  padding: 32px;
  color: #6b7280;
}

.form-load-error button {
  margin-top: 12px;
  padding: 8px 20px;
  background: #3b82f6;
  color: #fff;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
}

/* 底部操作栏 */
.action-bar {
  background: #fff;
  border-radius: 10px;
  padding: 16px 24px;
  box-shadow: 0 1px 4px rgb(0 0 0 / 8%);
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  align-items: flex-start;
}

.form-snapshot {
  flex: 1;
  min-width: 200px;
}

.snapshot-label {
  font-size: 12px;
  color: #9ca3af;
  display: block;
  margin-bottom: 4px;
}

.snapshot-code {
  display: block;
  font-size: 11px;
  color: #374151;
  background: #f9fafb;
  border: 1px solid #e5e7eb;
  border-radius: 4px;
  padding: 8px;
  max-height: 80px;
  overflow-y: auto;
  white-space: pre;
  font-family: 'Courier New', monospace;
}

.action-buttons {
  display: flex;
  gap: 10px;
  align-items: center;
  flex-shrink: 0;
}

.btn {
  padding: 9px 20px;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  border: none;
  transition: opacity 0.2s, transform 0.1s;
}

.btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.btn:not(:disabled):active {
  transform: scale(0.97);
}

.btn-primary { background: #3b82f6; color: #fff; }
.btn-primary:not(:disabled):hover { background: #2563eb; }

.btn-danger { background: #fff; color: #dc2626; border: 1px solid #fca5a5; }
.btn-danger:not(:disabled):hover { background: #fef2f2; }

.btn-secondary { background: #fff; color: #374151; border: 1px solid #d1d5db; }
.btn-secondary:not(:disabled):hover { background: #f9fafb; }
</style>
