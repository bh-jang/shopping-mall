import { NavLink } from "react-router-dom";
import { PRODUCT } from "../../graphql/products";

const ProductItem = ({
    imageUrl,
    price,
    id,
    title,
    createdAt
}: PRODUCT) => (
    <li className="product-item">
        <NavLink to={`/products/${id}`}>
            <p className="product-item__title">{title}</p>
            <img className="product-item__img" src={imageUrl} />
            <p className="product-item__price">${price.toLocaleString()}</p>
            <p className="product-item__createdAt">{createdAt}</p>
        </NavLink>
    </li>
)

export default ProductItem;