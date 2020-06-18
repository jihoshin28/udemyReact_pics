import React, { Component } from 'react'
import SearchBar from './SearchBar'
import unsplash from '../api/unsplash'
import ImageList from './ImageList'
import '../App.css'

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
        console.log(this.state.pics)
    }

    render(){
        return (
            <div class="ui container" style={{ marginTop: '10px' }}>
                App
                <SearchBar onSubmit = {this.onFormSubmit} />
                Found: {this.state.pics.length} images
                <ImageList pics={this.state.pics}/>
            </div>
        )
    }
    
}

export default App