function ProductList({ productList }) {
    return ( 
        <div className="product-list-component">
            <ul>
                {
                    productList.map((product, index) => {
                        return (
                            <div className="product-list" key={index}>
                                <div>{product.description}</div>
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