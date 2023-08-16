<template>
  <div
    class="smooth-mouse-circle"
    :style="circleStyle"
    style="background: radial-gradient(circle, #15be9132 10%, #ffffff00 70%)"
  ></div>
</template>

<script>
export default {
  data() {
    return {
      circleSize: 75,
      mouseX: 0,
      mouseY: 0,
      currentX: 0,
      currentY: 0,
    };
  },
  computed: {
    circleStyle() {
      const backgroundColor = this.$vuetify.theme.dark
        ? "#78b3a115"
        : "#37ba9313";

      return {
        width: `${this.circleSize}px`,
        height: `${this.circleSize}px`,
        transform: `translate(${this.currentX}px, ${this.currentY}px)`,
      };
    },
  },
  mounted() {
    window.addEventListener("mousemove", this.handleMouseMove);
    this.animate();
  },
  beforeDestroy() {
    window.removeEventListener("mousemove", this.handleMouseMove);
  },
  methods: {
    handleMouseMove(event) {
      this.mouseX = event.clientX;
      this.mouseY = event.clientY;
    },
    animate() {
      const easing = 0.15; // Adjust this for smoother movement
      this.currentX += (this.mouseX - this.currentX) * easing;
      this.currentY += (this.mouseY - this.currentY) * easing;
      requestAnimationFrame(this.animate);
    },
  },
};
</script>

<style scoped>
.smooth-mouse-circle {
  position: fixed;
  border-radius: 50%;
  pointer-events: none;
  transition: transform 0.2s ease, background-color 0.2s ease; /* Add background-color transition */
  transform-origin: center center;
  z-index: 100;
}
</style>
