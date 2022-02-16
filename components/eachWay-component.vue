<template>
  <div class="each-ways">
    <h2 class="each-ways__title">{{ title }}</h2>
    <p class="each-ways__subtite">{{ subtitle }}</p>
  </div>
</template>

<script>
export default {
  props: ["title", "subtitle"],
};
</script>

<style lang="scss">
.each-ways {
  display: flex;
  flex-direction: column;
  width: 260px;
}
.each-ways__title {
  font-size: 36px;
  color: #99efd0;
}
.each-ways__subtite {
  font-size: 14px;
  margin-top: -10px;
  color: #8476aa;
  letter-spacing: 0.2px;
}
</style>