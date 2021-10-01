const { createApp } = require("@vue/runtime-dom")

app.component('product-display', {
    props: {
        premium: {
            type: Boolean,
            required: true,
        }
    },
    template:
    /* html */
        `<div class="product-display">
            <div class="product-container">
                <div class="product-image">
                    <img :src="image_C" :alt="imageAlt_C" />
                </div>
                <div class="product-info">
                    <p>{{product}}</p>
                    <p v-if="inStock_C">In Stock</p>
                    <p v-else>Out of Stock</p>
                    <p> Shipping: {{shipping_C}}</p>
                    <div class="color-circle" v-for="(variant, index) in variants" :style="{backgroundColor: variant.color}" @mouseover="updateVariant(index)"></div>
                    <button class="button" @click="addToCart" :disabled="!inStock_C" :class="{disabledButton: !inStock_C}">Add to Cart</button>
                </div>
            </div>
        </div>`,
    data(){
        return{
            brand: 'Vue Mastery',
            product: 'Socks',
            variants: [
                {
                    id: 123,
                    image: '../assets/images/vmSocks-green.jpg',
                    color: 'green',
                    quantity: 10
                },
                {
                    id: 124,
                    image: '../assets/images/vmSocks-blue.jpg',
                    color: 'blue',
                    quantity: 0
                }
            ],
            selectedVariant: 0,
        }
    },
    methods:{
        updateVariant(index){
            this.selectedVariant = index
            console.log(index)
        },
        addToCart(){
            this.$emit('add-to-cart')
        }
    },
    computed: {
        imageAlt_C(){
            return this.brand+ ' ' +this.product
        },
        image_C(){
            return this.variants[this.selectedVariant].image
        },
        inStock_C(){
            return this.variants[this.selectedVariant].quantity
        },
        shipping_C(){
            if(this.premium){
                return 'Free'
            }else{
                return 2.99
            }
        }

    }
})