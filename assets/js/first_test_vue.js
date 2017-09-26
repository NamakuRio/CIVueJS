var vm = new Vue({
  el: '#main',
  data: {
    message: 'Olá Vue!',
    rawHtml: '<h3>Teste com html</h3>'
  },
  computed : {
    // uma função "getter" computada (computed getter)
    reversedMessage: function() {
      // `this` aponta para a instância Vue da variável `vm`
      return this.message.split('').reverse().join('')
    },
    now: function() {
      return Date.now()
    }
  },
  methods : {
    mReversedMessage: function() {
      return this.message.split('').reverse().join('')
    },
    mNow: function() {
      return Date.now()
    }
  }
})