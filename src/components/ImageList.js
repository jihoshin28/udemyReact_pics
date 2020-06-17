import React from 'react'
import Image from './Image'

const ImageList = props => {
    return(
        <div>
            {
                props.pics.map(pic => {
                    <Image picURL = {pic.url.regular}/>
                })
            }
        </div>
        
    )
}   

export default ImageList