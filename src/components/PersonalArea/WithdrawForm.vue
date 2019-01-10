<template>
  <div>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">

      <!-- Amount -->
      <b-form-group id="Amount"
                    label="Сумма для снятия:">
        <b-form-input id="AmountInput"
                      type="number"
                      v-model="form.amount"
                      required
                      placeholder="Введите сумму">
        </b-form-input>
      </b-form-group>

      <!--Password -->
      <b-form-group id="Password"
                    label="Пароль:">
        <b-form-input id="PasswordInput"
                      type="password"
                      v-model="form.password"
                      required
                      placeholder="Введите ваш пароль для подтверждения">
        </b-form-input>
      </b-form-group>

      <!-- Buttons -->
      <b-button type="submit" variant="success">Выполнить</b-button>
      <b-button type="reset" variant="danger">Отмена</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  data () {
      return {
        form: {
          amount: '',
          password: '',
        },
        show: true
      }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault();
      this.$http.post("http://localhost:9090/bank/withdraw?" + 'amount=' + this.form.amount + '&' + 'password=' + this.form.password).then(result => {
        if (result.ok) {
            this.$emit('alr', "success")
        }
       }, result => {
         console.log('Result ->' + result.status);
         this.$emit('alr', "failure")
       })
      this.form.amount = ''
      this.form.password = ''
    },
    onReset (evt) {
      evt.preventDefault();
      this.form.otherNumber = ''
      this.form.amount = ''
      this.form.password = ''
      this.show = false
      this.$nextTick(() => { this.show = true })
    }
  }
}
</script>
