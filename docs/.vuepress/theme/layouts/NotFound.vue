<script setup>
import { NotFound } from 'vuepress-theme-plume/client'
</script>

<template>
  <NotFound>
    <template #not-found>
      <div class="vp-not-found">
        <p class="code">404</p>
        <h1 class="title">页面未找到</h1>
        <div class="divider"></div>
        <blockquote class="quote">
          啊哦~你来到了一片荒芜之地。
        </blockquote>
        <div class="action">
          <a class="link" href="/" aria-label="go to home">
            返回首页
          </a>
        </div>
      </div>
    </template>
  </NotFound>
</template>

<style scoped>
.vp-not-found {
  padding: 96px 32px 168px;
  text-align: center;
}

.code {
  font-size: 64px;
  font-weight: 600;
  line-height: 64px;
}

.title {
  padding-top: 12px;
  font-size: 20px;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: 2px;
}

.divider {
  width: 64px;
  height: 1px;
  margin: 24px auto 18px;
  background-color: var(--vp-c-divider);
  transition: background-color var(--vp-t-color);
}

.quote {
  max-width: 256px;
  margin: 0 auto;
  font-size: 14px;
  font-weight: 500;
  color: var(--vp-c-text-2);
  transition: color var(--vp-t-color);
}

.action {
  padding-top: 20px;
}

.link {
  display: inline-block;
  padding: 3px 16px;
  font-size: 14px;
  font-weight: 500;
  color: var(--vp-c-brand-1);
  border: 1px solid var(--vp-c-brand-1);
  border-radius: 16px;
  transition: color var(--vp-t-color), border-color var(--vp-t-color);
}

.link:hover {
  color: var(--vp-c-brand-2);
  border-color: var(--vp-c-brand-2);
}
</style>