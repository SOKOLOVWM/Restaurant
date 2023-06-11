import { constants } from "../../constants/constants";
import styles from "./MainContainer.module.scss";
import { Link } from "react-router-dom";

export function MainContainer({ children, backward = true, addStyles }) {
	return (
		<section className={`${styles.container} ${addStyles}`}>
			{backward && (
				<Link className={styles.backward} to="/">
					&lt; {constants.common.backward}
				</Link>
			)}
			{children}
		</section>
	);
}
