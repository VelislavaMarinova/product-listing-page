import Input from "../ui/Inpiut";

const ProductItemForm =()=>{

    return  (
        <form >
            <Input label="Amount"
                input={{
                    id: 'amount',
                    type: 'number',
                    min: '1',
                    max: '5',
                    step: '1',
                    defaultValue: '1'
                }} />
            <button>+ Add to cart</button>
        </form>
    )

}
export default ProductItemForm