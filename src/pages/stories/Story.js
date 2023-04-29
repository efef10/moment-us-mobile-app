import { useState } from "react";
import { useEffect } from "react";
import { View } from "react-native";

function Story({images}){

    const [presentationImages, setPresentationImages] = useState([])

    useEffect(() => {
        if(images.length > 30){
            images = images.filter((image, idx) => idx % 2 === 0)
        }

        pickImagesToPresent(images).then(imagesForPresentation => {
            setPresentationImages(imagesForPresentation)
        })

    }, [])
    return (
        <View></View>
    )
}

export default Story;