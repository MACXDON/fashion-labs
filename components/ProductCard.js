function ProductCard({ product }) {
    const { description, sizes, type } = product;

    return (
        <div className="product-card">
            <img src="images/placeholder-image.png" />
            <p>{description}</p>
        </div>
    );
}

export default ProductCard;