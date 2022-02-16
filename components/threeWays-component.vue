<template>
  <div class="ways">
    <h1 class="ways__title">
      3 Simple Ways To <span class="ways__title--orng">Save</span> A Bunch
      <br />
      Of <span class="ways__title--orng">Money</span> When Buying A New Computer
    </h1>
    <p class="ways__subtitle">
      Fully customizable and neatly organized components <br />will help you
      work faster without limiting creative freedom.
    </p>
    <div class="ways__each">
      <eachWay-component
        v-for="i in 3"
        :key="i"
        :title="title[i - 1]"
        :subtitle="subtitle[i - 1]"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: ["100+", "43,000+", "30+"],
      subtitle: [
        "5 Reasons To Purchase Desktop Computers",
        "3 Simple Ways To Save A Bunch Of Money When Buying A New Computer",
        "A Discount Toner Cartridge Is Better Than Ever And You Will Save 50 Or More",
      ],
    };
  },
};
</script>

<style lang="scss">
.ways {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-top: 100px;
}
.ways__subtitle {
  color: #8476aa;
  font-size: 15px;
  line-height: 1.5;
  margin-top: 0;
}
.ways__title {
  color: #99efd0;
  font-size: 36px;
}
.ways__title--orng {
  color: #f2994a;
}
.ways__each {
  display: flex;
  justify-content: space-between;
  width: 80%;
}

@media screen and (max-width: 768px) {
  .ways__each {
    flex-direction: column-reverse;
    align-items: center;
  }
 .ways .ways__title {
    font-size: 26px;
  }
}
</style>
