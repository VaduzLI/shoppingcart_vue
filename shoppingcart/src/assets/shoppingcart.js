/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
// Classes in js are more for instances, its either a js function or a typescript port.
// https://codepen.io/Dimasion/pen/oBoqBM

let shoppingCart = (function () {
    /* 
    Here starts some cart function for session
    */

    let cart = [];

    function Item(product, count) {
        this.product = product;
        this.count = count;
    };

    function saveCart() {
        sessionStorage.setItem('shoppingCart', JSON.stringify(cart))
    }

    function loadCart() {
        cart = JSON.parse(sessionStorage.getItem('shoppingCart'));
    }

    if (sessionStorage.getItem("shoppingCart") != null) {
        loadCart();
    }

    /* 
    The interactible functions
    */

    let obj = {}

    obj.addItemToCart = function (product) {
        console.log(product)
        for (let item in cart) {
            console.log(cart[item])
            if (cart[item].product.name === product.name) {
                cart[item].count++;
                saveCart()
                return;
            }
        };
        let newItem = new Item(product, 1);
        cart.push(newItem);
        saveCart();
    }

    obj.setCountForItem = function (name, count) {
        for (let item in cart) {
            if (cart[item].product.name === name) {
                cart[item].count = count;
                break;
            }
        }
    }

    obj.removeItemFromCart = function (name) {
        for (let item in cart) {
            if (cart[item].product.name === name) {
                cart[item].count--;
                if (cart[item].count === 0) {
                    cart.splice(item, 1);
                }
                break;
            }
        }
        saveCart();
    }

    obj.removeItemFromCartAll = function (name) {
        for (var item in cart) {
            if (cart[item].product.name === name) {
                cart.splice(item, 1);
                break;
            }
        }
        saveCart();
    }

    obj.clearCart = function () {
        cart = [];
        saveCart();
    }

    obj.totalCount = function () {
        var totalCount = 0;
        for (var item in cart) {
            totalCount += cart[item].count;
        }
        return totalCount;
    }

    obj.totalCart = function () {
        var totalCart = 0;
        for (var item in cart) {
            totalCart += cart[item].price * cart[item].count;
        }
        return Number(totalCart.toFixed(2));
    }

    obj.listCart = function () {
        var cartCopy = [];
        for (let i in cart) {
            let item = cart[i];
            let itemCopy = {};
            for (let p in item) {
                itemCopy[p] = item[p];
            }
            itemCopy.total = Number(item.price * item.count).toFixed(2);
            cartCopy.push(itemCopy)
        }
        return cartCopy;
    }

    return obj;
})();

module.exports = shoppingCart