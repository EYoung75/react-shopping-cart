import React, { Component } from "react";

class CartItems extends Component {

    render() {

        const CartItem = this.props.cartItems.map(item => <CartItem
            name={item.product.name}
            price={((item.product.priceInCents)/100).toFixed(2)}
            quantity={item.quantity}
        />)

        return (
            <div className="container">
                <h1>Cart Items</h1>
                <div className="list-group">
                    <div className="list-group-item">
                        <div className="row">
                            <div className="col-md-8">Product</div>
                            <div className="col-md-2">Price</div>
                            <div className="col-md-2">Quantity</div>
                        </div>
                    </div>
                    {CartItem}

                </div>
            </div>
        )

    }
}

export default CartItems;