import React from 'react';
import './Card.scss';

const Card = ({ product, addToCart, viewDetails }) => {
    return (
        <div className="custom-card">
            <img src={product.image} className="custom-card__image" alt={product.title} />
            <hr className="custom-card__separator" />
            <div className="custom-card__body">
                <h5 className="custom-card__title">{product.title.substring(0, 20)}</h5>
                <small className="custom-card__description">{product.description.substring(0, 34)}</small>
                <br />
                <h1 className="custom-card__price badge badge-danger ">{`${product.price} $`}</h1>
                <div className="custom-card__buttons">
                    <button className="custom-card__button custom-card__button--info" onClick={() => viewDetails(product.id)}>
                        More Details
                    </button>
                    <button
                        className="custom-card__button custom-card__button--primary"
                        onClick={() => {
                            addToCart(product);
                        }}
                    >
                        Add To Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Card;
