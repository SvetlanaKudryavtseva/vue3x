const app = Vue.createApp({
    data(){
        return {
            brand: 'Vue Mastery',
            product: 'Socks',
            imageUrl: '../assets/images/vmSocks-green.jpg',
            imageAlt: 'Vue green socks',
            inStock: true,
            inventory: 11,
            onSale: true,
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
            selectedVariant: 0,
            sizes: ["xs ", "s ", "m ", "l "],
            cart:0,
        }
    },
    methods: {
        addToCart(){
            this.cart+=1
        },
        updateImage(image){
            this.image = variantimage
        }
    },
    computed: {
        title(){
            return this.brand + ' ' + this.product
    }}
})