import React, { Component } from "react"
import "./App.css"
import Header from "./components/CartHeader"
import Footer from "./components/CartFooter"
import CartItems from "./components/CartItems.jsx"
import AddItem from "./components/AddItem.jsx"



class App extends Component {

  constructor() {
    super()
    var products = [
      { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 },
      { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 },
      { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 },
      { id: 43, name: 'Small Aluminum Keyboard', priceInCents: 2500 },
      { id: 44, name: 'Practical Copper Plate', priceInCents: 1000 },
      { id: 45, name: 'Awesome Bronze Pants', priceInCents: 399 },
      { id: 46, name: 'Intelligent Leather Clock', priceInCents: 2999 },
      { id: 47, name: 'Ergonomic Bronze Lamp', priceInCents: 40000 },
      { id: 48, name: 'Awesome Leather Shoes', priceInCents: 3990 },
    ]
    
    this.state = {
      copyrightYear: 2016,
      products: products,
      name: "",
      quantity: 0,
      cart: [],
      total: 0
      }
  }


  grabItem = (e) => {
    this.setState({[e.target.name]: e.target.value })
  }

  submitButton = (e) => {
    e.preventDefault()
    const name = this.state.name
    const quantity = this.state.quantity
    const items = this.state.products

    let filtered = items.filter (item => item.name === name)
    console.log(filtered)
    let newItem = {
      product: {
        id: filtered[0].id,
        name: filtered[0].name,
        priceInCents: filtered[0].priceInCents
      },
      quantity
    }

    let cart = this.state.cart
    this.setState({cart:[...cart, newItem]})
    
    let total = this.state.total
  
    let amountAddedToCart = (((newItem.product.priceInCents)/100).toFixed(2)*this.state.quantity)
    this.setState({total: (total+amountAddedToCart)})
    }
  
  render(){  
    return (
      <div className="app">
        <Header />
        <CartItems {...this.state}/>
        <AddItem products={this.state.products} grabItem={this.grabItem} submitButton={this.submitButton} total={this.state.total}/>
        <Footer copyrightYear={this.state.copyrightYear}/>
      </div>
    )
  }
  }
export default App
