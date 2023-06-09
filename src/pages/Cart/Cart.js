import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Cart.module.scss";
import { constants } from "../../constants/constants";
import { MainContainer } from "../../common/MainContainer/MainContainer";
import { Button } from "../../common/Button/Button";
import { Title } from "../../common/Title/Title";
import { BasketCounterContainer } from "../../common/BasketCounter/BasketCounterContainer";
import { deleteProduct } from "../../reducer/productSlice";
import { subCartCount } from "../../reducer/cartSlice";

export function Cart() {
	const state = useSelector((state) => state.productSlice.productInitialState);
	const dispatch = useDispatch();
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
		localStorage.setItem("basket", JSON.stringify(basketState));
	}, [state]);

	const removeProduct = (id, url, cartCount) => {
		const newBasket = basket.filter((product) => product.id !== id);
		setBasket(newBasket);
		dispatch(subCartCount(cartCount));
		dispatch(
			deleteProduct({
				id: id,
				category: url,
			})
		);
	};

	const totalPrice = () => {
		return basket.reduce((sum, product) => sum + product.cartPrice, 0);
	};

	return (
		<MainContainer addStyles={styles.cart}>
			<Title title={constants.common.cart} />
			<div className={styles.container}>
				<div className={styles.order}>
					{basket.map((product) => (
						<div className={styles.product} key={product.id}>
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
								<BasketCounterContainer
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
									addStyles={styles.addStylesButton}
								/>
							</div>
						</div>
					))}
				</div>

				<div className={styles.total}>
					<div className={styles.totalBox}>
						<span className={styles.totalTitle}>Итого: </span>
						<span className={styles.totalPrice}>
							{totalPrice().toLocaleString()} &#x20bd;
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
