import { Routes, Route } from "react-router-dom";
import { Category } from "../Main/Category/Category";
import { Cart } from "../../pages/Cart/Cart";
import { About } from "./../../pages/About/About";
import { Delivery } from "../../pages/Delivery/Delivery";
import { Refund } from "../../pages/Refund/Refund";
import { Sale } from "../../pages/Sale/Sale";
import { Order } from "../../pages/Order/Order";

export function Roater({ styleContainer, styleBack }) {
	return (
		<Routes>
			<Route path="/" element={<Category />} />
			<Route path="/:url" element={<Category />} />
			<Route
				path="/cart"
				element={<Cart styleContainer={styleContainer} styleBack={styleBack} />}
			/>
			<Route
				path="/about"
				element={
					<About styleContainer={styleContainer} styleBack={styleBack} />
				}
			/>
			<Route
				path="/delivery"
				element={
					<Delivery styleContainer={styleContainer} styleBack={styleBack} />
				}
			/>
			<Route
				path="/refund"
				element={
					<Refund styleContainer={styleContainer} styleBack={styleBack} />
				}
			/>
			<Route
				path="/sale"
				element={<Sale styleContainer={styleContainer} styleBack={styleBack} />}
			/>
			<Route
				path="/order"
				element={
					<Order styleContainer={styleContainer} styleBack={styleBack} />
				}
			/>
		</Routes>
	);
}
