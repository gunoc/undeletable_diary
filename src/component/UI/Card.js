import React from "react";
import classes from "./Card.module.css"
//jsx코드가 아니라 jsx코드 안에서 평가되어야 하는 자바스크립트 표현식을 {} 안에 넣는다
const Card = props => {
    return(
        <div className={`${classes.card} ${props.className}`}>{props.children}</div>
    )
};

export default Card;