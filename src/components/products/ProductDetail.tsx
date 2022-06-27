import { PRODUCT } from "../../graphql/products";

const ProductDetail = ({
    item: {
        title,
        imageUrl,
        description,
        price,
        createdAt
    }
}: { item: PRODUCT }) => (
    <div className="product-detail">
        <p className="product-detail__title">{title}</p>
        <img className="product-detail__img" src={imageUrl} />
        <p className="product-detail__description">{description}</p>
        <p className="product-detail__price">${price.toLocaleString()}</p>
        <p className="product-item__createdAt">{createdAt}</p>
    </div>
)

export default ProductDetail;