<template>
  <div id="app">
    <el-container>
      <el-header class="header">
      <div class="line"></div>
      <el-menu
        class="el-menu-demo"
        mode="horizontal"
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
          <el-main class="main">
            <el-container>
              <el-button>Вернуться</el-button>
            </el-container>
            <el-container>
              <el-button icon="el-icon-search" round type="primary" v-on:click="searchOpen">Найти</el-button> 
              <el-button icon="el-icon-edit" round type="success" v-on:click="createOpen">Создать заёмщика</el-button>
            </el-container>
            <el-form label-width="100px" class="form" v-if="searchVisible">
              <el-form-item label="Фамилия">
                <el-input v-model="formSearch.surname"></el-input>
              </el-form-item>
              <el-form-item label="Имя">
                <el-input v-model="formSearch.name"></el-input>
              </el-form-item>
              <el-form-item label="Отчество">
                <el-input v-model="formSearch.patronymic"></el-input>
              </el-form-item>
              <el-button round>Найти</el-button>
            </el-form>
            <el-form label-width="100px" class="form" v-if="createVisible">
              <el-form-item label="Фамилия">
                <el-input v-model="formSearch.surname"></el-input>
              </el-form-item>
              <el-form-item label="Имя">
                <el-input v-model="formSearch.name"></el-input>
              </el-form-item>
              <el-form-item label="Отчество">
                <el-input v-model="formSearch.patronymic"></el-input>
              </el-form-item>
              <el-button round>Создать</el-button>
            </el-form>
          </el-main>
          <el-footer class="footer">Footer</el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'app',
  
  data() {
    return {
      formSearch: {
        surname: '',
        name: '',
        patronymic: ''
      },
      searchVisible: false,
      createVisible: false
    };
  },
  methods: {
    searchOpen: function() {
      this.searchVisible = true;
      this.createVisible = false;
    },
    createOpen: function() {
      this.createVisible = true;
      this.searchVisible = false;
    },
  }
}
</script>

<style lang="scss">
$mainColor: #3DBBE6;
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.el-container {
  margin-bottom: 20px;
}
.header {
 background: rgb(84, 92, 100);
}
.main {
  
}
.footer {
  background: rgb(84, 92, 100);
  color: #fff;
}
.form {
  width: 450px;
  padding: 20px;
  border: 1px solid rgb(84, 92, 100);
  border-radius: 15px;
}
</style>
