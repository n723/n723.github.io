var vuemirror = new Vue({
  el: '#vuemirror',
  data: {
    message: 'I F****** Love you Lr'
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('')
    }
  }
})
