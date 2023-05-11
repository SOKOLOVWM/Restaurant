import styles from "./HeaderTop.module.css";
import { Logo } from "../../../common/Logo/Logo";
import { Delivery } from "./Delivery/Delivery";
import { Contacts } from "./Contacts/Contacts";
import { CartButton } from "./CartButton/CartButton";

export function HeaderTop() {
	return (
		<div className={styles.header_top}>
			<Logo />
			<Delivery />
			<Contacts />
			<CartButton />
		</div>
	);
}
