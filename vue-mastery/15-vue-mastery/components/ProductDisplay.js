app.component('product-display',{
    template:
    /* html*/
    `
    <div className="product-display">
        <div className="product-container">
            <button className="button" @click="addToCart">Add to Cart</button>
        </div>
    </div>
    `
    ,
    methods: {
        addToCart(){
            this.$emit('add-to-cart')
        }
    }
})