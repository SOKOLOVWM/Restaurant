import styles from "./NavigationFooter.module.scss";
import { Link } from "react-router-dom";
import { pages } from "../../../data/pages";

export function NavigationFooter({ isShowMenu, setIsShowMenu }) {
	return (
		<nav
			className={
				isShowMenu
					? `${styles.navigation} ${styles.showMenu}`
					: styles.navigation
			}
			onClick={() => setIsShowMenu(false)}
		>
			<div className={isShowMenu ? styles.blur : ""}></div>
			<div
				className={styles.content}
				onClick={(event) => event.stopPropagation()}
			>
				{pages.map((page) => (
					<Link
						key={page.id}
						to={page.url}
						state="true"
						onClick={() => setIsShowMenu(!isShowMenu)}
					>
						{page.title}
					</Link>
				))}
			</div>
		</nav>
	);
}
