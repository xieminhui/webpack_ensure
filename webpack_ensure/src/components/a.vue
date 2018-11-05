<template>
   <div class="g-mn">
      <p>this page is a</p>
   </div>
</template>

<script>
export default {
  mounted () {
    alert('this page is a')
  }
}
</script>

<style lang="less" scoped>
.g-mn {
  p {
    font-size: 100px;
    color: #333;
  }
}
</style>
