import styles from "./HeaderTop.module.css";
import { Logo } from "../Logo/Logo";
import { Delivery } from "../Delivery/Delivery";
import { Contacts } from "../Contacts/Contacts";
import { Cart } from "../Cart/Cart";

export function HeaderTop() {
	return (
		<div className={styles.header_top}>
			<Logo />
			<Delivery />
			<Contacts />
			<Cart />
		</div>
	);
}
