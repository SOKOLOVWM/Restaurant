import styles from "./Entrance.module.css";
import profile from "./../../../../assets/images/icon_profile.svg";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Popup } from "../../../../common/Popup/Popup";
import { Authorization } from "../../../../common/Authorization/Authorization";
import { auth } from "./../../../../firebase";
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	onAuthStateChanged,
} from "firebase/auth";

export function Entrance() {
	const navigate = useNavigate();
	const [isActive, setIsActive] = useState(false);
	const [error, setError] = useState("");
	const [isSignup, setIsSignup] = useState(false);
	const [isLogin, setIsLogin] = useState();
	const [userAuthData, setUserAuthData] = useState({
		email: "tomas@gmail.com",
		password: "123456",
	});

	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			if (user) {
				setIsLogin(true);
			} else {
				setIsLogin(false);
			}
		});
	}, []);

	const handlePopup = () => {
		setIsActive(!isActive);
	};

	const handleChange = ({ target }) => {
		const { name, value } = target;
		setUserAuthData({ ...userAuthData, [name]: value });
	};

	const onSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await createUserWithEmailAndPassword(
				auth,
				userAuthData.email,
				userAuthData.password
			);
			console.log(response);
			setIsSignup(!isSignup);
		} catch (err) {
			setError(err.message);
		}
	};

	const onLogin = async (e) => {
		e.preventDefault();
		await signInWithEmailAndPassword(
			auth,
			userAuthData.email,
			userAuthData.password
		)
			.then((response) => {
				console.log(response.user);
				setIsActive(!isActive);
				navigate("/profile", { state: true });
			})
			.catch((err) => {
				setError(err.message);
			});
	};

	return (
		<>
			{!isLogin ? (
				<div className={styles.container} onClick={handlePopup}>
					<img src={profile} alt="profile" />
					<span className={styles.title}>Войти</span>
				</div>
			) : (
				<Link className={styles.container} to="/profile" state="true">
					<span className={styles.title}>Личный кабинет</span>
				</Link>
			)}

			<Popup
				isActive={isActive}
				setIsActive={setIsActive}
				handlePopup={handlePopup}
			>
				<Authorization
					title={isSignup ? "Войдите в аккаунт" : "Зарегистрируйте аккаунт "}
					titleButton={isSignup ? "Войти" : "Регистрацийа"}
					userAuthData={userAuthData}
					handleChange={handleChange}
					onClickButton={isSignup ? onLogin : onSubmit}
					error={error}
				/>

				{isSignup ? (
					<div>
						<span
							className={styles.actionSelect}
							onClick={() => setIsSignup(!isSignup)}
						>
							Зарегистрироваться
						</span>
					</div>
				) : (
					<div>
						<span
							className={styles.actionSelect}
							onClick={() => setIsSignup(!isSignup)}
						>
							Использовать существующий аккаунт
						</span>
					</div>
				)}
			</Popup>
		</>
	);
}
