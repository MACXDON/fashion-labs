const ProductSubmitForm = (
    {
        display,
        handleSubmit,
        handleDescriptionChange,
        handleCategoryChange,
        handleDiscountChange,
        handleDiscountPriceChange,
        handlePriceChange,
        handleSizesChange,
        handleQuantityChange,
        handleTypeChange,
        handleProductFormDisplay
    }) => {
    return ( 
        <div className="product-form" style={{ display: display }}>
            <button className="close-product-form" onClick={handleProductFormDisplay}>X</button>
            <h3>Add New Item:</h3>
            <form onSubmit={(e) => {
            e.preventDefault();
            handleSubmit()
        }}>
                {/* name */}
                <div onChange={handleDescriptionChange}>
                    <legend>Description:</legend>
                    <input type='text' id='description' name='description' required/>
                </div>

                {/* category */}
                <div onChange={handleCategoryChange}>
                    <legend>Category:</legend>
                    <div>
                        <input type='radio' id='category' name='category' value='tops' />
                        <label htmlFor='category'>Top</label>
                    </div>
                    <div>
                        <input type='radio' id='category' name='category' value='bottoms' />
                        <label htmlFor='category'>Bottom</label>
                    </div>
                    <div>
                        <input type='radio' id='category' name='category' value='outerwear' />
                        <label htmlFor='category'>Outerwear</label>
                    </div>
                    <div>
                        <input type='radio' id='category' name='category' value='shoes' />
                        <label htmlFor='category'>Shoes</label>
                    </div>
                    <div>
                        <input type='radio' id='category' name='category' value='athletic' />
                        <label htmlFor='category'>Athletic</label>
                    </div>
                </div>

                {/* discount */}
                <div onChange={handleDiscountChange}>
                    <legend>Discount:</legend>
                    <div>
                        <input type='radio' id='discount' name='discount' value={true} />
                        <label htmlFor='discount'>True</label>
                    </div>
                    <div>
                        <input type='radio' id='discount' name='discount' value={false} />
                        <label htmlFor='discount'>False</label>
                    </div>
                </div>

                {/* discount price */}
                <div onChange={handleDiscountPriceChange}>
                    <legend>Discount Price:</legend>
                    <div>
                        <input type='number' name="discountPrice" />
                    </div>
                </div>

                {/* price */}
                <div onChange={handlePriceChange}>
                    <legend>Price:</legend>
                    <div>
                        <input type="number" name="price" required/>
                    </div>
                </div>
                
                {/* sizes */}
                <div onChange={handleSizesChange}>
                    <legend>Sizes:</legend>
                    <div>
                        <input type="checkbox" id="large" name="large" value="large" />
                        <label htmlFor="sizes">Large</label>
                    </div>

                    <div>
                        <input type="checkbox" id="medium" name="medium" value="medium" />
                        <label htmlFor="medium">Medium</label>
                    </div>
                    <div>
                        <input type="checkbox" id="small" name="small" value="small" />
                        <label htmlFor="small">Small</label>
                    </div>

                    <div>
                        <input type="checkbox" id="extra-small" name="extra-small" value="extra-small" />
                        <label htmlFor="extra-small">Extra Small</label>
                    </div>
                </div>

                {/* totalquantity */}
                <div onChange={handleQuantityChange}>
                    <legend>Quantity:</legend>
                    <div>
                        <input type='number' name="totalQuantity" required/>
                    </div>
                </div>

                {/* type */}
                <div onChange={handleTypeChange}>
                    <legend>Type:</legend>
                    <div>
                        <input type="checkbox" id="men" name="men" value="men" />
                        <label htmlFor="men">Men</label>
                    </div>

                    <div>
                        <input type="checkbox" id="women" name="women" value="women" />
                        <label htmlFor="women">Women</label>
                    </div>
                    <div>
                        <input type="checkbox" id="boy" name="boy" value="boy" />
                        <label htmlFor="boy">Boy</label>
                    </div>

                    <div>
                        <input type="checkbox" id="girl" name="girl" value="girl" />
                        <label htmlFor="girl">Girl</label>
                    </div>
                </div>
                <input className="product-form-submit" type='submit' />
            </form>
        </div>
    );
}
 
export default ProductSubmitForm;