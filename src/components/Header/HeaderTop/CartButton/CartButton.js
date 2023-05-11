import styles from "./CartButton.module.css";
import { Link } from "react-router-dom";

export function CartButton() {
	return (
		<Link to="/cart" state="true" className={styles.cartButton}>
			{/* свойстов state определйаетсйа длай того чтобы скрыть Baner и Navigation в Header при переходе в корзину */}
			<div className={styles.title}>Корзина</div>
			<div className={styles.count}>
				<span>4</span>
			</div>
		</Link>
	);
}
