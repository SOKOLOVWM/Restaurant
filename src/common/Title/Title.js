import styles from "./Title.module.css";

export function Title({ title, addStyles }) {
	return <h2 className={`${styles.title} ${addStyles}`}>{title}</h2>;
}
