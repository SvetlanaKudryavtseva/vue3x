const app = Vue.createApp ({
    data(){
        return{
            cart: 0,
        }
    },
    methods: {
        addToCart(){
            this.cart+=1
        }
    }
})