let vm = Vue.createApp({
    data(){
        return {
            flowers: ['Lily', 'Daisy', 'Rose', 'Sunflower'],
            people: [
                { name: 'Olivia', age: 20 },
                { name: 'Mark', age: 31 },
                { name: 'Amy', age: 18 }
            ]
        }
    }
}).mount('#app');
