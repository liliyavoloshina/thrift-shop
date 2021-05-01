<template>
  <div class="empty-message">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'EmptyMessage'
}
</script>

<style lang="scss" scoped>
.empty-message {
  width: 100%;
  height: auto;
  padding: 10px;
  font-size: 1rem;
  font-style: italic;
  border: $border-thin;
}
</style>