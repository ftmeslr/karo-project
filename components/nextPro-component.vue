<template>
  <div class="nextpro">
    <h1 class="nextpro__title">
      Create your <span class="nextpro__title--orng">next project</span> with
      startup <br />framework
    </h1>
    <button class="nextpro__btn">GET STARTED</button>
    <div class="nextpro__img">
      <img src="~assets/img/sec-5.png" alt="" />
    </div>
  </div>
</template>

<style lang="scss">
.nextpro {
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
  margin-top: 80px;
}
.nextpro__title {
  color: #99efd0;
  text-align: center;
  font-family: 42px;
}
.nextpro__title--orng {
  color: #f2994a;
}
.nextpro__btn {
  letter-spacing: 2px;
  width: 157px;
  height: 46px;
  border-radius: 3px;
  background-color: #f2994a;
  border: none;
  box-shadow: -11.09px 18.13px 36.6483px rgba(242, 153, 74, 0.23);
  position: absolute;
  top: 140px;
  color: #fff;
  letter-spacing: 2px;
}
@media screen and (max-width: 768px) {
  .nextpro__title {
    font-size: 26px;
  }
}
@media screen and (max-width: 992px) {
  .nextpro__img {
    width: 120%;
    margin-top: 10px;

    img {
      width: 100%;
    }
  }
}
</style>