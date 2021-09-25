app.component('product-display', {
    template:
    /*html*/
    `<div class="product-display">
        <div class="product-container">
            <div class="product-info">
                <img :src="image_C" alt="">
                <p>{{title_C}}</p>
                <div class="color-circle" v-for="(variant, index) in variants" :style="{backgroundColor: variant.color}" @mouseover="logVariantIndex(index)"></div>
                <p>Shipping: {{shipping_C}}</p>
                <p v-if="quantityInStock_C">In Stock: {{quantityInStock_C}}</p>
                <p v-else>Out of Stock</p>
                <button class="button" @click="addToCart" :disable="!quantityInStock_C" :class="{disabledButton: !quantityInStock_C}">Add to Cart</button>
            </div>
        </div>
    </div>`,
    props: {
        premium: {
            type:  Boolean,
            required: true
        }
    },
    data(){
        return{
            brand: 'Vue',
            product: 'Socks',
            //image: './../assets/images/vmSocks-green.jpg',
            variants: [
                {
                    color: 'green',
                    image: './../assets/images/vmSocks-green.jpg',
                    quantity: 10
                },
                {
                    color: 'blue',
                    image: './../assets/images/vmSocks-blue.jpg',
                    quantity: 0
                }
            ],
            selectedVariant: 0,
            inStock: true
        }
    },
    methods: {
        addToCart(){
            return this.cart +=1
        },
        // changeImage(variantImage){
        //     return this.image = variantImage
        // },
        logVariantIndex(index){
            this.selectedVariant = index
            console.log(index)
        }
    },
    computed: {
        title_C(){
            return this.brand+ ' ' +this.product
        },
        image_C(){
            return this.variants[this.selectedVariant].image
        },
        quantityInStock_C(){
            return this.variants[this.selectedVariant].quantity
        },
        shipping_C(){
            if(this.premium){
                return 'Free'
            }
                return 2.99
        }
    }
})