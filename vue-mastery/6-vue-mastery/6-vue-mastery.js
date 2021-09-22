const app = Vue.createApp({
    data(){
        return{
            cart: 0,
            image: '../assets/images/vmSocks-green.jpg',
            brand: 'Vue Mastery',
            product: 'Socks',
            inStock: true,
            variants: [
                {
                    id: 1111,
                    color: "green",
                    image: '../assets/images/vmSocks-green.jpg',
                    quantity: 10,
                },
                {
                    id: 1112,
                    color: "blue",
                    image: '../assets/images/vmSocks-blue.jpg',
                    quantity: 0,
                }
            ],
        }
    },
    methods: {
        addToCart(){
            this.cart+=1
        },
        updateProduct(variantImage){
            this.image = variantImage
        }
    },
    computed: {
        imageAlt(){
            return this.brand+ ' ' +this.product
        }
    }
})