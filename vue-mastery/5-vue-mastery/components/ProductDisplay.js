app.component('product-display', {
    template:
    /*html*/
    `<div class="product-display">
    <div class="product-container">
        <div class="product-image">
            <img :src="image" :alt="imageAlt">
        </div>
        <div class="product-info">
            <p>{{ title }}</p>
            <p v-if="inStock">In Stock</p>
            <p v-else>Out of Stock</p>
            <ul v-for="detail in details">
                <li>{{ detail }}</li>
            </ul>
            <div class="color-circle" v-for="(variant, index) in variants" :style="{backgroundColor: variant.color}" @mouseover="updateVariant(index)"></div>
        </div>
    </div>
    <button class="button" :class="{disabledButton: !inStock}" :disabled="!inStock" @click="addToCart">Add to Cart</button>
    <div>
        <p>Cart ({{cart}})</p>
    </div>
</div>`,
data(){
    return{
        selectedVariant: 0,
        brand: 'Vue Mastery',
        product: 'Socks',
        details: ["80% cotton","20% polyester"],
        variants: [
            {
                id: 1111,
                color: 'green',
                image: '../assets/images/vmSocks-green.jpg',
                quantity: 3,
            },
            {
                id: 1111,
                color: 'blue',
                image: '../assets/images/vmSocks-blue.jpg',
                quantity: 0
            }
        ],

    }
},
methods: {
    updateVariant(index){
        this.selectedVariant = index
    },
    addToCart(){
        this.cart +=1
    }
},
computed: {
    imageAlt(){
    return this.brand+ ' ' +this.product
    },
    title() {
        return this.brand+ ' '  +this.product
    },
    image(){
        return this.variants[this.selectedVariant].image
    },
    inStock(){
        return this.variants[this.selectedVariant].quantity
    },

}

})