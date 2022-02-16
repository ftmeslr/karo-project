<template>
  <div class="choice__minibox">
    <div class="choice__minibox-title">
      <div class="choice__minibox-img">
        <img v-if="img_src" width="100%" :src="require(`~/assets/img/${img_src}.svg`)" alt="" />
      </div>

      <h3 class="choice__minibox-des">{{ title }}</h3>
    </div>
    <p
      style="
        margin: -5px 0 0 50px;
        font-size: 14px;
        line-height: 22px;
        color: #8476aa;
      "
    >
      {{ subtitle }}
    </p>
  </div>
</template>

<script>
export default {
  props: ["title", "subtitle", "img_src"],


  computed:{
    getUrl(){
      return this.img_src
    }
  }
};


</script>