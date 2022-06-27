import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import ProductDetail from "../../components/products/ProductDetail";
import GET_PRODUCTS, { GET_PRODUCT, PRODUCT, PRODUCTS } from "../../graphql/products";
import { restFetcher, QueryKeys, graphqlFetcher } from "../../queryClient";

const ProductDetailPage = () => {
    const { id } = useParams();
    // const { data } = useQuery<Product>([QueryKeys.PRODUCTS, id], () => restFetcher({
    //     method: 'GET',
    //     path: `/products/${id}`
    // }))

    // graphql 용
    const { data } = useQuery<PRODUCT>([QueryKeys.PRODUCT, id], () => graphqlFetcher(GET_PRODUCT, { id }));

    if (!data) return null;
    return <ProductDetail item={data} />
    
}

export default ProductDetailPage;