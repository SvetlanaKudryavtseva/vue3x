const app = Vue.createApp ({
    data(){
        return{
            cart: 0,
            brand: 'Vue',
            product: 'Socks',
            // image: '../assets/images/vmSocks-green.jpg',
            variants: [
                {
                    color: 'green',
                    image: '../assets/images/vmSocks-green.jpg',
                    quantity:10

                },
                {
                    color: 'blue',
                    image: '../assets/images/vmSocks-blue.jpg',
                    quantity:15
                }
            ],
            selectedVariant: 0,
        }
    },
    methods: {
        variantIndex(index){
            this.selectedVariant = index
            console.log(index)
        },
        // chooseThisVariantImage(paramFromHtml){
        //     this.image = paramFromHtml
        // }
    },
    computed: {
        title(){
            return this.brand+ ' ' +this.product
        },
        image_CBO_variantIndex(index){
            return this.variants[this.selectedVariant].image
        }
    }
})