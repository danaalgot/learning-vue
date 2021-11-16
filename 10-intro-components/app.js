let vm = Vue.createApp({
  data() {
    return {
      message: "Another Message"
    }
  },
})

vm.component('hello', {
  template: `<h1>{{ message }}</h1>`,
  data(){
    return {
      message: 'Hello World!'
    }
  }
})

vm.mount('#app')