app.component('product-display', {
    template:
     /* html */
    `
    <div className="product-display">
        <div className="product-container">
            <div className="product-info">
                <p>Shipping {{shipping_C}}</p>
            </div>
        </div>
    </div>

    `,
    props: {
        premium: {
            type: Boolean,
            required: true
        }
    },
    computed: {
        shipping_C(){
            if(this.premium){
                return 'Free'
            }   return 2.99
        }
    }
})