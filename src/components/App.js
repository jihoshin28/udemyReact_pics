import React, { Component } from 'react'
import SearchBar from './SearchBar'
import unsplash from '../api/unsplash'

class App extends Component {
    constructor(){
        super()
        this.state = {
            pics : []
        }
    }
    onFormSubmit = async (term) => {
        const response = await unsplash.get('/search/photos', {
            params: {
                query: term
            }
        })

        this.setState({pics: response.data.results})
    }

    render(){
        return (
            <div class="ui container" style={{ marginTop: '10px' }}>
                App
                <SearchBar onSubmit = {this.onFormSubmit} />
                Found: {this.state.pics.length} images
            </div>
        )
    }
    
}

export default App