<template>
  <div class="wrapper">
    <div class="sidebar">
      <a v-bind:class="{active: classInf}" href="#home"  v-on:click="greet(1)">Личная информация</a>
      <a v-bind:class="{active: classPay}" href="#news"  v-on:click="greet(2)">Переводы</a>
      <a v-bind:class="{active: classClos}" href="#contact" v-on:click="greet(3)">Пополнение баланса</a>
      <a v-bind:class="{active: classAbout}" href="#withdraw" v-on:click="greet(4)">Снятие средств</a>
      <a v-bind:class="{active: classDeposite}" href="#deposite" v-on:click="greet(5)">Депозиты</a>

    </div>

    <div class="content" >
      <h2 class="headTitle">{{this.title}}</h2>
      <hr>

      <div class="accTableClass" v-if="val==1">
        <accTable></accTable>
      </div>

      <div v-if="val==2">
        <payment></payment>
      </div>

      <div v-if="val==3">
        <donation></donation>
      </div>

      <div v-if="val==4">
        <withdraw></withdraw>
      </div>

      <div v-if="val==5">
        <deposite></deposite>
      </div>
    </div>
</div>
</template>

<script>
import accTable from "./AccTable"
import payment from "./Payment"
import donation from "./Donation"
import withdraw from "./Withdraw"
import deposite from "./Deposite"

export default {
  data(){
    return {
      val: 1,
      classInf: true,
      classPay: false,
      classClos: false,
      classAbout: false,
      classDeposite: false,
      title: "Личная информация",
    };
  },
  components:{
    accTable,
    payment,
    donation,
    withdraw,
    deposite
  },
  methods: {
    greet: function (value) {
      this.val = value;
      switch (value) {
        case 1:
          this.title = "Личная информация";
          this.classInf = true;
          this.classPay = false;
          this.classClos = false;
          this.classAbout = false;
          this.classDeposite = false;
          break;
        case 2:
          this.title = "Переводы";
          this.classInf = false;
          this.classPay = true;
          this.classClos = false;
          this.classAbout = false;
          this.classDeposite = false;
          break;
        case 3:
          this.title = "Пополнение баланса";
          this.classInf = false;
          this.classPay = false;
          this.classClos = true;
          this.classAbout = false;
          this.classDeposite = false;
          break;
        case 4:
          this.title = "Снятие средств";
          this.classInf = false;
          this.classPay = false;
          this.classClos = false;
          this.classAbout = true;
          this.classDeposite = false;
          break;
        case 5:
          this.title = "Депозиты";
          this.classInf = false;
          this.classPay = false;
          this.classClos = false;
          this.classAbout = false;
          this.classDeposite = true;
        break;
        default:
      }
    }
  }
}
</script>

<style>

.content{

}

.wrapper{  margin-top: 3.9%;}

.sidebar {
  margin: 0;
  padding: 0;
  width: 200px;
  background-color: #f1f1f1;
  position: fixed;
  height: 100%;
  overflow: auto;
}

.sidebar a {
  display: block;
  color: black;
  padding: 16px;
  text-decoration: none;
}

.sidebar a.active {
  background-color: DodgerBlue;
  color: white;
}

.sidebar a:hover:not(.active) {
  background-color: #555;
  color: white;
}

div.content {
  margin-left: 200px;
  height: 730px;
  padding: 1px 16px;
}
.headTitle{
  margin-top: 1%;
}
</style>
