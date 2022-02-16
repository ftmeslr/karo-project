<template>
  <div class="information">
    <div class="information__left">
      <img class="information__img" src="~assets/img/img-sec-7.png" alt="" />
    </div>
    <div class="information__right">
      <div class="information__title-box">
        <h1 class="information__title">Help Finding Information Online</h1>
        <p class="information__subtitle">
          Fully customizable and neatly organized components <br />
          will help you work faster without limiting creative freedom.
        </p>
      </div>
      <div class="information__items">
        <div class="information__item">
          <img src="~assets/img/Swiss-knife.png" alt="" />
          <p class="information__item-title">Feature One</p>
          <p class="information__itme-subtitle">
            Fully customizable and neatly organized components will help you
            work faster
          </p>
        </div>
        <div class="information__item">
          <img src="~assets/img/lte.png" alt="" />
          <p class="information__item-title">Feature Two</p>

          <p class="information__itme-subtitle">
            Fully customizable and neatly organized components will help you
            work faster
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>

<style lang="scss">
.information {
  display: flex;
  width: 90%;
  margin: auto;
  align-items: center;
  margin-top: 90px;
}
.information__left {
  width: 40%;
}

.information__img {
  width: 100%;
}
.information__right {
  margin-left: 70px;
  width: 50%;
}
.information__title-box {
}
.information__title {
  font-size: 26px;
  color: #99efd0;
}
.information__subtitle {
  color: #8476aa;
}
.information__items {
  display: flex;
}
.information__item {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 370px;
}

.information__item-title {
  color: #99efd0;
  margin: 8px 0;
}
.information__itme-subtitle {
  color: #8476aa;
  font-size: 15px;
  margin: 5px 0;
}

@media screen and (max-width:992px) {
  .information {
    flex-direction: column;

   .information__right{
      width: 100%;
      margin-left: 0;
    }
    .information__left{
      width: 80%;
    }
    
  }
  
}
</style>