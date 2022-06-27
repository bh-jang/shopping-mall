import { NavLink } from "react-router-dom";
import { Product } from "../../types";

const ProductItem = ({
    category,
    image,
    price,
    id,
    rating,
    title
}: Product) => (
    <li className="product-item">
        <NavLink to={`/products/${id}`}>
            <p className="product-item__category">{category}</p>
            <p className="product-item__title">{title}</p>
            <img className="product-item__img" src={image} />
            <span className="product-item__price">${price}</span>
            <span className="product-item__rating">({rating.rate})</span>
        </NavLink>
    </li>
)

export default ProductItem;