<template>
  <div id="app">
    <el-container>
      <el-header class="header">
      <div class="line"></div>
      <el-menu
        :default-active="activeIndex2"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b">
        <el-menu-item index="1">Аналитик</el-menu-item>
        <el-menu-item index="2">Администратор</el-menu-item>
        <el-menu-item index="3">Касса</el-menu-item>
        <el-menu-item index="4">Должники</el-menu-item>
        <el-menu-item index="5">Менеджер</el-menu-item>
        <el-menu-item index="6">Оператор</el-menu-item>
        <el-menu-item index="7">Безопасность</el-menu-item>
        <el-menu-item index="8">Бухгалтерия</el-menu-item>
      </el-menu>
      </el-header>
      <el-container>
        <el-container>
          <el-main class="main">Main</el-main>
          <el-footer class="footer">Footer</el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
$mainColor: #3DBBE6;
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $mainColor;
}
.el-container {
  height: 100vh;
}
.header {
 background: rgb(84, 92, 100);
}
.main {
  
}
.footer {
  background: $mainColor;
  color: #fff;
}
</style>
