import React, { Component } from "react"

import { ProductListStateType, responseJSONType } from "./productTypes";
import fetchProductList from "../../api_calls/productList";
import fetchProductSearch from "../../api_calls/productSearch";
import { Link } from "react-router-dom";

export default class ProductList extends Component<any, ProductListStateType> {

  state: ProductListStateType = {
    page: 1,
    perPage: 4,
    totalProducts: 0,
    productList: [],
    searchQuery: ""
  }
  async componentDidMount() {
    try {
      let result = await fetchProductList(this.state.page, this.state.perPage)
      let resultJSON: responseJSONType = await result.json()

      if (result.ok) {
        this.setState({ 
          productList: resultJSON.products, 
          totalProducts: resultJSON.paging.total 
        })
      } else {
        // Handle your error here
      }
    } catch(err) {
      // Handle your error here
    }
    document.addEventListener('scroll', this.trackScrolling);
  }
  constructor(props: any) {
    super(props)
    this.state = {
        page: 1,
        perPage: 4,
        totalProducts: 0,
        productList: [],
        searchQuery: ""
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
  }
  handleChange(e : any){
      this.setState({
          searchQuery: e.target.value
      })
  }

  async handleSearch(event : any) {
    event.preventDefault()
    try {
        let result = await fetchProductSearch(this.state.searchQuery)
        let resultJSON: responseJSONType = await result.json()
        if (result.ok) {
          this.setState({ 
            productList: resultJSON.products, 
            totalProducts: resultJSON.paging.total
          })
        } else {
          // Handle your error here
        }
      } catch(err) {
        // Handle your error here
      }
      if(this.state.totalProducts < this.state.perPage){
          document.removeEventListener('scroll', this.trackScrolling);
      }
}

  isBottom(el: any) {
    return el.getBoundingClientRect().bottom <= window.innerHeight;
  }
  
  componentWillUnmount() {
    document.removeEventListener('scroll', this.trackScrolling);
  }
  
  trackScrolling = () => {
    const wrappedElement = document.getElementById('productList');
    if (this.isBottom(wrappedElement)) {
        this.setState({ 
            perPage: this.state.perPage + 4
          })
        this.componentDidMount();
        document.removeEventListener('scroll', this.trackScrolling);
    }
  };

  render() {
      const check = this.state.totalProducts ? (
        <div className="row">
        {
          this.state.productList.map((product) => {
            return (
              <div key={product.id} className="col s6">
                <img src={product.images[0]} alt="Product" className="responsive-img"/>      
                <Link to={'/' + product.id}>{product.title}</Link>
                <div>{product.price}</div>
              </div>
            )
          })
        }
        </div>
      ) : (
        <div className="center">Loading product...</div>
      )
    return (
      <div className="container" id="productList">
            <form onSubmit={this.handleSearch} className="row">
                <input onChange={this.handleChange} className="input-field col s9" type="search" placeholder="SEARCH" aria-label="Search" />
                <input onClick={this.handleSearch} type="submit" className="col s2 waves-effect waves-light btn push-s1" value="submit" style={{ height: '3rem', border: 'none' }} />
            </form>
        {check}
      </div>
    )
  }
}