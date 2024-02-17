import React from 'react';
import style from "./ClassesCard.module.css"

function ClassesCard({price,title,description,backgroundImage,priceColor}) {
    return (
        <div style={{backgroundImage:`url(${backgroundImage});`}} className={style.classesCardContainer}>
            <div style={{backgroundColor:`${priceColor}`}} className={style.price}>{`${price}₾`}</div>

            <section className={style.classCardBody}>
                <h1>{title}</h1>
                <p>{description}</p>
                <p>Learn More</p>

            </section>
        </div>
    );
}

export default ClassesCard;