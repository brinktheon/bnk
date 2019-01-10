<template>
  <div>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <!-- Other Acc number -->
      <b-form-group id="OtherAccNumber"
                    label="Номер счета для перевода, в формате (ххх-ххх-ххх): "
                    >
        <b-form-input id="OtherAccInputNumber"
                      type="text"
                      v-model="form.otherNumber"
                      required
                      placeholder="Номер счета">
        </b-form-input>
      </b-form-group>

      <!-- Amount -->
      <b-form-group id="Amount"
                    label="Сумма:">
        <b-form-input id="AmountInput"
                      type="number"
                      v-model="form.amount"
                      required
                      placeholder="Введите сумму для перевода">
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
          otherNumber: '',
          amount: '',
          password: ''
        },
        show: true
      }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault()
      this.$http.post("http://localhost:9090/bank/payment?" + 'otherNumber='+ this.form.otherNumber + '&' + 'amount=' + this.form.amount + '&' + 'password=' + this.form.password).then(result => {
        if (result.ok) {
            this.$emit('alr', "success")
        }
       }, result => {
         console.log('Result ->' + result.status);
         this.$emit('alr', "failure")
       })
      this.form.otherNumber = ''
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
