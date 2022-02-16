<template>
  <div class="footer">
    <div class="social">
      <h2>ARShakir</h2>
      <div class="social__items">
        <img class="social__item-img" src="~assets/img/Google.svg" alt="" />
        <img class="social__item-img" src="~assets/img/twitter.svg" alt="" />
        <img
          class="social__item-img"
          src="~assets/img/facebook(1).svg"
          alt=""
        />
      </div>
    </div>
    <div class="footer__items">
      <div class="footer__item">
        <p class="footer__title">first</p>
        <p class="footer__subtitle">first page</p>
        <p class="footer__subtitle">second page</p>
        <p class="footer__subtitle">third page</p>
        <p class="footer__subtitle">fourth page</p>
      </div>
      <div class="footer__item">
        <p class="footer__title">first</p>
        <p class="footer__subtitle">first page</p>
        <p class="footer__subtitle">second page</p>
        <p class="footer__subtitle">third page</p>
        <p class="footer__subtitle">fourth page</p>
      </div>
      <div class="footer__item">
        <p class="footer__title">first</p>
        <p class="footer__subtitle">first page</p>
        <p class="footer__subtitle">second page</p>
        <p class="footer__subtitle">third page</p>
        <p class="footer__subtitle">fourth page</p>
      </div>
      <div class="footer__item">
        <p class="footer__title">first</p>
        <p class="footer__subtitle">first page</p>
        <p class="footer__subtitle">second page</p>
        <p class="footer__subtitle">third page</p>
        <p class="footer__subtitle">fourth page</p>
      </div>
    </div>

    <div class="footer__circle-randon footer__circle-randon--one"></div>
    <div class="footer__circle-randon footer__circle-randon--two"></div>
    <div class="footer__circle-randon footer__circle-randon--three"></div>
    <div class="footer__circle-randon footer__circle-randon--four"></div>
  </div>
</template>
<style lang="scss">
.footer {
  padding: 30px 0 160px 0;
  position: relative;
}
.footer__items {
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;
}

.footer__item {
  width: 25%;
  color: #fff;
}
.footer__title {
  font-weight: bold;
  font-size: 15px;
  margin-bottom: 25px;
}
.footer__subtitle {
  font-size: 15px;
}
.social {
  display: flex;
  align-items: center;
  justify-content: space-between;

  h2 {
    color: #f2994a;
  }
}
.footer__circle-randon {
  width: 10px;
  height: 10px;
  position: absolute;
  opacity: 20%;
  border-radius: 100%;
}
.footer__circle-randon--one {
  background: radial-gradient(
    50% 50% at 50.08% 49.97%,
    #f50000 56.42%,
    #f10000 62.84%,
    #e70000 68.52%,
    #d50000 73.93%,
    #bb0000 79.17%,
    #9a0000 84.29%,
    #720000 89.33%,
    #420000 94.28%,
    #0c0000 99.06%,
    #000000 100%
  );
  left: 200px;
}
.footer__circle-randon--two {
  right: 200px;
  width: 30px;
  height: 30px;
  background: radial-gradient(
    49.96% 49.96% at 50% 49.97%,
    #6e008b 56.42%,
    #6b0087 64.71%,
    #63007d 72.04%,
    #54006b 79.02%,
    #400051 85.78%,
    #260030 92.39%,
    #070008 98.79%,
    #000000 100%
  );
}
.footer__circle-randon--three {
  right: 400px;
  width: 30px;
top: 10px;
  height: 30px;
  background: radial-gradient(
    49.96% 49.96% at 50% 49.97%,
    #6e008b 56.42%,
    #6b0087 64.71%,
    #63007d 72.04%,
    #54006b 79.02%,
    #400051 85.78%,
    #260030 92.39%,
    #070008 98.79%,
    #000000 100%
  );
}

.footer__circle-randon--four {
  right: 300px;
  bottom: 100px;
  width: 10px;
  height: 10px;
  opacity: 10%;
  background: radial-gradient(
    49.96% 49.96% at 50% 49.97%,
    #f50000 56.42%,
    #f10000 62.84%,
    #e70000 68.52%,
    #d50000 73.93%,
    #bb0000 79.17%,
    #9a0000 84.29%,
    #720000 89.33%,
    #420000 94.28%,
    #0c0000 99.06%,
    #000000 100%
  );
}


@media screen and (max-width: 992px) {
  .footer__item {
    width: 50%;
  }
}
@media screen and (max-width: 476px) {
  .footer__item {
    width: 100%;
  }
}
</style>