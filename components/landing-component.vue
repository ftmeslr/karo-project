<template>
  <div class="landing">
    <div class="landing__left">
      <h1 class="landing__title">
        Many reasons to get up and start to get back in the business
      </h1>
      <p class="landing__subtitle">
        The harder you work for something, the greater you’ll feel when you
        achieve it.
      </p>
      <div class="landing__button">
        <button class="btn btn--fill">Learn More</button>
        <button class="btn btn--border">Demo</button>
      </div>

      <div style="display: flex; margin-top: 30px">
        <div class="landing__videoWrapper">
          <!-- <iframe
            class="videoIframe js-videoIframe"
            src=""
            frameborder="0"
            allowTransparency="true"
            allowfullscreen
          ></iframe> -->
        </div>

        <div>
          <p>
            The harder you work for something, the greater you’ll feel when you
            achieve it.
          </p>
          <p>Watch preview</p>
        </div>
      </div>
    </div>
    <div class="landing__right">
      <div>
        <img
          class="landing__right--size"
          src="~assets/img/main-img-landing.svg"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
<style lang="scss">
$color-button: #fff;
@import url("https://rsms.me/inter/inter.css");
html {
  font-family: "Inter", sans-serif;
}
@supports (font-variation-settings: normal) {
  html {
    font-family: "Inter var", sans-serif;
  }
}

.landing {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin: auto;
  color: #fff;
  margin-top: 100px;
}
.landing__title {
  font-family: "inter";
  font-size: 45px;
  color: #99efd0;
}
.landing__subtitle {
  color: #8476aa;
}
.landing__right {
  width: 50%;
}
.landing__left {
  width: 45%;
}
.button {
  display: flex;
  align-items: center;
  margin-top: 40px;
}

.landing__right--size {
  width: 105%;
}
.landing__videoWrapper {
  margin-right: 20px;
  margin-top: 10px;
  width: 220px;
  display: block;
  height: 90px;
  opacity: 30%;
  background-color: #fff;
  border-radius: 5px;
  height: 86px;
}
@media screen and (max-width: 1000px) {
}

@media screen and (max-width: 992px) {
  .landing {
    flex-direction: column-reverse;
    margin-top: 20px;

    .landing__title {
      font-size: 32px;
    }
    .landing__right {
      width: 100%;
    }
    .landing__left {
      width: 100%;
    }
  }
}
</style>
