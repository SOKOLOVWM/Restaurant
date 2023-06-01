import styles from "./Popup.module.css";

export function Popup({ isActive, setIsActive, handlePopup, children }) {
	return (
		<div
			className={isActive ? `${styles.popup} ${styles.active}` : styles.popup}
			onClick={() => handlePopup()}
		>
			<div className={styles.popup_container}>
				<div
					className={
						isActive
							? `${styles.popup_body} ${styles.active}`
							: styles.popup_body
					}
					onClick={(e) => e.stopPropagation()}
				>
					{children}

					<div className={styles.popup_close} onClick={() => handlePopup()}>
						&times;
					</div>
				</div>
			</div>
		</div>
	);
}
