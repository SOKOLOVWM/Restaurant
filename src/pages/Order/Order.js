import styles from "./Order.module.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useValidate } from "../../validation/useValidate";
import clock from "./../../assets/images/icon_clock.svg";

const initialState = {
	name: "",
	phone: "",
	delivery: "delivery",
	street: "",
	house: "",
	flat: "",
	entrance: "",
	floor: "",
	comment: "",
	payment: "online",
	change: "",
	time: "soon",
	persons: "1",
	callback: "noCall",
	agreement: false,
};

export function Order({ styleContainer, styleBack, styleTitle }) {
	const [state, setState] = useState(initialState);
	// const [isDelivery, setIsDelivery] = useState(true);
	const [isCash, setIsCash] = useState(false);
	const [isTime, setIsTime] = useState(false);
	const [persons, setPersons] = useState(1);
	// const [isAgree, setIsAgree] = useState(false);
	const [isShow, setIsShow] = useState(false);
	const { error, validate } = useValidate();
	const [isDisabled, setIsDisabled] = useState(true);

	useEffect(() => {
		const disable =
			Object.values(error).find((element) => element !== "") ||
			state.name === "" ||
			state.phone === "" ||
			state.street === "" ||
			state.house === "" ||
			state.agreement === false;
		setIsDisabled(disable);
	}, [
		error,
		state.name,
		state.phone,
		state.street,
		state.house,
		state.agreement,
	]);

	function handleChange({ target }) {
		const { name, value, type, checked } = target;
		const stateValue = type === "checkbox" ? checked : value;
		validate(name, value);
		setState({ ...state, [name]: stateValue });
	}

	function handleOrder(event) {
		event.preventDefault();
		setIsShow(true);
	}

	return (
		<section className={`${styles.order} ${styleContainer}`}>
			<Link className={styleBack} to="/">
				&lt; к выбору блюд
			</Link>
			<h2 className={`${styles.title} ${styleTitle}`}>Оформление заказа</h2>

			<form className={styles.form} onSubmit={handleOrder}>
				<div className={styles.form__container}>
					<h4 className={styles.form__title}>1. Контактная информация</h4>
					<div className={styles.form__content}>
						<input
							className={styles.form__input}
							type="text"
							name="name"
							value={state.name}
							placeholder="Имя*"
							onChange={handleChange}
						></input>
						<input
							className={styles.form__input}
							type="phone"
							name="phone"
							value={state.phone}
							placeholder="Телефон*"
							onChange={handleChange}
						></input>
					</div>

					{(error.name && <span className={styles.error}>{error.name}</span>) ||
						(error.phone && (
							<span className={styles.error}>{error.phone}</span>
						))}
				</div>

				<div className={styles.form__container}>
					<h4 className={styles.form__title}>2. Доставка</h4>
					<div className={styles.choiceContainer}>
						<div className={styles.choiceBox}>
							<div>
								<input
									id="deliveryYes"
									name="delivery"
									type="radio"
									value="delivery"
									checked={state.delivery === "delivery"}
									onChange={handleChange}
								/>
								<label
									className={`${styles.choiceButton} ${styles.choiceLeft}`}
									htmlFor="deliveryYes"
								>
									Доставка
								</label>
							</div>
							<div>
								<input
									id="deliveryNo"
									name="delivery"
									type="radio"
									value="pickup"
									onChange={handleChange}
								/>
								<label
									className={`${styles.choiceButton} ${styles.choiceRight}`}
									htmlFor="deliveryNo"
								>
									Самовывоз
								</label>
							</div>
						</div>
						{state.delivery === "delivery" && (
							<div className={styles.deliveryTime}>
								<img src={clock} alt="clock"></img>
								<span>Доставим через 1 час 30 минут</span>
							</div>
						)}
					</div>

					<h4 className={styles.form__title}>Адрес доставки</h4>
					<div className={styles.form__content}>
						<div className={styles.form__box}>
							<input
								className={`${styles.form__input} ${styles.street}`}
								type="text"
								name="street"
								value={state.street}
								placeholder="Укажите улицу*"
								onChange={handleChange}
							></input>
							<input
								className={styles.form__input}
								type="text"
								name="house"
								value={state.house}
								placeholder="Номер дома*"
								onChange={handleChange}
							></input>
						</div>

						{(error.street && (
							<span className={`${styles.error} ${styles.errorBox}`}>
								{error.street}
							</span>
						)) ||
							(error.house && (
								<span className={`${styles.error} ${styles.errorBox}`}>
									{error.house}
								</span>
							))}

						<div className={styles.form__box}>
							<input
								className={`${styles.form__input} ${styles.flat}`}
								type="text"
								name="flat"
								value={state.flat}
								placeholder="№ квартиры/офиса"
								onChange={handleChange}
							></input>
							<input
								className={styles.form__input}
								type="text"
								name="entrance"
								value={state.entrance}
								placeholder="Подъезд"
								onChange={handleChange}
							></input>
							<input
								className={styles.form__input}
								type="text"
								name="floor"
								value={state.floor}
								placeholder="Этаж"
								onChange={handleChange}
							></input>
						</div>

						{(error.flat && (
							<span className={`${styles.error} ${styles.errorBox}`}>
								{error.flat}
							</span>
						)) ||
							(error.entrance && (
								<span className={`${styles.error} ${styles.errorBox}`}>
									{error.entrance}
								</span>
							)) ||
							(error.floor && (
								<span className={`${styles.error} ${styles.errorBox}`}>
									{error.floor}
								</span>
							))}

						<div className={styles.form__box}>
							<input
								className={styles.form__input}
								type="text"
								name="comment"
								value={state.comment}
								placeholder="Комментарий"
								onChange={handleChange}
							></input>
						</div>
					</div>
				</div>

				<div className={styles.form__container}>
					<h4 className={styles.form__title}>3. Оплатить</h4>

					<div className={styles.choiceContainer}>
						<div className={`${styles.choiceBox} ${styles.choiceBoxWidth}`}>
							<div>
								<input
									id="online"
									name="payment"
									type="radio"
									value="online"
									checked={state.payment === "online"}
									onChange={(event) => {
										handleChange(event);
										setIsCash(false);
									}}
								/>
								<label
									className={`${styles.choiceButton} ${styles.choiceButtonSmall} ${styles.choiceLeft}`}
									htmlFor="online"
								>
									Оплата онлайн
								</label>
							</div>
							<div>
								<input
									id="card"
									name="payment"
									type="radio"
									value="card"
									onChange={(event) => {
										handleChange(event);
										setIsCash(false);
									}}
								/>
								<label
									className={`${styles.choiceButton} ${styles.choiceButtonSmall}`}
									htmlFor="card"
								>
									Курьеру картой
								</label>
							</div>
							<div>
								<input
									id="cash"
									name="payment"
									type="radio"
									value="cash"
									onChange={(event) => {
										handleChange(event);
										setIsCash(true);
									}}
								/>
								<label
									className={`${styles.choiceButton} ${styles.choiceButtonSmall} ${styles.choiceRight}`}
									htmlFor="cash"
								>
									Наличными
								</label>
							</div>
						</div>
					</div>

					{isCash && (
						<input
							className={styles.choiceAddBlock}
							type="text"
							name="change"
							value={state.change}
							placeholder="Сдача с"
							onChange={handleChange}
						></input>
					)}
				</div>

				<div className={styles.form__container}>
					<h4 className={styles.form__title}>4. Когда доставить</h4>
					<div className={styles.choiceContainer}>
						<div className={styles.choiceBox}>
							<div>
								<input
									id="soon"
									name="time"
									type="radio"
									value="soon"
									checked={state.time === "soon"}
									onChange={(event) => {
										handleChange(event);
										setIsTime(false);
									}}
								/>
								<label
									className={`${styles.choiceButton} ${styles.choiceLeft}`}
									htmlFor="soon"
								>
									В ближайшее время
								</label>
							</div>
							<div>
								<input
									id="time"
									name="time"
									type="radio"
									onChange={(event) => {
										handleChange(event);
										setIsTime(true);
									}}
								/>
								<label
									className={`${styles.choiceButton} ${styles.choiceRight}`}
									htmlFor="time"
								>
									Ко времени
								</label>
							</div>
						</div>
						{isTime && (
							<input
								className={`${styles.choiceAddBlock} ${styles.choiceAddBlock__time}`}
								type="time"
								name="time"
								value={state.time}
								onChange={handleChange}
							></input>
						)}
					</div>

					<div className={styles.persons}>
						<span>Кол-во персон</span>

						<div className={styles.persons__count}>
							<button
								type="button"
								name="persons"
								value={persons}
								onClick={(event) => {
									if (persons > 1) {
										setPersons(persons - 1);
										handleChange(event);
									}
								}}
							>
								-
							</button>
							<span>{persons}</span>
							<button
								type="button"
								name="persons"
								value={persons}
								onClick={(event) => {
									setPersons(persons + 1);
									handleChange(event);
								}}
							>
								+
							</button>
						</div>
					</div>

					<h4 className={styles.form__title}>Хотите мы позвоним?</h4>
					<div className={styles.callBox}>
						<div className={styles.callItem}>
							<input
								id="noCall"
								name="callback"
								type="radio"
								value="noCall"
								checked={state.callback === "noCall"}
								onChange={handleChange}
							/>
							<label htmlFor="noCall">Не перезванивать</label>
						</div>
						<div className={styles.callItem}>
							<input
								id="call"
								name="callback"
								type="radio"
								value="call"
								onChange={handleChange}
							/>
							<label htmlFor="call">Потребуется звонок оператора</label>
						</div>
					</div>
				</div>

				<div className={styles.form__container}>
					<div className={`${styles.form__content} ${styles.form__agreement}`}>
						<div className={styles.agreement}>
							<input
								id="agreement"
								type="checkbox"
								name="agreement"
								value={state.agreement}
								onChange={(event) => handleChange(event)}
							/>
							<label htmlFor="agreement">
								<span>
									Я согласен на обработку моих перс. данных в соответствии с{" "}
									<Link to="/">Условиями</Link>
								</span>
							</label>
						</div>
						<button
							className={styles.executeButton}
							type="submit"
							disabled={isDisabled}
						>
							Оформить заказ
						</button>
						{/* <button
							className={styles.executeButton}
							type="submit"
							disabled={!isAgree}
						>
							Оформить заказ
						</button> */}
					</div>
				</div>

				{isShow && (
					<pre className={styles.output}>{JSON.stringify(state, null, 2)}</pre>
				)}
			</form>
		</section>
	);
}
