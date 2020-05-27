/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
// Classes in js are more for instances, its either a js function or a typescript port.
// https://codepen.io/Dimasion/pen/oBoqBM

let shoppingCart = (function() { 
    /* 
    Here starts some cart function for session
    */

    let cart = [];

    function Item (product, count) {
        this.product = product;
        this.count = count;
    };

    function saveCart () {
        sessionStorage.setItem('shoppingCart', JSON.stringify(cart))
    }

    function loadCart () {
        cart = JSON.parse(sessionStorage.getItem('shoppingCart'));
    }

    if(sessionStorage.getItem("shoppingCart") != null) {
        loadCart();
    }

    /* 
    The interactible functions
    */

    let obj = {}

    obj.addItemToCart = function(product) {
        console.log(product)
        for(let item in cart) {
            console.log(cart[item])
            if(cart[item].product.name === product.name) {
                cart[item].count ++;
                saveCart()
                return;
            }
        };
        let newItem = new Item(product, 1);
        cart.push(newItem);
        saveCart();
    }

    return obj;
})();

module.exports = shoppingCart