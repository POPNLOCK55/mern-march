import React, {useState} from "react";
import style from "./modules/BoxStyle.module.css"

const BoxShow = ({boxList}) => {


    return (
        <div className={style.boxPage}>
            {boxList.map((item, idx) => (
                <p key={idx} style={{backgroundColor: item.color, height:item.height + "px", width: item.height + "px"}}>{item.color}</p>
            ))}
        </div>
    )
}


export default BoxShow