Vue.component('cart', {
    data(){
      return {
          imgCart: 'https://placehold.it/50x100',
          cartUrl: 'carts/2',
          cartItems: [],
          showCart: false,
      }
    },
    methods: {
        addProduct(product){
            let find = this.cartItems.find(el => el.id === product.id);
            if(find){
                find.quantity++;
            } else {
                let prod = Object.assign({quantity: 1}, product);
                this.cartItems.push(prod)
            }                    
        },
        remove(item) {
            if(item.quantity>1){
                item.quantity--;
            } else {
                this.cartItems.splice(this.cartItems.indexOf(item), 1)
            }                   
        },
    },
    mounted(){
       /*  this.$parent.getJson(`${API + this.cartUrl}`)
            .then(data => {
                this.$parent.getJson(`${API + 'products'}`)
                    .then(prods

                    )
                for(let el of data.products){
                    
                    this.cartItems.push(el);
                }
            }); */
    },
    template: `
        <div>
            <button class="btn-cart" type="button" @click="showCart = !showCart">Корзина</button>
            <div class="cart-block" v-show="showCart">
                <p v-if="!cartItems.length">Cart is empty</p>
                <cart-item class="cart-item" 
                v-for="item of cartItems" 
                :key="item.id"
                :cart-item="item" 
                :img="imgCart"
                @remove="remove">
                </cart-item>
            </div>
        </div>`
});

Vue.component('cart-item', {
    props: ['cartItem', 'img'],
    template: `
                <div class="cart-item">
                    <div class="product-bio">
                        <img :src="img" alt="Some image">
                        <div class="product-desc">
                            <p class="product-title">{{cartItem.title}}</p>
                            <p class="product-quantity">Quantity: {{cartItem.quantity}}</p>
                            <p class="product-single-price">$ {{cartItem.price}} each</p>
                        </div>
                    </div>
                    <div class="right-block">
                        <p class="product-price">{{cartItem.quantity*cartItem.price}}</p>
                        <button class="del-btn" @click="$emit('remove', cartItem)">&times;</button>
                    </div>
                </div>
    `
});
