<template>
  <el-form
    :model="loginForm"
    :rules="fieldRules"
    ref="loginForm"
    label-position="left"
    label-width="0px"
    class="demo-ruleForm login-container"
  >
    <h3 class="title">系统登录</h3>
    <el-form-item prop="account">
      <el-input type="text" v-model="loginForm.account" auto-complete="off" placeholder="账号"></el-input>
    </el-form-item>
    <el-form-item prop="password">
      <el-input type="password" v-model="loginForm.password" auto-complete="off" placeholder="密码"></el-input>
    </el-form-item>
    <!-- <el-checkbox v-model="checked" checked class="remember">记住密码</el-checkbox> -->
    <el-form-item style="width:100%;">
      <el-button type="primary" style="width:48%;" @click.native.prevent="reset">重 置</el-button>
      <el-button
        type="primary"
        style="width:48%;"
        @click.native.prevent="login"
        :loading="logining"
      >登 录</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import mock from '../mock/mock'
import Cookies from 'js-cookie'
import { requestLogin } from '../api'
export default {
  data() {
    return {
      logining: false,
      loginForm: {
        account: 'admin',
        password: '123456'
      },
      fieldRules: {
        account: [{ required: true, message: '请输入账号', trigger: 'blur' }],
        password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
      },
      checked: true
    }
  },
  methods: {
    login() {
      let userinfo = {
        account: this.loginForm.account,
        password: this.loginForm.password
      }
      console.log(userinfo)
      requestLogin(userinfo)
        .then(res => {
          this.logining = false
          let { code, msg, data } = res
          console.log(code, msg, data)
          if (!data.token) {
            this.$message({
              message: msg,
              type: 'error'
            })
          } else {
            Cookies.set('token', res.data.token)
            sessionStorage.setItem('user', userinfo.account)
            sessionStorage.setItem('token', res.data.token)
            this.$store.commit('LOGIN', {
              token: res.data.token,
              user: userinfo.account
            })
            this.$router.push('/hello')
          }
        })
        .catch(function(res) {
          alert(res)
        })
    },
    reset() {
      this.$refs.loginForm.resetFields()
    }
  }
}
</script>
