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
        }
    }

    return (
        <div style={style.container} className="checkout">
            <div style={style.checkoutContainer}>
                {
                    checkoutList
                    ? (
                        <ul>
                            {checkoutList.map((product, index) => {
                                return (
                                    <li key={`${index}-${product.id}`} style={{ display: 'block' }}>
                                        <img src={product.imageSrc} style={style.images}/>
                                        <p>{product.description}</p>
                                        <p>{`$${product.price}`}</p>
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