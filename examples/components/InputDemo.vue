<template>
  <div class="app">
    <!-- 基础用法 -->
    <sun-input v-model="value" label="文本" placeholder="请输入文本" />


    <!-- 自定义类型 -->
    <!-- 输入任意文本 -->
    <sun-input v-model="text" label="文本" />
    <!-- 输入手机号，调起手机号键盘 -->
    <sun-input v-model="tel" type="tel" label="手机号" />
    <!-- 允许输入正整数，调起纯数字键盘 -->
    <sun-input v-model="digit" type="digit" label="整数" />
    <!-- 允许输入数字，调起带符号的纯数字键盘 -->
    <sun-input v-model="number" type="number" label="数字" />
    <!-- 输入密码 -->
    <sun-input v-model="password" type="password" label="密码" />

    <!-- 禁用输入框 -->
    <sun-input label="文本" value="输入框只读" readonly />
    <sun-input label="文本" value="输入框已禁用" disabled />

    <!-- 显示图标 -->

     <sun-input
      v-model="value1"
      label="文本"
      left-icon="success-o"
      right-icon="warning-o"
      placeholder="显示图标"
    />
    <sun-input
      v-model="value2"
      clearable
      label="文本"
      left-icon="friends-o"
      placeholder="显示清除图标"
    />

    <!-- 错误提示 -->
    <sun-input
      v-model="username"
      error
      required
      label="用户名"
      placeholder="请输入用户名"
    />
    <sun-input
      v-model="phone"
      required
      label="手机号"
      placeholder="请输入手机号"
      error-message="手机号格式错误"
    />

    <!-- 输入框内容对齐 -->
    <sun-input
      v-model="value3"
      label="文本"
      placeholder="输入框内容右对齐"
      input-align="right"
    />

     <!-- 是否显示下边框 -->
    <sun-input
      v-model="value4"
      label="文本"
      :border="false"
    />
    <!-- <sun-button @click="$refs.emailRef.focus()">获取焦点</sun-button>
    <sun-button @click="$refs.emailRef.blur()">失去焦点</sun-button> -->
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value:'',
        username:'',
        phone:'',
        value1: '',
        value2: '123',
        value3:'',
        value4:'',
        tel: '',
        text: '',
        digit: '',
        number: '',
        password: '',
      }
    }
  }

</script>

<style lang="less">
  * {
    margin: 0;
    padding: 0;
  }

</style>
