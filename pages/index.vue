<template>
  <div>
    <navbar-component />
    <landing-component />
    <img class="pattern__one" src="~/assets/img/pattern-1.svg" alt="" />
    <img class="pattern__two" src="~/assets/img/pattern-1.svg" alt="" />

    <brands />
    <choice />
    <traffic-component />
    <img class="pattern__three" src="~/assets/img/pattern-3.svg" alt="" />

    <threeWays-component />
    <nextPro-component />
    <invest-component />
    <img class="pattern__five" src="~/assets/img/pattern-3.svg" alt="" />

    <information-component />
    <contacUs-component />
    <footer-component />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" >
body {
  max-width: 80%;
  margin: auto;
  background: linear-gradient(222.26deg, #3b1d60 1.22%, #040d3e 106.28%);
}
// .btn {
//   width: 157px;
//   height: 46px;
//   border-radius: 3px;
//   letter-spacing: 2px;
// }
// .btn--fill {
//   background-color: #f2994a;
//   border: none;
//   box-shadow: -11.09px 18.13px 36.6483px rgba(242, 153, 74, 0.23);
//   color: #fff;
// }
// .btn--border {
//   margin-left: 20px;
//   background-color: transparent;
//   border: 1px solid #f2994a;
//   color: #f2994a;
// }

@media screen and (max-width: 900px) {
  .btn {
    width: 125px;
    margin-left: 0;
  }
}

.pattern__one {
  position: absolute;
  z-index: -999;
  left: 0;
  opacity: 10%;
}
.pattern__two {
  position: absolute;
  z-index: -999;
  right: 0;
  opacity: 10%;
}
.pattern__three {
  position: absolute;
  z-index: -999;
  left: 0;
  opacity: 30%;
}
.pattern__five{
  position: absolute;
  z-index: -999;
  right: 0;
  opacity: 30%;
  rotate: 180deg;
  }
@media screen and (max-width: 768px) {
  .pattern__two {
    display: none;
  }
}

@media only screen and (max-width: 600px) {
  .pattern__three {width: 80%;}
}
</style>
