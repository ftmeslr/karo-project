<template>
<div>
  <div class="brand">
    <div class="brand__img">
      <img style="width: 100%" src="~assets/img/barand-1.png" alt="" />
    </div>
    <div class="brand__img">
      <img style="width: 100%" src="~assets/img/brand-2.png" alt="" />
    </div>
    <div class="brand__img">
      <img src="~assets/img/brand-3.png" alt="" />
    </div>
    <div class="brand__img">
      <img style="width: 100%" src="~assets/img/brand-4.png" alt="" />
    </div>
    <div class="brand__img" style="min-width: 60px">
      <img style="width: 100%" src="~assets/img/brand-5.png" alt="" />
    </div>
    <div class="brand__img">
      <img style="width: 100%" src="~assets/img/brand-6.png" alt="" />
    </div>
  </div>
  </div>
</template>


<style lang="scss">
.brand {
  width: 90%;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
 
}
.brand__img {
  min-width: 100px;
  opacity: 30%;
   margin: 10px;
}
 .brand {
overflow-x:auto;
}

.brand::-webkit-scrollbar{
  width: 0;
}

@media screen and (max-width: 500px) {
 .brand {
overflow-x:auto;
margin-top:50px
}

.brand::-webkit-scrollbar{
  width: 0;
}
}
</style>

<script>
export default {};
</script>