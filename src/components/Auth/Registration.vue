<template>
  <div class="container">
    <form class="registration">
      <div class="registration-container">
        <h1>Регистрация</h1>
        <input required v-model="username" type="text" placeholder="Username"/>
        <input required v-model="password" type="password" placeholder="Password"/>
        <input required v-model="confirm" type="password" placeholder="Confirm password"/>
        <input required v-model="email" type="email" placeholder="Email"/>
        <input type="submit" name="registration" class="registration registration-submit" value="Регистрация" @click="registration"/>
        <div class="registration-help">
        <a href="#" @click="login">Назад</a>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data(){
    return {
      username: '',
      password: '',
      confirm: '',
      email: ''
    };
  },
  methods:{
    registration() {
      const {username, password, email} = this
      this.$http.post("http://localhost:9090/bank/registration?" + 'username='+ username + '&' + 'password=' + password + '&' + 'email=' + email).then(result=>{
          if (result.ok){
            serverBus.$emit('logStatus', true)
            alert("Вы успешно зарегистриовались")
            this.$router.push({
              name: 'mainArea',
              query: { redirect: '/mainArea' }
            });
          }
      }, result => {
          console.log('Result ->' + result.status)
        })
    },
    login () {
      this.$router.push({
        name: 'login',
        query: { redirect: '/login' }
      })
    }
  }
}
</script>
<style>
.registration {
  margin-top: 50px;
}
.registration-container {
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
.registration-container h1 {
  text-align: center;
  font-size: 1.8em;
  font-family: roboto;
}

.registration-container input[type=submit] {
  width: 100%;
  display: block;
  margin-bottom: 10px;
  position: relative;
}
.registration-container input[type=text], input[type=password], input[type=email] {
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
.registration-container input[type=text]:hover, input[type=password]:hover, input[type=email]:hover {
  border: 1px solid #b9b9b9;
  border-top: 1px solid #a0a0a0;
  -moz-box-shadow: inset 0 1px 2px rgba(0,0,0,0.1);
  -webkit-box-shadow: inset 0 1px 2px rgba(0,0,0,0.1);
  box-shadow: inset 0 1px 2px rgba(0,0,0,0.1);
}

.registration-submit {
  border: 0px;
  color: #fff;
  text-shadow: 0 1px rgba(0,0,0,0.1);
  background-color: #4d90fe;
  padding: 17px 0px;
  font-family: roboto;
  font-size: 18px;
}

.registration-submit:hover {
  border: 0px;
  text-shadow: 0 1px rgba(0,0,0,0.3);
  background-color: #357ae8;
  cursor: pointer;
}
.registration-container a {
  text-decoration: none;
  color: #000;
  font-weight: 400;
  text-align: center;
  display: inline-block;
  opacity: 0.6;
  transition: opacity ease 0.5s;
}

.registration-container a:hover {
  color: #357ae8;
  text-shadow: 0 1px rgba(0,0,0,0.3);
}

.registration-help{
  font-size: 18px;
}

</style>
