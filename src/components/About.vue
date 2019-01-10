<template>
  <div class="AboutPageView">
    <div class="topTitle">
      <div class="tTitle">
        <p id="textAbout">О нашем банке</p>
      </div>
    </div>
    <hr>
    <div class="Abcontent">
    <div class="aboutPic">
      <p>
        <img src="./../banknow.jpg" class="aboutImg">
        <span class ="backSp">Gachimuchi-Банк,</span> основанный в 2018 году, является универсальным банком,
        осуществляющим все основные виды банковских операций,
        представленных на рынке финансовых услуг, включая обслуживание частных клиентов, банковский бизнес, торговое финансирование и т.д.
        <br/><br/>
        <span class ="backSp">Головной</span> офис Gachimuchi-Банка располагается во Владимире.
        В Gachimuchi-Банке работает более 2х сотрудников, включая собаку по кличке Mason.
        <br/><br/>
        <span class ="backSp">Банковская</span> группа «Gachimuchi-Банк» сохраняет позицию крупнейшего российского
        частного банка по размеру совокупного капитала,
        кредитному портфелю и средствам клиентов. Кроме этого, Gachimuchi-Банк входит в список топ-10 системно значимых кредитных организаций,
        который был опубликован Центральным Банком РФ в конце 2018 года.
        <br/><br/>
        Банковская Группа «Gachimuchi-Банк» является социально-ориентированной организацией. Важным направлением ее
        благотворительной деятельности является помощь социально незащищенным слоям населения: воспитанникам детских
        домов и интернатов, тяжелобольным детям, ветеранам Великой Отечественной войны.
      </p>

    </div>
    <div class="textCont">

    </div>
  </div>
  </div>
</template>

<script>
export default {

}
</script>
<style>
  .AboutPageView{
    background: #F1F1F1;
    padding: 10px;
    height: 820px;
    margin-top: 4%;
  }
  .topTitle{
    background-color: #F1F1F1;
    width: 100%;
    height: 60px;
    text-align: center;
    margin-top: 1%;
  }
  .tTitle{
    float: left;
    margin-left: 2%;
  }
  #textAbout{
    font-size: 24px;
  }
  .aboutImg{
    width: 50%;
    height: 400px;
    float:left;
    margin-right: 1%;
  }
  .Abcontent{
    margin-top: 4%;
  }
  .backSp{
    margin-left: 30px;
  }
</style>
