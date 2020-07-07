<template>
  <el-container class="container">
    <el-header class="header">
      <el-row>
        <el-col :span="4">
          <div class="grid-content bg-purple">
            <h1>DevOps</h1>
          </div>
        </el-col>
        <el-col :span="18">
          <div class="grid-content bg-purple-light middle">
            <h3></h3>
          </div>
        </el-col>
        <el-col :span="2">
          <div class="grid-content bg-purple loginOut">
            <a @click="handleSignout()">退出</a>
          </div>
        </el-col>
      </el-row>
    </el-header>
    <el-container>
      <el-aside class="aside" width="200px">
        <el-menu :router="true" :unique-opened="true">
          <!-- nav hello -->
          <el-menu-item index="/hello">
            <i class="el-icon-circle-check"></i>
            <span>hello</span>
          </el-menu-item>
          <!-- nav dash -->
          <el-submenu index="0">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>Dashboard</span>
            </template>
            <el-menu-item index="/dashboard/dash01">
              <i class="el-icon-circle-check"></i>
              <span>dash01</span>
            </el-menu-item>
            <el-menu-item index="/dashboard/dash02">
              <i class="el-icon-circle-check"></i>
              <span>dash02</span>
            </el-menu-item>
          </el-submenu>
          <!-- nav 1 -->
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>资源管理</span>
            </template>
            <el-menu-item index="/users">
              <i class="el-icon-circle-check"></i>
              <span>资源列表</span>
            </el-menu-item>
            <el-menu-item index="/users">
              <i class="el-icon-circle-check"></i>
              <span>资源状态</span>
            </el-menu-item>
            <el-menu-item index="/users">
              <i class="el-icon-circle-check"></i>
              <span>资源同步</span>
            </el-menu-item>
          </el-submenu>
          <!-- 2 -->
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>项目管理</span>
            </template>
            <el-menu-item index="/roles">
              <i class="el-icon-circle-check"></i>
              <span>项目列表</span>
            </el-menu-item>
            <el-menu-item index="rights">
              <i class="el-icon-circle-check"></i>
              <span>项目部署</span>
            </el-menu-item>
          </el-submenu>

          <!-- 3 -->
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>系统管理</span>
            </template>
            <el-menu-item index="1-1">
              <i class="el-icon-circle-check"></i>
              <span>账号管理</span>
            </el-menu-item>
            <el-menu-item index="1-1">
              <i class="el-icon-circle-check"></i>
              <span>角色管理</span>
            </el-menu-item>
            <el-menu-item index="1-1">
              <i class="el-icon-circle-check"></i>
              <span>系统设置</span>
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main class="main">
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    // HelloWorld
  },
  beforeCreate() {
    const token = localStorage.getItem('token')
    if (!token) {
      console.log('token not exist')
      // this.$router.push({ name: 'Login' })
    }
  },
  methods: {
    handleSignout() {
      // clear token
      localStorage.clear()
      // msg logout succ
      this.$message.success('logout succ')
      // redirect to login
      this.$router.push({ name: 'Login' })
    }
  }
}
</script>

<style scoped>
.container {
  height: 100%;
}
.header {
  background-color: #b3c0d1;
}
.aside {
  background-color: #99989c;
}
.main {
  background-color: #e9eef3;
}
/* heaer */
.middle {
  text-align: center;
}
.loginOut {
  line-height: 60px;
  text-decoration: none;
}
</style>
