import styles from "./Title.module.scss";

export function Title({ title, addStyles }) {
	return <h2 className={`${styles.title} ${addStyles}`}>{title}</h2>;
}
