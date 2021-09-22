const vm = Vue.createApp({
    data() {
        return {
            firstName: 'John',
            lastName: 'Smith',
            url: "http://google.com",
            age: 20,
        }
    },
    methods: {
        increment() {
            this.age+=1
        },
        decrement() {
            this.age-=1
        },
        updateLastName(event) {
            this.lastName = event.target.value
        }

    }
}).mount("#app");

Vue.createApp({
    data() {
        return {
            firstName: 'Jane',
            lastName: 'Smith',
        }
    }
}).mount("#app2");