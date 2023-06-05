import styles from "./Cart.module.css";
import { AppContext } from "../../components/App/App";
import { constants } from "../../constants/constants";
import { MainContainer } from "../../common/MainContainer/MainContainer";
import { Title } from "../../common/Title/Title";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BasketCounter } from "../../components/Main/Category/BasketCounter/BasketCounter";
import { DELETE_PRODUCT } from "../../reducer/types";
import { Button } from "../../common/Button/Button";

export function Cart() {
	const { state, dispatch } = useContext(AppContext);
	const { cartTotalCount, setCartTotalCount } = useContext(AppContext);
	const [basket, setBasket] = useState([]);

	useEffect(() => {
		const basketState = [];

		state.forEach((category) => {
			category.products.forEach((product) => {
				if (product.cartCount > 0) {
					product = { ...product, url: category.url };
					basketState.push(product);
				}
			});
		});

		setBasket(basketState);
	}, [state]);

	const removeProduct = (id, url, cartCount) => {
		const newBasket = basket.filter((product) => product.id !== id);
		setBasket(newBasket);
		setCartTotalCount(cartTotalCount - cartCount);
		dispatch({
			type: DELETE_PRODUCT,
			id: id,
			category: url,
		});
	};

	return (
		<MainContainer addStyles={styles.cart}>
			<Title title={constants.common.cart} />
			<div className={styles.container}>
				<div className={styles.order}>
					{basket.map((product) => (
						<div
							className={`${styles.product} ${styles.productAddStyles}`}
							key={product.id}
						>
							<div className={styles.productAbout}>
								<Link to={`/${product.url}/${product.id}`} state={true}>
									<img src={product.images.src} alt={product.images.alt}></img>
								</Link>
								<div className={styles.titleBox}>
									<span className={styles.title}>{product.title}</span>
									<p className={styles.description}>{product.description}</p>
								</div>
							</div>
							<div className={styles.productDetails}>
								<BasketCounter
									product={product}
									dispatch={dispatch}
									category={product.url}
									addStyles={styles}
								/>
								<Button
									title="&times;"
									handleClick={() =>
										removeProduct(product.id, product.url, product.cartCount)
									}
									addStyles={styles}
								/>
							</div>
						</div>
					))}
				</div>

				<div className={styles.total}>
					<div className={styles.totalBox}>
						<span className={styles.totalTitle}>Итого: </span>
						<span className={styles.totalPrice}>
							{basket
								.reduce((sum, product) => {
									return sum + product.cartPrice;
								}, 0)
								.toLocaleString()}{" "}
							&#x20bd;
						</span>
					</div>
					<Link
						className={styles.totalButton}
						to={constants.routs.order}
						state="true"
					>
						{constants.common.place_order}
					</Link>
				</div>
			</div>
		</MainContainer>
	);
}
