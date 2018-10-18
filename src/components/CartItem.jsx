import React from "react";

class CartItem extends React.Component {
    render() {
        return (
            <div className="collection-item" >
                <div className="row" >
                    <div className="col-md-8" >{this.props.name} </div>
                    <div className="col-md-2" > ${this.props.price}</div>
                    <div className="col-md-2" > x{this.props.quantity} </div>
                </div>
            </div>
        )


    }

}

export default CartItem;