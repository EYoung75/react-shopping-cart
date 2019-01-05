import React from "react"


class AddItem extends React.Component {

    render() {
        var ProductList = this.props.products.map(product => {
            return (
                <option key={product.name} price={product.priceInCents}>{product.name}</option>
            )
        })
        return (
            <div className="collection-item container">
                <div>
                    <h2>Grand Total:</h2>
                    <p>${this.props.total}</p>
                </div>
                <div className="row">
                    <div className="col-4">
                        <h2>Products:</h2>
                        <select name="name" onChange={this.props.grabItem}>{ProductList}</select>
                    </div>
                    <div className="col-4">
                        <h2>Quantity:</h2>
                        <input name="quantity" type="number" onChange={this.props.grabItem}></input>
                    </div>
                </div>
                <button onClick={this.props.submitButton} value="submit" className="btn btn-primary">Submit</button>
            </div>
        )
    }
}

export default AddItem