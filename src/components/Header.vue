<template>
    <el-header class="header">
        <div class="line"></div>
        <el-menu class="el-menu-demo" mode="horizontal" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
            <el-menu-item index="1"><router-link to="">Аналитика</router-link></el-menu-item>
            <el-menu-item index="2"><router-link to="">Администратор</router-link></el-menu-item>
            <el-menu-item index="3"><router-link to="">Касса</router-link></el-menu-item>
            <el-menu-item index="4"><router-link to="/debtors">Должники</router-link></el-menu-item>
            <el-menu-item index="5"><router-link to="/manager">Менеджер</router-link></el-menu-item>
            <el-menu-item index="6"><router-link to="">Оператор</router-link></el-menu-item>
            <el-menu-item index="7"><router-link to="">Безопасность</router-link></el-menu-item>
            <el-menu-item index="8"><router-link to="">Бухгалтерия</router-link></el-menu-item>
        </el-menu>
    </el-header>
</template>

<script>
export default {
}
</script>

<style lang="scss" scope>
.el-menu-item {
  padding: 0;
}

.el-menu-item  a {
    display: block;
    padding: 0 20px;
}
</style>