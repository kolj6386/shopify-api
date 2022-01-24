const Product = ({product}) => {
    return(
        console.log(product),
            <div className="shadow-lg rounded max-h-[600px] max-w-[900px]">
                <div className="lg:w-4/5 md:w-4/5 flex flex-wrap">
                    <img alt="Black-Shirt" className="lg:w-1/2 md:w-1/2 lg:h-auto md:h-auto object-cover object-center" src={product.images.edges[0].node.originalSrc}/>
                <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                    <h1 className="text-gray-900 text-3xl title-font font-medium mb-1 text-left pb-[4px]">{product.title}</h1>
                    <hr className="border-1 p-1" />
                    <div className="leading-relaxed text-left pb-[6px]" dangerouslySetInnerHTML={{__html: `${product.descriptionHtml}`}} />
                <div className="flex">
                    <span className="title-font font-medium text-2xl text-gray-900">${Math.floor(product.priceRange.minVariantPrice.amount)}</span>
                    <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Add To Cart</button>
                    </div>
                </div>
                </div>
            </div>

    )
}

export default Product;