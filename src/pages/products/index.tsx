import { useQuery } from "react-query";
import ProductItem from "../../components/products/ProductItem";
import GET_PRODUCTS, { PRODUCTS } from "../../graphql/products";
import { restFetcher, QueryKeys, graphqlFetcher } from "../../queryClient";

const ProductList = () => {
    // const { data } = useQuery<Array<Product>>(QueryKeys.PRODUCTS, () => restFetcher({
    //     method: 'GET',
    //     path: '/products'
    // }))

    const { data } = useQuery<PRODUCTS>(QueryKeys.PRODUCTS, () => graphqlFetcher(GET_PRODUCTS))
    return (
        <div>
            <h2>상품목록</h2>
            <ul className="products">    
            {
                data?.products.map(product => (
                    <ProductItem {...product} key={product.id}/>
                ))
            }
            </ul>
        </div>
    )
}

export default ProductList;