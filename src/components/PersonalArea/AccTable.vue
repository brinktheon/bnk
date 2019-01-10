<template>
  <div class="mn">
  <b-container fluid>
    <div class="card_roup">
    <b-card-group deck
                  class="mb-3">
    <b-card title="Имя пользователя:">{{this.name}}</b-card>
    <b-card title="Баланс">{{this.balance}}</b-card>
    <b-card title="№ счета">{{this.accNumber}}</b-card>
    </b-card-group>
   </div>
   <hr class="my-4">
    <b-table class="myTable" striped hover :items="items" :border="true" :per-page="perPage" :current-page="currentPage" :fields="fields">
      <b-row>
        <b-col md="6" class="my-1">
          <b-pagination :total-rows="totalRows" :per-page="perPage" v-model="currentPage" class="my-0" />
        </b-col>
      </b-row>
    </b-table>
    <b-row>
     <b-col md="6" class="my-1">
       <b-pagination :total-rows="totalRows" :per-page="perPage" v-model="currentPage" class="my-0" />
     </b-col>
    </b-row>
   </b-container>
 </div>
</template>

<script>
const head = [
  { ab: 'bv' }
]
const items = [
  // { date: '12/10/2018', code: 123532111, title: 'Hello its me', debit: '', credit: '+20', _cellVariants: { credit: 'success' } },
  // { date: '12/10/2018', code: 123532111, title: 'Go hard man', debit: '-200', credit: '', _cellVariants: { debit: 'danger' } },
  // { date: '12/10/2018', code: 123532111, title: 'Some title here', debit: '-12', credit: '', _cellVariants: { debit: 'danger' } },
  // { date: '12/10/2018', code: 123532111, title: 'Are u sure about this ?', debit: '', credit: '+200', _cellVariants: { credit: 'success' } },
  // { date: '12/10/2018', code: 123532111, title: 'Hello its me', debit: '', credit: '+20', _cellVariants: { credit: 'success' } },
  // { date: '12/10/2018', code: 123532111, title: 'Go hard man', debit: '-200', credit: '', _cellVariants: { debit: 'danger' } },
  // { date: '12/10/2018', code: 123532111, title: 'Some title here', debit: '-12', credit: '', _cellVariants: { debit: 'danger' } },
  // { date: '12/10/2018', code: 123532111, title: 'Are u sure about this ?', debit: '', credit: '+200', _cellVariants: { credit: 'success' } },
  // { date: '12/10/2018', code: 123532111, title: 'Hello its me', debit: '', credit: '+20', _cellVariants: { credit: 'success' } },
  // { date: '12/10/2018', code: 123532111, title: 'Go hard man', debit: '-200', credit: '', _cellVariants: { debit: 'danger' } },
  // { date: '12/10/2018', code: 123532111, title: 'Some title here', debit: '-12', credit: '', _cellVariants: { debit: 'danger' } },
  // { date: '12/10/2018', code: 123532111, title: 'Are u sure about this ?', debit: '', credit: '+200', _cellVariants: { credit: 'success' } },
  // { date: '12/10/2018', code: 123532111, title: 'Hello its me', debit: '', credit: '+20', _cellVariants: { credit: 'success' } },
  // { date: '12/10/2018', code: 123532111, title: 'Go hard man', debit: '-200', credit: '', _cellVariants: { debit: 'danger' } },
  // { date: '12/10/2018', code: 123532111, title: 'Some title here', debit: '-12', credit: '', _cellVariants: { debit: 'danger' } },
  // { date: '12/10/2018', code: 123532111, title: 'Are u sure about this ?', debit: '', credit: '+200', _cellVariants: { credit: 'success' } }
]

export default {
  data () {
    return {
      items: items,
      totalRows: items.length,
      currentPage: 1,
      perPage: 6,
      head: head,
      fields: {
        date: {
          label: 'Дата',
          sortable: true
        },
        code: {
          label: 'Код',
          sortable: true
        },
        title: {
          label: 'Описание',
          sortable: true
        },
        debit: {
          label: 'Расход',
          sortable: true
        },
        credit: {
          label: 'Доход',
          sortable: true
        }
      },
      name: "test",
      balance: "200$",
      accNumber: "1232454"
    }
  },
  mounted(){
    this.$http.get("http://localhost:9090/bank/baseInfo").then(result => {
      if (result.ok) {
          console.log("HELLO = " + result);
          this.name = result.body[0]
          this.balance = result.body[1] + '$'
          this.accNumber = result.body[2]
      }
      }, result => {
         console.log('Result ->' + result.status);
      })
      this.$http.get("http://localhost:9090/bank/tableInfo").then(result => {
        if (result.ok) {
            items.length = 0;
            console.log(result);
            result.body.forEach(function(el){
              if (el[5] === 'success'){
                items.push({date: el[0], code: el[1], title: el[2], debit: el[3], credit: el[4], _cellVariants: { credit: el[5] }})
              } else if (el[5] === 'danger'){
                items.push({date: el[0], code: el[1], title: el[2], debit: el[3], credit: el[4], _cellVariants: { debit: el[5] }})
              }
            })
        }
        }, result => {
           console.log('Result ->' + result.status);
        })
  }
}
</script>

<style>
.myTable th {
  background-color:#7A90C4;
  color: white;
}
.myTable {
  border-collapse: collapse;
  border-radius: 1.5em;
  overflow: hidden;
  max-width: 90%;
  margin: 0px auto;
}
.pagination {
  margin: 0px 0px 0px 10%;
}
.card {
  max-width: 45%;
}
.card_roup {
 margin-left: 0%;
}
.mn {
  margin-top: 3%;
  background: white;
}
</style>
