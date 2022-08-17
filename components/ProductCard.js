function ProductCard({ product }) {
    const { description, imageLink, sizes, type } = product;
    
    return (
        <div className="product-card">
            <img src={imageLink ? imageLink : "images/placeholder-image.png"} />
            <p>{description}</p>
        </div>
    );
}

export default ProductCard;