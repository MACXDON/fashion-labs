import Link from "next/link";

const Shopper = (props) => {
    const shopperNavCategories = ['Tops', 'Bottoms', 'Outerwear', 'Shoes', 'Athletic'];
    
    return (
        <div className="shopper-container" style={{ display: props.display }}>
            <ul>
                {
                    shopperNavCategories.map((category, index) => {
                        return (
                            <li key={index}>
                                <Link href={`shopper/${category.toLowerCase()}`}>
                                    <a>{category}</a>
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
            <div className="product-container">
                {
                    // props.productList
                }
            </div>
        </div>
    )
}

export default Shopper;