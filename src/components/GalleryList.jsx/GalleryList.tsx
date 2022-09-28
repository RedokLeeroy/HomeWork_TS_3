import { Item } from "../Item/Item"
import s from "./GalleryList.module.css"
import { IData } from "../../interfaces"
import React from "react"
export const GalleryList = ({images, handlerModal}: {images: Partial<IData>[], handlerModal: (large?:string) => void }): JSX.Element => {
    return <ul className={s.ImageGallery}>
        {images.map(image => <Item key={image.id} small={image.webformatURL} large={image.largeImageURL} handlerModal={handlerModal}></Item>)}
</ul>
}