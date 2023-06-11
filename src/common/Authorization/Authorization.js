import styles from "./Authorization.module.scss";

export function Authorization({
	title,
	titleButton,
	userAuthData,
	handleChange,
	onClickButton,
	error,
}) {
	return (
		<div className={styles.container}>
			<h2 className={styles.title}>{title}</h2>
			<form className={styles.form}>
				{error && <span className={styles.error}>{error}</span>}
				<div>
					<input
						type="email"
						name="email"
						id="email"
						placeholder="Email"
						value={userAuthData.email}
						onChange={handleChange}
					></input>
				</div>
				<div>
					<input
						type="password"
						name="password"
						id="password"
						placeholder="Password"
						value={userAuthData.password}
						onChange={handleChange}
					></input>
				</div>
				<button type="submit" onClick={onClickButton}>
					{titleButton}
				</button>
			</form>
		</div>
	);
}
