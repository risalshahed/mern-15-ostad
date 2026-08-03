// Entry to the World of React JS
/* const reactElm = React.createElement(
    // HTML Element, The Data, Child of that HTML Element
    'div',          // HTML Element
    null,           // The Data
    // 'Hello React'   // Child of that HTML Element
    React.createElement(
        // HTML Element, The Data, Child of that HTML Element
        'h1',
        null,
        'Hello React'

    )
)

ReactDOM.createRoot(
    document.getElementById('root')
).render(reactElm) */



const productPrice = 500;

function Product() {
    const [quantity, setQuantity] = React.useState(0);

    function addToCart() {
        setQuantity(quantity + 1);
    }

    return (
        <div className="shadow-md rounded-lg bg-slate-800 border-slate-700">
            <div className="px-12 py-8 mb-12">
                <div className="flex gap-x-12 items-center justify-between mt-5">
                    <h3 className="font-semibold text-xl tracking-tight">
                        Why React
                    </h3>
                    <span className="text-xl font-medium text-teal-500">
                        {quantity * productPrice}
                    </span>
                </div>
                <div className="flex gap-x-12 items-center justify-between mt-5">
                    <span className="text-2xl font-bold text-slate-300">
                        {productPrice}
                    </span>
                    <button
                        onClick={addToCart}
                        // href="#"
                        className="text-white focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-[#087ea4] hover:bg-[#087ea4]/[.8] focus:ring-[#087ea4]/[.5]"
                        title="Add to Cart"
                    >
                        +
                    </button>
                </div>
            </div>
        </div>
    );
}

ReactDOM.createRoot(document.getElementById("root")).render(
    <>
        <Product />
        <Product />
    </>
);
