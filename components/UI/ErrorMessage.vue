<template>
  <div class="error">
    <slot></slot>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.error {
  color: $error-message;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  font-weight: 600;
}
</style>