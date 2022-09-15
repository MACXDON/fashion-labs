const style = {
    button: {
        backgroundColor: '#FFF',
        fontWeight: '600',
        padding: '0.25rem 0.5rem',
        border: '1px solid rgb(0 0 0 / 25%)',
        borderRadius: '9px',
    },

    images: {
        maxWidth: '200px',
    }
}

function ProductCard({ product, src, handleClick }) {
    const { description, sizes, type, price } = product;

    return (
        <div className="product-card">
            <img style={style.images} className="product-image" src={
                src 
                ? src 
                : "images/placeholder-image.png"} />
            <p>{description} ${price}</p>
            <div>
                <button onClick={handleClick} style={style.button}>+</button>
            </div>
        </div>
    );
}

export default ProductCard;