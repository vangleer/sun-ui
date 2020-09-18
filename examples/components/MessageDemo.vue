<template>
  <div class="app">
    <sun-button @click="handleClick" plain type="primary">显示/隐藏</sun-button>
    <button class="btn">按钮</button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        isShow: false,
        index: 0
      };
    },
    methods: {
      handleClick() {
        this.index++;
        // this.$message.success({
        //   message: "只是提示只是提示只是提示" + this.index,
        //   position: "bottom",
        //   border: true
        // });
        // this.$message.error({
        //   message: "只是提示只是提示只是提示" + this.index,
        //   position: "bottom",
        //   border: true
        // });
        // this.$message.warning({
        //   message: "只是提示只是提示只是提示" + this.index,
        //   position: "bottom",
        //   border: true
        // });
        // this.$message.info({
        //   message: "只是提示只是提示只是提示" + this.index,
        //   position: "bottom",
        //   border: true
        // });
        // this.$message.loading({
        //   message: "只是提示只是提示只是提示" + this.index,
        //   position: "bottom",
        //   border: true
        // });
        this.$message({
          message: "只是提示只是提示只是提示",
          duration: 1000,
          icon: "loading",
          border: true,
          onClose: () => {
            console.log("关闭了");
          }
        });
      }
    }
  };

</script>

<style lang="less" scoped>
  * {
    margin: 0;
    padding: 0;
  }

  .btn {
    position: relative;
    display: inline-block;
    height: 30px;
    box-sizing: border-box;
    margin: 0;
    padding: 0 12px;
    font-size: 15px;
    line-height: 30px;
    text-align: center;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.3s;
    -webkit-tap-highlight-color: transparent;
    -webkit-appearance: none;
    text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.12);
    -webkit-box-shadow: 0 2px 0 rgba(0, 0, 0, 0.045);
    box-shadow: 0 2px 0 rgba(0, 0, 0, 0.045);
    border: 0;
    outline: none;

    &::after {
      position: absolute;
      content: "";
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      transition: all 0.5s;
    }
  }

  .btn:active {
    &::after {
      border: 5px solid rgba(0, 0, 0, 0.1);
    }
  }

</style>
