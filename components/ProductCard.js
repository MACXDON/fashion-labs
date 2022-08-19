function ProductCard({ product, src }) {
    const { description, sizes, type } = product;
    
    return (
        <div className="product-card">
            <img className="product-image" src={src ? src : "images/placeholder-image.png"} />
            <p>{description}</p>
        </div>
    );
}

export default ProductCard;