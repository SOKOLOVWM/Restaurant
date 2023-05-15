import styles from "./HeaderTop.module.css";
import { Logo } from "../../../common/Logo/Logo";
import { Delivery } from "./Delivery/Delivery";
import { Contacts } from "./Contacts/Contacts";
import { CartButton } from "./CartButton/CartButton";
import { Humburger } from "../../../common/Humburger/Humburger";

export function HeaderTop() {
	return (
		<div className={styles.header_top}>
			<Humburger />
			<Logo />
			<Delivery />
			<Contacts />
			<CartButton />
		</div>
	);
}
