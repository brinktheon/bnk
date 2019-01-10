<template>
  <div id="app">

    <nav class="navbar navbar-expand-md navbar-dark bg-dark">
        <div class="navbar-collapse collapse w-100 order-3 dual-collapse2">
          <a class="navbar-brand" href="#">
            <img src="./orel.jpg" class="test" alt="BV">
            Gachimuchi интернет банк
          </a>
            <ul class="navbar-nav ml-auto">
              <li class="nav-item">
                <router-link class="nav-item nav-link" to='/'>Главная</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-item nav-link" to='Service'>Услуги</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-item nav-link" to='About'>О нас</router-link>
              </li>
              <li class="nav-item" v-if="isLoggedSuccess===true">
                <router-link class="nav-item nav-link" to='MainArea'>Мой аккаунт</router-link>
              </li>
            </ul>
            <div class="nav-item" v-if="isLoggedSuccess===false">
              <router-link class="nav-item nav-link" to='login'>
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Вход / Регистрация</button>
              </router-link>
            </div>
        </div>
    </nav>
    <router-view/>

    <!-- Footer -->
    <footer id="footer" class="footer navbar-fixed-bottom">
        <div class="footer-copyright text-center py-3">© 2018 Контакты:
          <a href="">andreew.gl@yandex.ru</a>
        </div>
      </footer>
  </div>
</template>

<script>
import { serverBus } from './main'
export default {
  name: 'App',
  data() {
    return {
        isLoggedSuccess: false
    }
  },
  methods:{
    clk(){
      this.isLoggedSuccess = !this.isLoggedSuccess
    },
    mt(){

    }
  },
  created() {
    //isLoggedSuccess = this.$cookie.get('isLogged');
    // Using the service bus
    serverBus.$on('logStatus', (value) => {
    this.isLoggedSuccess = value;
    this.$cookie.set('isLogged', true, { expires: '120s' });
    if (value === true){
      this.$router.push({
        name: 'mainArea',
        query: { redirect: '/mainArea' }
      });
    } else{
      this.$router.push({
        name: 'MainPage',
        query: { redirect: '/' }
      });
    }
   });
 },
 mounted: function () {
   if (this.$cookie.get('isLogged') != null){
     this.isLoggedSuccess = true;
   } else{
     this.isLoggedSuccess = false;
     this.$router.push({
       name: 'MainPage',
       query: { redirect: '/' }
     });
   }
 }
}
</script>

<style>
.navbar-nav  li{
  padding-left:30px;
  padding-right:30px;
}
.footer {
   position: fixed;
   left: 0;
   bottom: 0;
   width: 100%;

   background-color: #373B44;
   color: white;
   text-align: center;
}
.app{
  background-color: #F5F4F9;
}
.test{
  width: 50px;
  height: 50px;
}
</style>
