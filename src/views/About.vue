<template>
  <div class="about">
    <h1>This is an about page</h1>
    <el-button type="default" @click="getUser()">获取用户信息</el-button>
    <el-button type="primary" @click="getMenu()">获取菜单信息</el-button>
  </div>
</template>

<script>
import axios from 'axios'
import mock from '../mock/mock'
export default {
  name: 'about',
  methods: {
    getUser() {
      axios
        .get('http://localhost:8080/user')
        .then(function(res) {
          alert(JSON.stringify(res.data))
        })
        .catch(function(res) {
          alert(res)
        })
    },
    getMenu() {
      axios
        .get('http://localhost:8080/menu')
        .then(function(res) {
          alert(JSON.stringify(res.data))
        })
        .catch(function(res) {
          alert(res)
        })
    }
  }
}
</script>

