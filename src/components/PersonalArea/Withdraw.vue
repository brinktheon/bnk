<template>
  <div class="mn">
    <div class="mainContent">
     <b-container fluid>
       <transition name='fade'>
       <b-alert class="alrt"
               :show="failedWithdrawCutDown"
               dismissible
               variant="danger"
               @dismissed="failedWithdrawCutDown=0">
        <p>Транзакция прошла с ошибкой</p>
      </b-alert>
    </transition>
      <transition name='fade'>
      <b-alert class="alrt"
              :show="completeWithdrawCutDown"
              dismissible
              variant="success"
              @dismissed="completeWithdrawCutDown=0">
       <p>Ваша транзакция успешно обработана</p>
      </b-alert>
    </transition>
       <h4>Снятие средств</h4>
       <hr>
       <div class = "emailInfo">
        Email: {{this.email}}
       </div>
       <div class = "donateInfo">
         <h4>Информация о трансфере</h4>
       </div>
       <hr>
        <label class="lbl">
          {{this.titleLabel}}
        </label>
        <withdrawForm @alr='showAlert'></withdrawForm>
       <hr>
     </b-container>
    </div>
 </div>
</template>

<script>

import withdrawForm from "./WithdrawForm"

export default {
  data(){
    return {
        email: "null",
        titleLabel: 'Ваш номер счета: null',
        completeWithdrawCutDown: 0,
        failedWithdrawCutDown: 0
    };
  },
  components:{
    withdrawForm
  },
  mounted(){
    this.$http.get("http://localhost:9090/bank/getSomeInfo").then(result => {
      if (result.ok) {
        this.email = result.body[0];
        this.titleLabel = 'Ваш номер счета: ' +  result.body[1]
      }
      }, result => {
         console.log('Result ->' + result.status);
      })
  },
  methods: {
    showAlert(value){
      if (value === 'success'){
        this.completeWithdrawCutDown = 3;
      } else if (value === 'failure'){
        this.failedWithdrawCutDown = 3;
      }
    }
  }
}
</script>
<style>
.donateInfo{
  margin-top: 50px;
}
.mainContent{
  margin-left: 200px;
  margin-right: 200px;
}
</style>
