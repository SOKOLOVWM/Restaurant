import styles from "./Button.module.css";

export function Button({ title, image, id, handleClick, addStyles }) {
	return (
		<button
			id={id}
			onClick={handleClick}
			className={
				image
					? styles.button
					: addStyles
					? `${styles.button} ${styles.buttonCountChange} ${addStyles.addStylesButton}`
					: `${styles.button} ${styles.buttonCountChange} `
			}
		>
			{title}
			{image && <img src={image} alt="pictire"></img>}
		</button>
	);
}
