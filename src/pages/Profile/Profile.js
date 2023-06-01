import styles from "./Profile.module.css";
import { MainContainer } from "../../common/MainContainer/MainContainer";
import { Title } from "../../common/Title/Title";
import { Back } from "../../common/Back/Back";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "./../../firebase";

export function Profile() {
	const navigate = useNavigate();
	const [error, setError] = useState("");

	const handleLogout = async () => {
		await signOut(auth)
			.then(() => {
				navigate("/");
			})
			.catch((err) => {
				setError(err.message);
			});
	};

	return (
		<MainContainer backward={false} addStyles={styles.profile}>
			<Back />
			<Title title="Личный кабинет" />
			<div className={styles.exit}>
				<button className={styles.exitButton} onClick={handleLogout}>
					Выйти
				</button>
				{error && <span className={styles.error}>Something went wrong</span>}
			</div>
		</MainContainer>
	);
}
