import { useState } from "react";
import styles from "./AccordionRight.module.scss";
import up from "./../../../assets/images/icon_arrowUp.svg";
import down from "./../../../assets/images/icon_arrowDown.svg";
import { accordion } from "../../../data/accordion";

export function AccordionRight() {
	const [state, setState] = useState(accordion);

	const handleAccordionClick = (id) => {
		let newState = [];

		state.map((item) => {
			if (item.id === id) {
				item.isOpen === true
					? (newState = [...state, (item.isOpen = false)])
					: (newState = [...state, (item.isOpen = true)]);
			} else {
				newState = [...state, (item.isOpen = false)];
			}
			newState.pop();
			setState(newState);
		});
	};

	return (
		<>
			{state.map((item) => (
				<div className={styles.accordionItem} key={item.id}>
					<div
						className={styles.accordionTitle}
						onClick={() => handleAccordionClick(item.id)}
					>
						<span>{item.title}</span>

						{item.isOpen ? (
							<img src={up} alt="arrow up" />
						) : (
							<img src={down} alt="arrow down" />
						)}
					</div>
					{item.isOpen && (
						<p className={styles.accordionContent}>{item.content}</p>
					)}
				</div>
			))}
		</>
	);
}
