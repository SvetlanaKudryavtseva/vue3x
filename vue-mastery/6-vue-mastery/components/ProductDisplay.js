app.component('product-display', {
    template:
    /*html*/
    `<div class="product-display">
        <div class="product-container">
            <div class="product-image">
                <img :src="image" :alt="imageAlt">
            </div>
            <div class="product-info">
                <p v-if="inStock">In Stock</p>
                <p v-else>Out of Stock</p>
                <div v-for="(variant, index) in variants" class="color-circle" :style="{backgroundColor: variant.color}" @mouseover="updateVariant(index)"></div>
                <button class="button" @click="addToCart" :disabled="!inStock" :class="{disabledButton: !inStock}">Add to Cart</button>
            </div>
        </div>
    </div>`,
    data(){
        return{
            // image: '../assets/images/vmSocks-green.jpg',
            brand: 'Vue Mastery',
            product: 'Socks',
            //inStock: true,
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
            selectedVariant: 0,
        }
    },
    methods: {
        addToCart(){
            this.cart+=1
        },
        // updateProduct(variantImage){
        //     this.image = variantImage
        // },
        updateVariant(index){
            this.selectedVariant = index
        }
    },
    computed: {
        imageAlt(){
            return this.brand+ ' ' +this.product
        },
        image(){
            return this.variants[this.selectedVariant].image
        },
        inStock(){
            return this.variants[this.selectedVariant].quantity
        }
    }
})