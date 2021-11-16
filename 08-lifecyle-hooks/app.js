let vm = Vue.createApp({
  data() {
    return {
      message: "Hello world!"
    }
  },
  beforeCreate() {
    console.log('Before Create', this.message)
  },
  created() {
    console.log('Created', this.message)
  },
  beforeMount() {
    // Value is the element vue is mounted to
    console.log('Before Mount', this.$el)
  },
  mounted() {
    console.log('Mounted', this.$el)
  },
  beforeUpdate() {
    console.log('Before Update')
  },
  updated() {
    console.log('Updated')
  },
  beforeUnmount(){
    console.log('Before Unmount')
  },
  unmounted(){
    console.log('Unmounted')
  }
})

vm.mount('#app')