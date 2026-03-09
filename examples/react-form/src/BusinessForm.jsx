import React, { useState, useEffect, useImperativeHandle, useCallback } from 'react';

/**
 * React 业务表单组件
 *
 * 使用 forwardRef + useImperativeHandle 暴露接口方法供主应用调用：
 *   - validate(): Promise<boolean>
 *   - getData(): object
 *   - setData(data: object): void
 *   - reset(): void
 *
 * 通过 props.onError / props.onChange 触发自定义事件（由 React 适配器转为 CustomEvent）
 */
const BusinessForm = React.forwardRef(function BusinessForm(props, ref) {
  const { processId, taskId, baseApiUrl, authToken, onChange, onError } = props;

  const [loading, setLoading] = useState(false);
  const [loadError, setLoadError] = useState('');
  const [userList, setUserList] = useState([]);
  const [form, setForm] = useState({ approverId: '', reason: '', attachment: '' });
  const [errors, setErrors] = useState({});

  // ─── 加载数据 ───────────────────────────────────────────────────────────────
  const loadUserList = useCallback(async () => {
    setLoading(true);
    setLoadError('');
    try {
      const baseUrl = baseApiUrl || '/api/proxy/business';
      const res = await fetch(`${baseUrl}/users`, {
        headers: authToken ? { Authorization: `Bearer ${authToken}` } : {},
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setUserList(await res.json());
    } catch (err) {
      setLoadError(`获取审批人列表失败：${err.message}`);
      onError?.({ code: 'LOAD_USERS_FAILED', message: err.message });
    } finally {
      setLoading(false);
    }
  }, [baseApiUrl, authToken, onError]);

  useEffect(() => {
    loadUserList();
  }, [loadUserList]);

  // ─── 表单变更 ───────────────────────────────────────────────────────────────
  const handleFieldChange = (field, value) => {
    const next = { ...form, [field]: value };
    setForm(next);
    onChange?.(next);
  };

  // ─── 接口方法（通过 useImperativeHandle 暴露）────────────────────────────────
  useImperativeHandle(ref, () => ({
    validate() {
      const newErrors = {};
      if (!form.approverId) newErrors.approverId = '请选择审批人';
      if (!form.reason) newErrors.reason = '请填写申请原因';
      else if (form.reason.length < 10) newErrors.reason = '申请原因至少 10 字';
      setErrors(newErrors);
      return Promise.resolve(Object.keys(newErrors).length === 0);
    },
    getData() {
      return { processId, taskId, ...form };
    },
    setData(data) {
      setForm((prev) => ({ ...prev, ...data }));
    },
    reset() {
      setForm({ approverId: '', reason: '', attachment: '' });
      setErrors({});
    },
  }));

  // ─── 渲染 ───────────────────────────────────────────────────────────────────
  return (
    <>
      <style>{styles}</style>
      <div className="business-form">
        <h3 className="form-title">业务审批表单（React）</h3>

        {loading && <div className="loading">加载中...</div>}

        {!loading && loadError && (
          <div className="error-banner">
            <span>{loadError}</span>
            <button onClick={loadUserList}>重试</button>
          </div>
        )}

        {!loading && !loadError && (
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="field">
              <label htmlFor="approver">
                审批人 <span className="required">*</span>
              </label>
              <select
                id="approver"
                value={form.approverId}
                className={errors.approverId ? 'invalid' : ''}
                onChange={(e) => handleFieldChange('approverId', e.target.value)}
              >
                <option value="">请选择审批人</option>
                {userList.map((user) => (
                  <option key={user.id} value={user.id}>
                    {user.name} - {user.department}
                  </option>
                ))}
              </select>
              {errors.approverId && <span className="error-msg">{errors.approverId}</span>}
            </div>

            <div className="field">
              <label htmlFor="reason">
                申请原因 <span className="required">*</span>
              </label>
              <textarea
                id="reason"
                value={form.reason}
                rows={4}
                className={errors.reason ? 'invalid' : ''}
                placeholder="请填写申请原因（至少 10 字）"
                onChange={(e) => handleFieldChange('reason', e.target.value)}
              />
              {errors.reason && <span className="error-msg">{errors.reason}</span>}
            </div>

            <div className="field">
              <label htmlFor="attachment">附件说明</label>
              <input
                id="attachment"
                value={form.attachment}
                type="text"
                placeholder="可选"
                onChange={(e) => handleFieldChange('attachment', e.target.value)}
              />
            </div>
          </form>
        )}
      </div>
    </>
  );
});

export default BusinessForm;

const styles = `
  .business-form {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    padding: 20px;
    max-width: 560px;
    color: #333;
    box-sizing: border-box;
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
  label { font-size: 14px; font-weight: 500; color: #374151; }
  .required { color: #ef4444; }
  select, input, textarea {
    padding: 8px 12px;
    border: 1px solid #d1d5db;
    border-radius: 6px;
    font-size: 14px;
    outline: none;
    transition: border-color 0.2s;
    font-family: inherit;
  }
  select:focus, input:focus, textarea:focus {
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgb(59 130 246 / 20%);
  }
  .invalid { border-color: #ef4444; }
  .error-msg { font-size: 12px; color: #ef4444; }
  .loading { color: #6b7280; text-align: center; padding: 20px; }
  .error-banner {
    display: flex; align-items: center; gap: 12px;
    padding: 12px 16px;
    background: #fef2f2; border: 1px solid #fecaca;
    border-radius: 6px; color: #dc2626; font-size: 14px;
  }
  .error-banner button {
    padding: 4px 12px; border: 1px solid #dc2626;
    background: transparent; color: #dc2626;
    border-radius: 4px; cursor: pointer; font-size: 13px;
  }
`;
