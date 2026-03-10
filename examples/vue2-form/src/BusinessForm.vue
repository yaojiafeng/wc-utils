<template>
  <div class="box">
    <h3 class="title">Vue 2 业务表单（UMD / WebComponent）</h3>
    <div class="meta">
      <div><span class="k">processId</span><span class="v">{{ processId }}</span></div>
      <div><span class="k">taskId</span><span class="v">{{ taskId }}</span></div>
      <div><span class="k">baseApiUrl</span><span class="v">{{ baseApiUrl }}</span></div>
    </div>

    <div class="row">
      <label>申请人</label>
      <input v-model="form.applicant" @input="emitChange" />
    </div>
    <div class="row">
      <label>金额</label>
      <input v-model.number="form.amount" type="number" @input="emitChange" />
    </div>

    <div class="hint">提示：amount &gt; 0 且 applicant 非空才会 validate 通过</div>
  </div>
</template>

<script>
export default {
  name: 'Vue2BusinessFormUmd',
  props: {
    processId: { type: String, default: '' },
    taskId: { type: String, default: '' },
    bizId: { type: String, default: '' },
    baseApiUrl: { type: String, default: '' },
    authToken: { type: String, default: '' },
  },
  data() {
    return {
      form: {
        applicant: '张三',
        amount: 100,
      },
    };
  },
  methods: {
    emitChange() {
      this.$emit('change', { ...this.form });
    },
    async validate() {
      const ok = !!this.form.applicant && Number(this.form.amount) > 0;
      if (!ok) {
        this.$emit('error', { code: 'VALIDATION_FAILED', message: '请输入 applicant 且 amount > 0' });
      }
      return ok;
    },
    getData() {
      return { ...this.form };
    },
    setData(data) {
      this.form = { ...this.form, ...(data || {}) };
      this.emitChange();
    },
    reset() {
      this.form = { applicant: '', amount: 0 };
      this.emitChange();
    },
  },
  mounted() {
    this.emitChange();
  },
};
</script>

<style scoped>
.box {
  font-family: system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif;
  border: 1px solid #e6e6e6;
  border-radius: 12px;
  padding: 14px;
}
.title {
  margin: 0 0 10px;
  font-size: 16px;
}
.meta {
  display: grid;
  gap: 6px;
  margin-bottom: 10px;
}
.k {
  display: inline-block;
  width: 90px;
  color: #6b7280;
  font-size: 12px;
}
.v {
  font-weight: 600;
  font-size: 12px;
}
.row {
  display: grid;
  grid-template-columns: 90px 1fr;
  gap: 10px;
  align-items: center;
  margin: 8px 0;
}
input {
  height: 32px;
  border: 1px solid #d0d0d0;
  border-radius: 8px;
  padding: 0 10px;
}
.hint {
  margin-top: 10px;
  font-size: 12px;
  color: #6b7280;
}
</style>

