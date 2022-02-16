<template>
  <div class="contactus">
    <img class="pattern__six" src="~assets/img/pattern-6.svg" alt="" />
    <h2 class="contactus__title">There are many reasons to get down</h2>

    <p class="contactus__subtitle">
      There are many reasons to get down and start to get<br />depressed about
      your situation.
    </p>

    <div>
      <input type="text" placeholder="your Email" />
      <button>send</button>
    </div>
    <p class="contactus__nospam">
      No spam. Only releases, updates and discounts
    </p>
  </div>
</template>

<style lang="scss">
.contactus {
  width: 90%;
  height: 324px;
  background: #14154e;
  backdrop-filter: blur(134px);
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 150px auto;
  padding: 10px 50px;
}

.contactus__title {
  font-size: 36px;
  color: #f2994a;
  margin: 10px 0;
  text-align: center;
}

.contactus__subtitle {
  font-size: 16px;
  color: #95a1bb;
  text-align: center;
}
.contactus__nospam {
  font-size: 14px;
  color: #8476aa;
  text-align: center;
}
.pattern__six {
  position: absolute;
  z-index: -999;
  left: 0;
  opacity: 30%;
  width: 100%;
}
@media screen and (max-width: 768px) {
  .contactus {
    padding: 10px 10px;
  }
  .contactus__title {
    font-size: 26px;
  }
}
</style>