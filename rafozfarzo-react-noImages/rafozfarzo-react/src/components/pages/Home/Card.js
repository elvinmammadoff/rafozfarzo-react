import React from "react";

const Card = ({ title, src }) => {
    return (
        <div className="slider-item item">
            <figure className="slider-effect effect effect-prolly">
                <img src={process.env.PUBLIC_URL + src} alt={title}
                     className="effect-img effect-prolly-img" />
                    <figcaption className="slider-caption effect-caption effect-prolly-caption">
                        <h2 className="slider-title effect-prolly-title">{title}</h2>
                        <a href={process.env.PUBLIC_URL + "/#/blog"} title="View more" className="slider-button effect-prolly-button">
                            View more
                        </a>
                    </figcaption>
            </figure>
        </div>
    );
};

export default Card;