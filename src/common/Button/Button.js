import styles from "./Button.module.scss";

export function Button({ title, image, id, handleClick, addStyles }) {
	return (
		<button
			id={id}
			onClick={handleClick}
			className={`${styles.button} ${addStyles}`}
		>
			{title}
			{image && <img src={image} alt="pictire"></img>}
		</button>
	);
}
