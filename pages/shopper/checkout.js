import { useState, useEffect, useContext } from "react";
import {AppContext} from '../../util/contextAPI/ContextAPI';

function Checkout() {
    const {checkoutList, setCheckoutList} = useContext(AppContext);

    const style = {
        container: {
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '2rem',
        },
        checkoutContainer: {
            minWidth: '50%',
            padding: '1rem',
            boxShadow: '0 0 5px rgb(0 0 0 / 15%)',
        },
        images: {
            width: '40px',
            borderRadius: '3',
        },
        productQuantity: {
            padding: '0.25rem 0.5rem',
            border: '1px solid rgb(220,220,220)',
            fontWeight: 'bold',
            borderRadius: '5px',
        }
    }

    return (
        <div style={style.container} className="checkout">
            <div style={style.checkoutContainer}>
                {
                    checkoutList.length > 0
                    ? (
                        <ul>
                            {checkoutList.map((product, index) => {
                                return (
                                    <li key={`${index}-${product.id}`} style={{ display: 'block', marginBottom: '0.5rem' }}>
                                        <img src={product.imageSrc} style={style.images}/>
                                        <p>{`${product.description} $${product.price}`}</p>
                                        <span style={style.productQuantity}>{product.quantity}</span>
                                    </li>
                                )
                            })}
                        </ul>
                    )
                    : <p style={{ fontWeight: 'bold' }}>🙀 Your cart is empty!</p>
                }
            </div>
        </div>
    );
}

export default Checkout;