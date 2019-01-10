<template>
  <div class="mn">
    <div class="mainContent">
     <b-container fluid>
       <h3>{{this.title}} деозитная схема</h3>
       <hr>
       <div class = "aboveInfo">
         <p>
          {{this.depText}}
        </p>
       </div>
       <div class = "belowInfo">
         <h3>Условия</h3>
         <ul>
           <li>{{this.year}}</li>
           <li>Ставка: {{this.interest}}</li>
         </ul>
       </div>
       <depositForm @alr='upAlert' :depVar = "this.depNumb"></depositForm>
     </b-container>
    </div>
  </div>
</template>

<script>
import depositForm from "./DepositeForm"
export default {
  data(){
    return {
      title: "",
      year: "",
      interest: "",
      depText: '',
    };
  },
  props: ['depNumb'],
  components:{
    depositForm
  },
  created(){
    switch (this.depNumb) {
      case 1:
        this.title = "Бронзовая";
        this.year = "1 год";
        this.interest = "8%";
        this.depText = " Представляем новую схему бронзовых депозитов. Процентная ставка для вас будет рассчитываться на основе внесенной суммы и фиксированной маржи.";
       break;
      case 2:
        this.title = "Серебряная";
        this.year = "3 года";
        this.interest = "10%";
        this.depText = " Представляем новую схему серебряных депозитов. Процентная ставка для вас будет рассчитываться на основе внесенной суммы и фиксированной маржи.";
       break;
      case 3:
        this.title = "Золотоая";
        this.year = "5 лет";
        this.interest = "12%";
        this.depText = " Представляем новую схему золотых депозитов. Процентная ставка для вас будет рассчитываться на основе внесенной суммы и фиксированной маржи.";
       break;
      default:
    }
  },
  methods:{
    upAlert(value){
      if (value === 'success'){
        this.$emit('alr2', "success")
      } else if (value === 'failure'){
        this.$emit('alr2', "success")
      }
    }
  }
}
</script>

<style>

</style>
