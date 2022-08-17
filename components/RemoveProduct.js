import { deleteProduct } from "../util/productFunctions";

const removeButtonStyles = {
    border: 'none',
    backgroundColor: '#FFF',
    fontSize: '1.25rem',
    cursor:'pointer',
}

function RemoveProduct({ id, handleClick }) {
    return (
        <div>
            <button 
                value={id}
                onClick={handleClick} 
                className="remove-product"
                style={removeButtonStyles}
            >x</button>
        </div>
    );
}

export default RemoveProduct;