import React from 'react'
import Image from './Image'

const ImageList = props => {
    return(
        <div className = "image-list">
            {
                props.pics.map(pic => <Image alt = {pic.description} key = {pic.id} picURL = {pic.urls.regular}/>)
            }
        </div>
        
    )
}   

export default ImageList