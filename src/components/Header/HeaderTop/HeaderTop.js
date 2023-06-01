import styles from "./HeaderTop.module.css";
import { Logo } from "../../../common/Logo/Logo";
import { Delivery } from "./Delivery/Delivery";
import { Contacts } from "./Contacts/Contacts";
import { Entrance } from "./Entrance/Entrance";
import { CartButton } from "./CartButton/CartButton";
import { Humburger } from "../../../common/Humburger/Humburger";

export function HeaderTop({ isShowMenu, setIsShowMenu }) {
	return (
		<div className={styles.header_top}>
			<div className={styles.content}>
				<Humburger isShowMenu={isShowMenu} setIsShowMenu={setIsShowMenu} />
				<Logo />
				<Delivery />
				<Contacts />
				<Entrance />
				<CartButton />
			</div>
		</div>
	);
}
