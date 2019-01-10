<template>
  <div class="container r">
    <transition name='fade'>
    <b-alert class="alrt"
            :show="dismissCountDown"
            dismissible
            variant="danger"
            @dismissed="dismissCountDown=0">
     <p>Неверно введены данные</p>
   </b-alert>
 </transition>
    <form class="login">
				<div class="login-container">
					<h1>Вход в личный кабинет</h1><br>
				  <form>
					<input required v-model="username" type="text" name="user" placeholder="Username">
					<input required v-model="password" type="password" name="pass" placeholder="Password">
          <b-button type="button" class="login login-submit2" variant="primary" v-on:click="login()">Войти</b-button>
				  </form>
				  <div class="login-help">
					<a href="#" @click="registration">Регистрация</a>
				  </div>
				</div>
		 </form>
  </div>
</template>

<script>
  import { serverBus } from './../../main';
  export default {
    data(){
      return {
        username: "",
        password: "",
        dismissCountDown: 0
      };
    },
    methods: {
      login(){
        const {username, password}  = this
        //serverBus.$emit('logStatus', true);
        this.$http.post("http://localhost:9090/bank/login?" + 'username='+ username + '&' + 'password=' + password).then(result => {
           if (result.ok) {
             serverBus.$emit('logStatus', true);
             setTimeout(function(){
                     serverBus.$emit('logStatus', false);
                   }, 120000);
           }

       }, result => {
           console.log('Result ->' + result.status);
           this.dismissCountDown = 3;
      })
      },
      registration(){
        console.log("registration");
        this.$router.push({
          name: 'Registration',
          query: { redirect: '/Registration' }
        });
      },
    }
  }
</script>
<style>
.container{
  margin-top: 5%;
}

.login{
  margin-top: 50px;
}
.login-container {

  padding: 30px;
  max-width: 400px;
  width: 100% !important;
  background-color: #F7F7F7;
  margin: 0 auto;
  border-radius: 2px;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  font-family: roboto;
}

.login-container h1 {
  text-align: center;
  font-size: 1.8em;
  font-family: roboto;
}

.login-container input[type=submit] {
  width: 100%;
  display: block;
  margin-bottom: 10px;
  position: relative;
}

.login-container input[type=text], input[type=password] {
  height: 44px;
  font-size: 16px;
  width: 100%;
  margin-bottom: 10px;
  -webkit-appearance: none;
  background: #fff;
  border: 1px solid #d9d9d9;
  border-top: 1px solid #c0c0c0;
  /* border-radius: 2px; */
  padding: 0 8px;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
}

.login-container input[type=text]:hover, input[type=password]:hover {
  border: 1px solid #b9b9b9;
  border-top: 1px solid #a0a0a0;
  -moz-box-shadow: inset 0 1px 2px rgba(0,0,0,0.1);
  -webkit-box-shadow: inset 0 1px 2px rgba(0,0,0,0.1);
  box-shadow: inset 0 1px 2px rgba(0,0,0,0.1);
}

.login-submit {
  border: 0px;
  color: #fff;
  text-shadow: 0 1px rgba(0,0,0,0.1);
  background-color: #4d90fe;
  padding: 17px 0px;
  font-family: roboto;
  font-size: 18px;
}
.login-submit2 {
  margin-bottom: 10%;
  width: 340px;
  font-family: roboto;
  font-size: 18px;
}

.login-submit:hover {
  border: 0px;
  text-shadow: 0 1px rgba(0,0,0,0.3);
  background-color: #357ae8;
  cursor: pointer;
}

.login-container a {
  text-decoration: none;
  color: #000;
  font-weight: 400;
  text-align: center;
  display: inline-block;
  opacity: 0.6;
  transition: opacity ease 0.5s;
}

.login-container a:hover {
  color: #357ae8;
  text-shadow: 0 1px rgba(0,0,0,0.3);
}

.login-help{
  font-size: 18px;
}
.alrt{
  margin-top: 20px;
}
</style>
