const app = Vue.createApp ({
    data(){
        return{
            cart: 0,
            brand: 'Vue',
            product: 'Socks'
        }
    },
    methods: {
        addToCart(){
            this.cart+=1
        }
    },
    computed: {
        title(){
            return this.brand+ ' ' +this.product
        }
    }
})