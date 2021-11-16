const vm = Vue.createApp({
    data() {
        return {
            firstname: 'Daisy',
            lastname: 'Meadows'
        }
    },
    methods: {
        fullName() {
            // return `${this.firstname} ${this.lastname.toUpperCase()}`;
            return this.firstname + " " + this.lastname;
        }
    }
}).mount('#app');