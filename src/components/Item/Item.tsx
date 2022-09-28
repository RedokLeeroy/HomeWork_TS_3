import React from "react"
import s from "./Item.module.css"
export const Item = ({small = "https://www.google.com/imgres?imgurl=https%3A%2F%2Fkino-teatr.ua%2Fpublic%2Fmain%2Fpersons%2F2019-05%2Fx4_photo_5cdbb6972d545.jpg&imgrefurl=https%3A%2F%2Fkino-teatr.ua%2Fperson%2Ftravolta-john-719.phtml&tbnid=zGNFoxVW97VqIM&vet=12ahUKEwje65fZ07f6AhXIBhAIHTPkB2EQMygDegUIARDlAQ..i&docid=cO6tV1ms2UlcXM&w=397&h=535&q=%D1%82%D1%80%D0%B0%D0%B2%D0%BE%D0%BB%D1%82%D0%B0&ved=2ahUKEwje65fZ07f6AhXIBhAIHTPkB2EQMygDegUIARDlAQ", handlerModal, large}:{small?: string, large?:string, handlerModal: (large?:string) => void  }): JSX.Element => {
    return <li className={s.galleryItem}>
  <img className={s.image} src={small} alt="pictur" onClick={()=> handlerModal(large)}/>
</li>
}
