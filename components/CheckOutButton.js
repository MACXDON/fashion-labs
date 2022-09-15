function CheckOutButton({ handleClick, totalCheckoutItems}) {
    const style = {
        checkoutListNumber: {
            display: totalCheckoutItems === 0 ? 'none' : 'flex',
            zIndex: '99',
            width: '1rem',
            height: '1rem',
            padding: '0.25rem',
            backgroundColor: '#DD0',
            textAlign: 'center',
            fontSize: '0.75rem',
            color: '#FFF',
            borderRadius: '1rem',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'absolute',
            top: '1.75rem',
            left: '1rem'
        }
    }
    
    return (
        <>
            <a onClick={handleClick}>
                <div style={{ position: 'sticky', display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer' }}>
                    <img className="shopping-bag" src='/images/icons/bag.jpg'/>
                    <span style={style.checkoutListNumber} className="checkout-list-number">{totalCheckoutItems}</span>
                </div>
            </a>
        </>
    );
}

export default CheckOutButton;