import React from 'react'

class Image extends React.Component{
    constructor(props){
        super(props)

        this.imageRef = React.createRef()
    }

    componentDidMount(){
        console.log(this.imageRef)
    }
    
    render() {
        return (
            <div>
                <img alt={this.props.alt} src={this.props.picURL}></img>
            </div>
        )
    }
    
}

export default Image