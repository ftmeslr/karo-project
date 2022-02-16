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
        <div
          style="
            margin-right: 50px;
            margin-top: 10px;
            width: 100%;
            display: block;
          "
          class="videoWrapper videoWrapper169 js-videoWrapper"
        >
          <iframe
            class="videoIframe js-videoIframe"
            src=""
            frameborder="0"
            allowTransparency="true"
            allowfullscreen
          ></iframe>

          <button
            class="videoPoster js-videoPoster"
            style="background-color: #361c5d; border-radius: 4px; width: 140px"
          >
            Play video
          </button>
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
$color-button-hover: #f00;
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
.btn {
  width: 157px;
  height: 46px;
  border-radius: 3px;
  letter-spacing: 2px;
}

.btn--fill {
  background-color: #f2994a;
  border: none;
  box-shadow: -11.09px 18.13px 36.6483px rgba(242, 153, 74, 0.23);
  color: #fff;
}
.landing__btn--border {
  margin-left: 20px;
  background-color: transparent;
  border: 1px solid #f2994a;
  color: #f2994a;
}
.landing__right--size {
  width: 105%;
}
.videoWrapper {
  position: relative;
  width: 160px;
  height: 0;
}
.videoIframe {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 80px;
  background-color: transparent;
}
.videoPoster {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: 80px;
  margin: 0;
  padding: 0;
  cursor: pointer;
  border: 0;
  outline: none;
  background-position: 50% 50%;
  background-size: 100% 100%;
  background-size: cover;
  text-indent: -999em;
  overflow: hidden;
  opacity: 1;
  -webkit-transition: opacity 800ms, height 0s;
  -moz-transition: opacity 800ms, height 0s;
  transition: opacity 800ms, height 0s;
  -webkit-transition-delay: 0s, 0s;
  -moz-transition-delay: 0s, 0s;
  transition-delay: 0s, 0s;
  &:before {
    content: "";
    position: absolute;
    top: 67%;
    left: 60%;
    width: 50px;
    height: 50px;
    margin: -40px 0 0 -40px;
    border-radius: 100%;
    transition: border-color 300ms;
    background-color: #fff;
  }
  &:after {
    content: "";
    position: absolute;
    top: 47%;
    left: 50%;
    width: 0;
    height: 0;
    margin: -8px 0 0 -5px;
    border-left: 16px solid #361c5d;
    border-top: 10px solid transparent;
    border-bottom: 11px solid transparent;
    transition: border-color 300ms;
  }
  &:hover,
  &:focus {
    &:before {
      border-color: $color-button-hover;
    }
    &:after {
      border-left-color: $color-button-hover;
    }
  }
  .videoWrapperActive & {
    opacity: 0;
    height: 0;
    -webkit-transition-delay: 0s, 800ms;
    -moz-transition-delay: 0s, 800ms;
    transition-delay: 0s, 800ms;
  }
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
