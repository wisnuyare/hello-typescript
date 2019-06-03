import React, { Component } from "react"

export default class Searchbar extends Component<any, any>{
    state = {
        searchQuery: ""
    }
    constructor(props : any) {
        super(props)
    
        this.handleSearch = this.handleSearch.bind(this)
      }
    handleSearch(event : any) {
        event.preventDefault()
    }
    render(){
        return(
            <div className="container">
                <form onSubmit={this.handleSearch} className="row">
                    <input onChange={(e) => this.setState({ searchQuery: e.target.value })} className="input-field col s9" type="search" placeholder="SEARCH" aria-label="Search" />
                    <input onClick={this.handleSearch} type="submit" className="col s2 waves-effect waves-light btn push-s1" value="submit" style={{ height: '3rem', border: 'none' }} />
                </form>
            </div>
        )
    }
}