const app = Vue.createApp({
    data(){
        return {
            product: 'Socks',
            brand: 'Vue Mastery',
            image: '../assets/images/vmSocks-green.jpg',
            inStock: false,
            inventory: 11,
            cart: 0,
            details: ["80% cotton", "20% polyester"],
            variants: [
                {
                    id: 1111,
                    color: 'green',
                    image: '../assets/images/vmSocks-green.jpg'
                },
                {
                    id: 2222,
                    color: 'blue',
                    image: '../assets/images/vmSocks-blue.jpg'
                }
            ],
            lights: [
                {color: 'red'},
                {color: 'green'}
            ]
        }
    },
    methods: {
        addToCart(){
            this.cart+=1
        },
        updateImage(variantImage){
            this.image = variantImage
        }
    },
    computed: {
        title() {
            return this.product + ' ' + this.brand
        },
        imageAlt(){
            return this.brand+ ' '  + this.product
        }
    }
})