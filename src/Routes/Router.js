import { Routes, Route } from "react-router-dom";
import { Category } from "../components/Main/Category/Category";
import { Cart } from "../pages/Cart/Cart";
import { About } from "../pages/About/About";
import { Delivery } from "../pages/Delivery/Delivery";
import { Refund } from "../pages/Refund/Refund";
import { Sale } from "../pages/Sale/Sale";
import { Order } from "../pages/Order/Order";
import { Product } from "../pages/Product/Product";
import { constants } from "../constants/constants";

export function Roater() {
	return (
		<Routes>
			<Route path={constants.routs.home} element={<Category />} />
			<Route path={constants.routs.category} element={<Category />} />
			<Route path={constants.routs.product} element={<Product />} />
			<Route path={constants.routs.cart} element={<Cart />} />
			<Route path={constants.routs.about} element={<About />} />
			<Route path={constants.routs.delivery} element={<Delivery />} />
			<Route path={constants.routs.refund} element={<Refund />} />
			<Route path={constants.routs.sale} element={<Sale />} />
			<Route path={constants.routs.order} element={<Order />} />
		</Routes>
	);
}
