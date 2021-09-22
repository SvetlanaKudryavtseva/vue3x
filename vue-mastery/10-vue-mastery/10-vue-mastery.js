const app = Vue.createApp({
    data(){
        return{
            cart: 0,
            inStock: true,
            brand: 'Vue Mastery',
            product: 'Socks',
            //image: '../assets/images/vmSocks-green.jpg',
            details: ['80% cotton', '20% polyester'],
            variants: [
                {
                    id: 123,
                    color: 'green',
                    image: '../assets/images/vmSocks-green.jpg',
                    quantity: 10
                },
                {
                    id: 124,
                    color: 'blue',
                    image: '../assets/images/vmSocks-blue.jpg',
                    quantity: 0
                }
            ],
            selectedVariant: 0,
        }
    },
    methods: {
        updateVariant(index){
            this.selectedVariant = index
        },
        addToCart(){
            this.cart+=1
        }

    },
    computed: {
        imageAlt(){
            return this.brand+ ' ' +this.product
        },
        title(){
            return this.brand+ ' ' +this.product
        },
        image(index){
            return this.variants[this.variant.selectedVariant].quantity
        }


    }
})