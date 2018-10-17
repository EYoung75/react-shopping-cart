import React from "react";


class AddItem extends React.Component {

    render() {
        var ProductList = this.props.products.map(product => {
            return (
                <option key={product.id}>{product.name}</option>
            )
        })
        return (
            <div className="collection-item container" >
                <div className="row">
                    <div className="col-4">
                        <h2>Products:</h2>
                        <select>{ProductList}</select>
                    </div>
                    <div className="col-4">
                        <h2>Quantity:</h2>
                        <input type="text"></input>
                    </div>
                </div>
                <button submit={this.props.submit}type="button" className="btn btn-primary">Submit</button>
            </div>

        )
    }
}

export default AddItem;