import React from 'react'

class Image extends React.Component{
    constructor(props){
        super(props)
        this.state = {

        }
        this.imageRef = React.createRef()
    }

    componentDidMount(){
        this.imageRef.current.addEventListener('load', this.setSpans);
    }

    setSpans = () => {
        const height = this.imageRef.current.clientHeight;
        const spans = Math.ceil(height / 10 + 1);
        this.setState({ spans })
    }

    render() {
        return (
            <div style = {{gridRowEnd: `span ${this.state.spans}`}}>
                <img ref = {this.imageRef} alt={this.props.alt} src={this.props.picURL}></img>
            </div>
        )
    }
    
}

export default Image