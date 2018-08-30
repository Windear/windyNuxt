<template>
  <div class="notFound">
    <img src="~/static/img/notfound.png" width="500">
    <p>Windy还没有收藏该类素材哟，再等等吧~</p>
  </div>
</template>
<style scoped lang="css">
/*没有数据*/

.notFound {
  display: flex;
  flex-flow: column;
  align-items: center;
  margin: 40px auto;
}

.notFound p {
  font-size: 20px;
  margin-left: -60px;
  color: #8492A6;
}

/*没有数据*/

@media screen and (max-width: 760px) {
  .notFound img {
    width: 320px;
  }
  .notFound p {
  font-size: 14px;
  margin-left: 0px;
  }
}

</style>
