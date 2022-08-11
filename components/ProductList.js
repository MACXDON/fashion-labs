function ProductList({ productList }) {
    return ( 
        <div className="product-list-component">
            <ul>
                {
                    productList.map((product, index) => {
                        return (
                            <div className="product-list" key={index}>
                                <span>{product.description}</span>
                                <span></span>
                                <div>Quantity: {product.totalQuantity}</div>
                            </div>
                        )
                    })
                }
            </ul>
        </div>
    );
}

export default ProductList;