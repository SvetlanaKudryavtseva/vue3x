app.component('product-display',{
    template:
    /* html */
    `
    <div className="product-display">
        <div className="product-container">
            <div className="product-info">
                <p>{{title}}</p>
                <button className="button" @click="addToCart">Add to Cart</button>
            </div>
        </div>
    </div>
    `,
    data(){
        return{
            brand: 'Vue',
            product: 'Socks',
        }
    },
    methods: {
        addToCart(){
            this.$emit('add-to-cart')
        }
    },
    computed: {
        title(){
            return this.brand+ ' ' +this.product
        }
    }
})