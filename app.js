const vm = Vue.createApp({
    data() {
        return {
            firstName: 'John',
            lastName: 'Smith',
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