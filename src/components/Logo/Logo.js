import styles from "./Logo.module.css";
import { Link } from "react-router-dom";
import logo from "./../../assets/images/logo.svg";

export function Logo() {
	return (
		<Link to="/">
			<img src={logo}></img>
		</Link>
	);
}
