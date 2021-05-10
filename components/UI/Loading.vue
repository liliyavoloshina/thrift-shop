<template>
  <div v-if="loading" class="loading-area">
    <div class="icon-heart"><div></div></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: false
    }
  },
  methods: {
    start() {
      this.loading = true
    },
    finish() {
      this.loading = false
    }
  }
}
</script>

<style lang="scss" scoped>
.loading-area {
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: $accent-2;
  opacity: 0.8;
  z-index: 1000;
}

.icon-heart {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
  transform: rotate(45deg);
  transform-origin: 40px 40px;
}
.icon-heart div {
  top: 32px;
  left: 32px;
  position: absolute;
  width: 32px;
  height: 32px;
  background: $accent;
  animation: icon-heart 1.2s infinite cubic-bezier(0.215, 0.61, 0.355, 1);
}
.icon-heart div:after,
.icon-heart div:before {
  content: " ";
  position: absolute;
  display: block;
  width: 32px;
  height: 32px;
  background: $accent;
}
.icon-heart div:before {
  left: -24px;
  border-radius: 50% 0 0 50%;
}
.icon-heart div:after {
  top: -24px;
  border-radius: 50% 50% 0 0;
}
@keyframes icon-heart {
  0% {
    transform: scale(0.95);
  }
  5% {
    transform: scale(1.1);
  }
  39% {
    transform: scale(0.85);
  }
  45% {
    transform: scale(1);
  }
  60% {
    transform: scale(0.95);
  }
  100% {
    transform: scale(0.9);
  }
}
</style>