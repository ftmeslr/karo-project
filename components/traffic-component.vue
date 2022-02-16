<template>
  <div class="traffic">
    <div class="traffic__left">
      <h1 class="traffic__title">
        Increase your <br />business
        <span class="traffic__title--orng">traffic</span>
      </h1>
      <p class="traffic__subtitle">
        We are committed to processing the information in order to <br />
        contact you and talk about your project.
      </p>
      <button class="traffic__button">Learn More</button>
      <div style="display: flex"></div>
    </div>
    <div class="traffic__right">
      <div class="traffic__main-img-box">
        <img
          class="traffic__main-img-box"
          src="~assets/img/traffic.png"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.traffic {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: auto;
  color: #fff;
  width: 90%;
  margin-top: 70px;
}
.traffic__left {
  width: 50%;
  margin-left: 30px;
}
.traffic__title {
  color: #99efd0;
  font-size: 42px;
}
.traffic__title--orng {
  color: #f2994a;
}
.traffic__button {
  width: 157px;
  height: 46px;
  background-color: #f2994a;
  border: none;
  border-radius: 3px;
  box-shadow: -11.09px 18.13px 36.6483px rgba(242, 153, 74, 0.23);
  color: #fff;
}
.traffic__subtitle {
  color: #8476aa;
  font-size: 15px;
  line-height: 1.5;
}
.traffic__right {
  width: 50%;
}
.traffic__main-img-box {
  width: 400px;
}
.traffic__main-img {
  width: 100%;
}
</style>