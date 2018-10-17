import React, {Component} from "react";
import ReactDOM from "react-dom";

class Footer extends Component {
    render() {
        return (
            <nav className="navbar navbar-dark bg-dark">
                <a className="navbar-brand" href="#">&copy;{this.props.copyrightYear}</a>
            </nav>
        )
    }
}

export default Footer