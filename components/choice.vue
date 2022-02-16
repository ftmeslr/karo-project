<template>
  <div class="chioce">
    <div class="choice__box-title">
      <h1 class="choice__title">Your Choice</h1>
      <p class="choice__sub-title">
        there are Many reasons to getup und and start to get back in thw
        buisness
      </p>
    </div>
    <div>
      <!-- <div class="choice__box-row">
        <choiceBox-component
          v-for="i in 3"
          :key="i"
          :title="title[i - 1]"
          :subtitle="subtitle[i - 1]"
          :img_src="img_src[i - 1]"
        />
      </div> -->

      <div class="choice__box-row">
        <choiceBox-component
          v-for="(choice , index) in choices"
          :key="index"
          :title="choice.title"
          :subtitle="choice.subtitle"
          :img_src="choice.img_src"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      choices: [
        {
          title: "Ecstatic elegance",
          subtitle:
            "Article nor prepare chicken you him now. Shy merits say advice ten before lovers innate add.",
          img_src: "icon-1",
        },
        {
          title: "Folly words widow",
          subtitle:
            "Effect if in up no depend seemed. Ecstatic elegance gay but disposed. We me rent been part what.",
          img_src: "icon-2",
        },
        {
          title: "Possible procured trifling",
          subtitle:
            "We me rent been part what. An concluded sportsman offending so provision mr education.",
          img_src: "icon-3",
        },
        {
          title: "Open game",
          subtitle:
            "Shy merits say advice ten before lovers innate add. She cordially behaviour can attempted estimable.",
          img_src: "icon-4",
        },
        {
          title: "Endeavor",
          subtitle:
            "Improve ashamed married expense bed her comfort pursuit mrs. Four time took ye your as fail lady. ",
          img_src: "icon-5",
        },
        {
          title: "Comfort pursuit",
          subtitle:
            "Had denoting properly jointure you occasion directly raillery. In said to of poor full be post face snug.",
          img_src: "icon-6",
        },
      ],

      // title: [
      //   "Ecstatic elegance",
      //   "Folly words widow",
      //   "Possible procured trifling",
      //   "Open game",
      //   "Endeavor",
      //   "Comfort pursuit",
      // ],
      // subtitle: [
      //   "Article nor prepare chicken you him now. Shy merits say advice ten before lovers innate add.",
      //   "Effect if in up no depend seemed. Ecstatic elegance gay but disposed. We me rent been part what.",
      //   "We me rent been part what. An concluded sportsman offending so provision mr education.",
      //   "Shy merits say advice ten before lovers innate add. She cordially behaviour can attempted estimable.",
      //   "Improve ashamed married expense bed her comfort pursuit mrs. Four time took ye your as fail lady. ",
      //   "Had denoting properly jointure you occasion directly raillery. In said to of poor full be post face snug.",
      // ],
      // img_src: ["icon-1", "icon-2", "icon-3", "icon-4", "icon-5", "icon-6"],
    };
  },
};
</script>
<style lang="scss">
.chioce {
  width: 90%;
  margin: auto;
}
.choice__box-title {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 60px;
}
.choice__minibox-title {
  display: flex;
  align-items: center;
}
.choice__minibox-img {
  width: 28px;
  padding: 5px;
}
.choice__minibox-des {
  margin-left: 10px;
  color: #99efd0;
}
.choice__title {
  color: #99efd0;
}
.choice__sub-title {
  color: #8476aa;
  margin-top: 0;
}

.choice__box-row {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.choice__minibox {
  width: 30%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  color: #fff;
}
.choice__box-row--m {
  margin-top: 20px;
}

@media screen and (max-width: 630px) {
  .choice__box-row {
    flex-direction: column;
  }
  .choice__minibox {
    width: 100%;
  }
}
</style>