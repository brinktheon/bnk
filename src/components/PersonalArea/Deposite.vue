<template>
  <div>
  <a class="previous" v-if="this.show===true" @click="back">&laquo; Назад</a>
  <transition name='fade'>
  <b-alert class="alrt"
          :show="failedDepositeCutDown"
          dismissible
          variant="danger"
          @dismissed="failedDepositeCutDown=0">
   <p>Транзакция прошла с ошибкой</p>
 </b-alert>
</transition>
<transition name='fade'>
 <b-alert class="alrt"
         :show="completeDepositeCutDown"
         dismissible
         variant="success"
         @dismissed="completeDepositeCutDown=0">
  <p>Ваша транзакция успешно обработана</p>
 </b-alert>
</transition>
  <div class="mainPlace" v-if="this.show===false">
  <b-container fluid>
    <div class="card_roup">
        <h1>Депозитные схемы</h1>
        <p>
          Мы предлагаем несколько элегантных схем депозитов, которые удовлетворяют потребности индивидуальных и коммерческих клиентов.
        </p>
        <h2>Продукты</h2>

    <b-card-group deck class="mb-3">
      <b-card tag="article"
              style="max-width: 20rem;"
              class="mb-2">
        <h3 class="bronze">Бронзовый</h3>
        <b-button href="#" disabled size="sm" variant="success">Короткий период</b-button>
        <div class="list">
          <ul>
            <li>1 год</li>
          </ul>
        </div>
        <p class="card-text">
          Бронзовый депозит, представляет возможности для накопления средств в кротчайшией период, всего за 1 год, ваши сбережения возрастут на 8%.
          Вам ничего не нужно делать, денги идут к вам сами, просто сделайте пару кликов мыши и дождитесь ваших денег. =)
        </p>
        <h4>Ставка 8% </h4>
        <b-button variant="success" @click="doDeposit(1)" >Выбрать</b-button>
      </b-card>
      <b-card tag="article"
              style="max-width: 20rem;"
              class="mb-2">
        <h3 class="silver">Серебряный</h3>
        <b-button href="#" disabled size="sm" variant="success">Средний период</b-button>
        <div class="list">
          <ul>
            <li>3 года</li>
          </ul>
        </div>
        <p class="card-text">
          Когда есть время и деньги, то лучше всего оформить серебряный депозит. Самая выгодная ставка в 10% годовых, надежность и гарантия накоплений.
          Если вы на плаву и хотите приумножить ваш капитал, то не думайте и оформляйте серебряный депозит.
        </p>
        <h4>Ставка 10% </h4>
        <b-button variant="success" @click="doDeposit(2)">Выбрать</b-button>
      </b-card>
      <b-card tag="article"
              style="max-width: 20rem;"
              class="mb-2">
        <h3 class="gold">Золотой</h3>
        <b-button href="#" disabled size="sm" variant="success">Долгий период</b-button>
        <div class="list">
          <ul>
            <li>5 лет</li>
          </ul>
        </div>
        <p class="card-text">
          Что может быть лучше бронзы и серебра ? Ответ очевиден - золото. Золотой депозит для тех, кто любит деньги и с умом распоряжается своим временем.
          Ведь такое выражение как: 'время - деньги', как раз про вас. Хотите приумножать свои средства с большим каэфициентом чем остальные ? Тогда выбор
          очевиден, оформляйте золотой депозит.
        </p>
        <h4>Ставка 12% </h4>
        <b-button variant="success" @click="doDeposit(3)">Выбрать</b-button>
      </b-card>
    </b-card-group>
   </div>
   </b-container>
  </div>
  <executeDeposit @alr2='showAlert' v-if="this.show===true" :depNumb = "this.numbDep" ></executeDeposit>
</div>
</template>

<script>
import executeDeposit from "./ExecuteDeposit"

export default {
  data() {
    return {
      show: false,
      numbDep: 0,
      completeDepositeCutDown: 0,
      failedDepositeCutDown: 0,
    };
  },
  methods: {
    doDeposit(val) {
      this.show = true
      this.numbDep = val
    },
    back() {
      this.show = false
    },
    showAlert(value){
      console.log(value);
      if (value === 'success'){
        console.log('suc')
        this.completeDepositeCutDown = 3;
        console.log('suc ' + this.completeDepositeCutDown)
      } else if (value === 'failure'){
        this.failedDepositeCutDown = 3;
      }
    }
  },
  components: {
    executeDeposit
  }
}
</script>

<style>
.card_roup {
 margin-left: 15%;
 margin-right: 15%;
}
.bronze {
  color: #cc6633;
}
.silver {
  color: #C0C0C0;
}
.gold {
  color: #FFD700;
}
.card-text {
  margin-top: 5%;
}
.list {
    margin-top: 5%;
}
.mainPlace {
  margin-bottom: 10%;
}
.previous {
  background-color: #f1f1f1;
  color: black;
  text-decoration: none;
  display: inline-block;
  padding: 8px 16px;
}
.previous:hover {
  background-color: #ddd;
  color: black;
  cursor: pointer;
}
.alrt{
  margin-top: 5px;
}
</style>
