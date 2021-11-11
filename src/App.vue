<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
/* eslint-disable */
import jsSHA from 'jssha'
export default {
  data () {
    return {}
  },
  created () {},
  methods: {
    getData () {
      this.axios.get('https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot/Taipei?$top=30&$format=JSON')
        .then((res) => {
          console.log('res', res)
        })
        .catch((error) => {
          console.log(error)
        })
    },
    getAuthorizationHeader () {
      //  填入自己 ID、KEY 開始
      const AppID = '7c9053f3cf1045e38cedce5138cd65fb'
      const AppKey = 'GlSjHMEjLwXCWyoEdX_nscVoxhI'
      //  填入自己 ID、KEY 結束
      const GMTString = new Date().toGMTString()
      const ShaObj = new jsSHA('SHA-1', 'TEXT')
      ShaObj.setHMACKey(AppKey, 'TEXT')
      ShaObj.update('x-date: ' + GMTString)
      const HMAC = ShaObj.getHMAC('B64')
      const Authorization =
        'hmac username="' +
        AppID +
        '", algorithm="hmac-sha1", headers="x-date", signature="' +
        HMAC +
        '"'
      return { Authorization: Authorization, 'X-Date': GMTString }
    }
  }
}
</script>

<style lang="scss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
