<template>
  <div class="MainPageView">
  <div class="container pt-2">
    <b-carousel id="carousel1"
               style="text-shadow: 1px 1px 2px #333;"
               controls
               indicators
               background="#373B44"
               :interval="4000"
               img-width="1024"
               img-height="380"
               v-model="slide"
               @sliding-start="onSlideStart"
               @sliding-end="onSlideEnd"
   >

     <b-carousel-slide :img-src="require('./../sliderbank.jpg')">
     </b-carousel-slide>

     <b-carousel-slide :img-src="require('./../servicesBank.png')">
     </b-carousel-slide>

     <b-carousel-slide :img-src="require('./../customer.jpg')">
     </b-carousel-slide>
   </b-carousel>
  </div>
  <div class="middleTitle">
    <div class="mTitle">
      <p id="text">Добро пожаловать в <strong>Gachimuchi</strong> интернет банк</p>
    </div>
    <div class="mButton">
    <router-link class="nav-item nav-link" to='login'>
      <button class="btn btn-primary my-2 my-sm-0" type="submit" v-if="this.btmShow===true">Войти</button>
    </router-link>
   </div>
  </div>
  <div class="shortService">
    <div class="serviceContainer">
      <div class="serv1">
        <div class="ic">
          <home  class='icon-2x' /><br/>
        </div>
        Банк онлайн <br>
        GM предоставляет услуги интернет банка онлайн
      </div>
      <div class="serv2">
        <div class="ic">
          <MenuIcon  class='icon-2x' /><br/>
        </div>
        Простое управление <br>
        GM предоставляет простое управление
      </div>
      <div class="serv3">
        <div class="ic">
          <tableLarge  class='icon-2x' /><br/>
        </div>
        Учет своих операций <br>
        GM предоставляет оналайн учет операций
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import MenuIcon from "vue-material-design-icons/Server.vue"
import tableLarge from "vue-material-design-icons/SubtitlesOutline.vue"
import home from "vue-material-design-icons/Home.vue"

export default {
  data () {
      return {
        slide: 0,
        sliding: null,
        btmShow: true,
      }
    },
    methods: {
      onSlideStart (slide) {
        this.sliding = true
      },
      onSlideEnd (slide) {
        this.sliding = false
      }
    },
    components: {
      MenuIcon,
      tableLarge,
      home
    },
    mounted: function () {
      if (this.$cookie.get('isLogged') != null){
        this.btmShow = false;
      } else{
        this.btmShow = true;
      }
    }
}
</script>
<style>
.MainPageView{
   background: #F1F1F1; /* Цвет фона */
   padding: 10px; /* Поля вокруг текста */
   height: 820px;
}
.middleTitle{
  background-color: #373B44;
  width: 100%;
  height: 100px;
  text-align: center;
  margin-top: 4%;
}
#text {
  padding: 35px;
  color: white;
}
.shortService{
  margin-top: 30px;
  background-color: #F1F1F1;
  width: 100%;
  height: 120px;
  text-align: center;
}
.serviceContainer{
  padding-top: 15px;
  margin-left: 19%;
}
.serv1{
   float:left;
   margin-top: 1%;
}
.serv2{
   float:left;
   margin-left: 5%;
   margin-top: 1%;
}
.serv3{
  float:left;
  margin-left: 5%;
  margin-top: 1%;
}
.home {
    width: 45px;
    height: 45px;
    background: transparent;
    opacity: 0.5;
}
.material-design-icon.icon-2x > .material-design-icon__svg {
    height: 2.4em;
    width: 2.4em;
}
.ic{
  margin-right: 10%;
}
.mTitle{
  float: left;
  margin-left: 35%;
}
.mButton{
  margin-top: 1.1%;
  float: left;
}
</style>
