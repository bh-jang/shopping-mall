import { useQuery } from "react-query";
import ProductItem from "../../components/products/ProductItem";
import { fetcher, QueryKeys } from "../../queryClient";
import { Product } from "../../types";
import '../../scss/products.scss';

const ProductList = () => {
    const { data } = useQuery<Array<Product>>(QueryKeys.PRODUCTS, () => fetcher({
        method: 'GET',
        path: '/products'
    }))

    console.log(data);

    return (
        <div>
            <ul className="products">
            {
                data?.map(product => (
                    <ProductItem {...product} key={product.id}/>
                ))
            }
            </ul>
        </div>
    )
}

export default ProductList;