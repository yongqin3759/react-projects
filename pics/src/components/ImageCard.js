import React, {useRef, useEffect, useState} from 'react'

export const ImageCard = (props) => {
    const [span, setSpan] = useState({spans: 0})
    const imageRef = useRef(null)
    useEffect(() => {
        imageRef.current.addEventListener('load',()=>{
            const height = imageRef.current.clientHeight;
            const spans = Math.ceil(height/10);
            setSpan({spans:spans})
            console.log(spans)
        })
    }, [span])
    return (
        <div style={{gridRowEnd:`span ${span.spans}`}}>
            <img 
            ref={imageRef}
            alt={props.image.description}
            src={props.image.urls.regular}
            />
        </div>
    )
}
