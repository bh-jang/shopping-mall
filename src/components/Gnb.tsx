import { NavLink } from "react-router-dom";

const Gnb = () => (
    <nav className="gnb">
        <ul>
            <li>
                <NavLink to="/">홈</NavLink>
            </li>
            <li>
                <NavLink to="/products">상품목록</NavLink>
            </li>
            <li>
                <NavLink to="/cart">장바구니</NavLink>
            </li>
        </ul>
    </nav>
)

export default Gnb;