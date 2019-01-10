<template>
  <div class="ServicePageView">
    <div class="servTitle">
      <div class="sTitle">
        <p id="textSerivce">Услуги банка</p>
      </div>
    </div>
    <hr>
    <div class="ServiceContent">
      <div class="row">
        <div class="col-sm">
          <!-- Personal Info -->
          <b-card title="Учет персональных данных"
              :img-src="require('./../uchet.jpeg')"
              img-alt="Image"
              img-top
              tag="article"
              style="max-width: 20rem;"
              class="mb2">
              <hr>
              <p class="card-text">
                Наш представляет услугу по учету персональных данныех. Расходов, доходов, даты и наименование транзакций.
                Благодаря удобному и современному интерфейсу, оставлены только максимально важные детали, что делает работу
                с нашим онлайн банком быстрой и прозрачной.
              </p>
          </b-card>
        </div>
        <div class="col-sm">
          <!-- Personal Info -->
          <b-card title="Переводы"
              :img-src="require('./../perevodi.jpeg')"
              img-alt="Image"
              img-top
              tag="article"
              style="max-width: 20rem;"
              class="mb2">
              <hr>
              <p class="card-text">
                Банковская система позволяет совершать переводы средств со счета на счет.
                Транзация производится максимально быстро и безопасно. Главым преимуществом является то,
                что благодаря современным технологиям все переводы фиксируются и отображаются в вашем личном кабинете.
              </p>
          </b-card>
        </div>
        <div class="col-sm">
          <!-- Personal Info -->
          <b-card title="Пополнение/Снятие средств"
              :img-src="require('./../popoln.jpeg')"
              img-alt="Image"
              img-top
              tag="article"
              style="max-width: 20rem;"
              class="mb2">
              <hr>
              <p class="card-text">
                Пополнение и снятие средств производится также быстро как и переводы между счетами. Безопасность и высокая
                скорость обработки выших запросов гарантируют современные технологии. Вы можете пополнить баланс и
                снять деньги в вашем личном кабинете.
              </p>
          </b-card>
        </div>
          <div class="col-sm">
            <!-- Personal Info -->
            <b-card title="Депозиты"
                :img-src="require('./../depozit.jpeg')"
                img-alt="Image"
                img-top
                tag="article"
                style="max-width: 20rem;"
                class="mb2">
                <hr>
                <p class="card-text">
                  Наш банк предоставляет самые выгодные условия для депозитных схем, 8, 10, 12% годовых. В вашем личном кабинете,
                  можно просмотреть доступные депозитные планы, выбрать интересующий и выполнить операцию.
                  Все данные обрабатываются в кротчайшие сроки, а операции видны в вашем личном кабинете.
                </p>
            </b-card>
          </div>
      </div>
  </div>
  </div>
</template>

<script>
export default {

}
</script>
<style>
.ServicePageView{
  background: #F1F1F1;
  padding: 10px;
  width: 99.7%;
  height: 820px;
  margin-top: 4%;
}
.servTitle{
  background-color: #F1F1F1;
  width: 100%;
  height: 60px;
  text-align: center;
  margin-top: 1%;
}
.sTitle{
  float: left;
  margin-left: 2%;
}
#textSerivce{
  font-size: 24px;
}
.mb2{
  float: left;
  margin-top: 2%;
  margin-left: 5.5%;
}
</style>
