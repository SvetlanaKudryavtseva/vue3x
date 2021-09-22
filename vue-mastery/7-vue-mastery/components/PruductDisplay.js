app.component('product-display', {
    template:
    /*html*/
    `
    <div className="product-display">
        <div className="product-container">
            <div className="product-image">
                <img :src="imageC" :alt="imageAltC" />
            </div>
        </div>
    </div>`,
    data(){
        return{
            selectedVariant: 0,
            brand: 'Vue Mastery',
            product: 'Socks',
        }
    },
    methods: {

    },
    computed: {
        imageC(){

        }
        imageAltC(){
            return 'product'
        }
    }
})