<template>
  <div class="app-layout">
    <!-- 顶部导航 -->
    <header class="app-header">
      <div class="header-inner">
        <div class="header-logo">
          <span class="logo-icon">⚙</span>
          <span class="logo-text">流程引擎 · 审批系统</span>
        </div>
        <div class="header-user">
          <span class="user-avatar">张</span>
          <span>张审批</span>
        </div>
      </div>
    </header>

    <!-- 主内容 -->
    <main class="app-main">
      <ApprovalPage />
    </main>
  </div>
</template>

<script setup>
import ApprovalPage from './components/ApprovalPage.vue';
</script>

<style>
html, body { height: 100%; margin: 0; }
#app { min-height: 100vh; background: #f3f4f6; }
</style>

<style scoped>
.app-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.app-header {
  height: 56px;
  background: #1a1a2e;
  color: #fff;
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: 0 2px 8px rgb(0 0 0 / 20%);
}

.header-inner {
  max-width: 1200px;
  margin: 0 auto;
  height: 100%;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.header-logo {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 16px;
  font-weight: 600;
}

.logo-icon {
  font-size: 20px;
}

.header-user {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
}

.user-avatar {
  width: 32px;
  height: 32px;
  background: #3b82f6;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
}

.app-main {
  flex: 1;
  padding: 24px;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
}
</style>
