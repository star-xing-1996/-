<template>
  <div class="container-login">
    <el-card class="my-card">
      <img src="../../assets/logo_index.png" alt="">
    <el-form :model="loginForm">
    <el-form-item>
      <el-input v-model="loginForm.mobile" placeholder="请输入手机号"></el-input>
    </el-form-item>
    <el-form-item>
      <el-input style="width:238px;margin-right:10px" v-model="loginForm.code" placeholder="请输入验证码"></el-input>
     <el-button>获取验证码</el-button>
    </el-form-item>
    <el-form-item>
     <el-checkbox :value="true">我已经阅读和同意用户协议和隐私条款</el-checkbox>
    </el-form-item>
    <el-form-item>
      <el-button style="width:100%" type="success">登录</el-button>
    </el-form-item>
    </el-form>
  </el-card>
  </div>

</template>

<script>
export default {
  data () {
    return {
      loginForm: {
        mobile: '',
        code: ''
      }
    }
  }
}
</script>

<style lang="less" scoped>
.container-login{
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    // background-color: grey;
    background:url(../../assets/login_bg.jpg);
    .my-card{
      width: 400px;
      height: 350px;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%,-50%);
  img{
    display: block;
    margin:0 auto 20px;
    width: 200px;

  }
    }
}
</style>
