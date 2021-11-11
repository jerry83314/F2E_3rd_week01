<template>
  <div>
    <nav class="navbar d-flex justify-content-between align-items-end">
      <router-link to="/" class="d-block">
        <img src="../assets/images/logo.png" alt />
      </router-link>
      <div class="navbar-menu d-flex">
        <router-link to class="d-flex align-items-center text-pink me-4">
          <img src="../assets/images/navbar01.png" alt />
          <span class="d-block ms-2">台灣景點</span>
        </router-link>
        <router-link to class="d-flex align-items-center text-yellow me-4">
          <img src="../assets/images/navbar02.png" alt />
          <span class="d-block ms-2">美食住宿</span>
        </router-link>
        <router-link to class="d-flex align-items-center text-green">
          <img src="../assets/images/navbar03.png" alt />
          <span class="d-block ms-2">景點交通</span>
        </router-link>
      </div>
    </nav>
    <div class="jumbotron-wrap">
      <div class="jumbotron-img h-100 d-flex justify-content-center align-items-center">
        <div class="jumbotron-text">
          <img src="../assets/images/title.svg" alt />
          <p class="text-white mb-0">台北、台中、台南、屏東、宜蘭……遊遍台灣</p>
          <span class="d-flex">
            <el-input v-model="keywords" placeholder="搜尋關鍵字"></el-input>
            <img src="../assets/images/navbar05.svg" alt />
          </span>
          <span class="d-flex">
            <el-select v-model="value" clearable placeholder="類別" class="me-1">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
            <el-select v-model="value" clearable placeholder="縣市" class="ms-1">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
            <img src="../assets/images/navbar04.svg" alt />
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      keywords: '',
      options: [
        {
          value: '选项1',
          label: '黄金糕'
        },
        {
          value: '选项2',
          label: '双皮奶'
        },
        {
          value: '选项3',
          label: '蚵仔煎'
        },
        {
          value: '选项4',
          label: '龙须面'
        },
        {
          value: '选项5',
          label: '北京烤鸭'
        }
      ],
      value: ''
    }
  }
}
</script>

<style lang="scss">
@import "../assets/scss/main.scss";
</style>
