<template>
  <div class="business-form">
    <h3 class="form-title">业务审批表单（Vue 3）</h3>

    <div v-if="loading" class="loading">加载中...</div>
    <div v-else-if="loadError" class="error-banner">
      {{ loadError }}
      <button @click="loadUserList">重试</button>
    </div>

    <form v-else @submit.prevent>
      <!-- 审批人选择 -->
      <div class="field">
        <label for="approver">审批人 <span class="required">*</span></label>
        <select
          id="approver"
          v-model="form.approverId"
          :class="{ invalid: errors.approverId }"
          @change="handleChange"
        >
          <option value="">请选择审批人</option>
          <option v-for="user in userList" :key="user.id" :value="user.id">
            {{ user.name }} - {{ user.department }}
          </option>
        </select>
        <span v-if="errors.approverId" class="error-msg">请选择审批人</span>
      </div>

      <!-- 申请原因 -->
      <div class="field">
        <label for="reason">申请原因 <span class="required">*</span></label>
        <textarea
          id="reason"
          v-model="form.reason"
          :class="{ invalid: errors.reason }"
          rows="4"
          placeholder="请填写申请原因（至少 10 字）"
          @input="handleChange"
        />
        <span v-if="errors.reason" class="error-msg">{{ errors.reason }}</span>
      </div>

      <!-- 附件说明 -->
      <div class="field">
        <label for="attachment">附件说明</label>
        <input
          id="attachment"
          v-model="form.attachment"
          type="text"
          placeholder="可选"
          @input="handleChange"
        />
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue';

// ─── Props（由主应用通过自定义元素属性传入）───────────────────────────────────
const props = defineProps({
  processId: String,
  taskId: String,
  bizId: String,
  baseApiUrl: String,
  authToken: String,
});

// ─── Emits ───────────────────────────────────────────────────────────────────
const emit = defineEmits(['change', 'error']);

// ─── 状态 ─────────────────────────────────────────────────────────────────────
const loading = ref(false);
const loadError = ref('');
const userList = ref([]);
const form = reactive({
  approverId: '',
  reason: '',
  attachment: '',
});
const errors = reactive({
  approverId: false,
  reason: '',
});

// ─── 生命周期 ─────────────────────────────────────────────────────────────────
onMounted(() => {
  loadUserList();
});

// ─── 方法 ─────────────────────────────────────────────────────────────────────
async function loadUserList() {
  loading.value = true;
  loadError.value = '';
  try {
    const baseUrl = props.baseApiUrl || '/api/proxy/business';
    const res = await fetch(`${baseUrl}/users`, {
      headers: props.authToken ? { Authorization: `Bearer ${props.authToken}` } : {},
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    userList.value = await res.json();
  } catch (err) {
    loadError.value = `获取审批人列表失败：${err.message}`;
    emit('error', { code: 'LOAD_USERS_FAILED', message: err.message });
  } finally {
    loading.value = false;
  }
}

function handleChange() {
  emit('change', { ...form });
}

// ─── 接口方法（通过 defineExpose 暴露给主应用调用）────────────────────────────
function validate() {
  errors.approverId = !form.approverId;
  errors.reason =
    !form.reason ? '请填写申请原因' : form.reason.length < 10 ? '申请原因至少 10 字' : '';
  return Promise.resolve(!errors.approverId && !errors.reason);
}

function getData() {
  return {
    processId: props.processId,
    taskId: props.taskId,
    approverId: form.approverId,
    reason: form.reason,
    attachment: form.attachment,
  };
}

function setData(data) {
  if (data.approverId !== undefined) form.approverId = data.approverId;
  if (data.reason !== undefined) form.reason = data.reason;
  if (data.attachment !== undefined) form.attachment = data.attachment;
}

function reset() {
  form.approverId = '';
  form.reason = '';
  form.attachment = '';
  errors.approverId = false;
  errors.reason = '';
}

// 必须 defineExpose，才能让主应用通过自定义元素实例直接调用这些方法
defineExpose({ validate, getData, setData, reset });
</script>

<style scoped>
.business-form {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  padding: 20px;
  max-width: 560px;
  color: #333;
}

.form-title {
  margin: 0 0 20px;
  font-size: 16px;
  font-weight: 600;
  color: #1a1a2e;
  padding-bottom: 12px;
  border-bottom: 1px solid #e5e7eb;
}

.field {
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-bottom: 18px;
}

label {
  font-size: 14px;
  font-weight: 500;
  color: #374151;
}

.required {
  color: #ef4444;
}

select,
input,
textarea {
  padding: 8px 12px;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  font-size: 14px;
  outline: none;
  transition: border-color 0.2s;
}

select:focus,
input:focus,
textarea:focus {
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgb(59 130 246 / 20%);
}

.invalid {
  border-color: #ef4444;
}

.error-msg {
  font-size: 12px;
  color: #ef4444;
}

.loading {
  color: #6b7280;
  text-align: center;
  padding: 20px;
}

.error-banner {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  background: #fef2f2;
  border: 1px solid #fecaca;
  border-radius: 6px;
  color: #dc2626;
  font-size: 14px;
}

.error-banner button {
  padding: 4px 12px;
  border: 1px solid #dc2626;
  background: transparent;
  color: #dc2626;
  border-radius: 4px;
  cursor: pointer;
  font-size: 13px;
}
</style>
