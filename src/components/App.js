import React, { Component } from 'react'
import SearchBar from './SearchBar'

class App extends Component {
    constructor(){
        super()
    }
    onFormSubmit = term => {
        console.log(term)
    }

    render(){
        return (
            <div class="ui container" style={{ marginTop: '10px' }}>
                App
                <SearchBar onSubmit = {this.onFormSubmit} />
            </div>
        )
    }
    
}

export default App