import { Routes, Route } from "react-router-dom";
import { SnackCold } from "../SnackCold/SnackCold";
import { SnackHot } from "../SnacksHot/SnackHot";
import { DishMeat } from "../DishMeat/DishMeat";
import { Soup } from "../Soup/Soup";
import { DishFish } from "../DishFish/DishFish";
import { Grill } from "../Grill/Grill";
import { Specials } from "../Specials/Specials";
import { Drinks } from "../Drinks/Drinks";

export function Roater() {
	return (
		<Routes>
			<Route path="/" element={<SnackCold />} />
			<Route path="snackHot" element={<SnackHot />} />
			<Route path="dishMeat" element={<DishMeat />} />
			<Route path="soup" element={<Soup />} />
			<Route path="dishFish" element={<DishFish />} />
			<Route path="grill" element={<Grill />} />
			<Route path="specials" element={<Specials />} />
			<Route path="drinks" element={<Drinks />} />
		</Routes>
	);
}
