import { Routes, Route } from "react-router-dom";
import { Category } from "../Main/Category/Category";
import { Cart } from "../../pages/Cart/Cart";
import { About } from "./../../pages/About/About";
import { Delivery } from "../../pages/Delivery/Delivery";
import { Refund } from "../../pages/Refund/Refund";
import { Sale } from "../../pages/Sale/Sale";

export function Roater() {
	return (
		<Routes>
			<Route path="/" element={<Category />} />
			<Route path="/:url" element={<Category />} />
			<Route path="/cart" element={<Cart />} />
			<Route path="/about" element={<About />} />
			<Route path="/delivery" element={<Delivery />} />
			<Route path="/refund" element={<Refund />} />
			<Route path="/sale" element={<Sale />} />
		</Routes>
	);
}
