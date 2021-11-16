const vm = Vue.createApp({
    data() {
        return {
            firstName: 'Daisy',
            middleName: 'Lily',
            lastName: 'Meadows',
            age: 22,
            url: 'https://www.google.com'
        }
    },
    methods: {
        fullName() {
            return `${this.firstName} ${this.middleName} ${this.lastName}`
        },
        addToAge() {
            this.age++
        },
        // This works the same as just having v-model on a element
        updateLastName(msg, evt) {
            this.lastName = evt.target.value
            console.log(msg)
        },
        // Change if the return key is pressed
        updateMiddleName(evt){
            this.middleName = evt.target.value
        }
    }
}).mount('#app');