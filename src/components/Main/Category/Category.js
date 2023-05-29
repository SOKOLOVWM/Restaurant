import { useParams, Link } from "react-router-dom";
import { BasketCounter } from "./BasketCounter/BasketCounter";
import { useReducer } from "react";
import { productReducer } from "../../../reducer/productReducer";
import { initialState } from "../../../reducer/initialState";
import { MainContainer } from "../../../common/MainContainer/MainContainer";
import { Title } from "../../../common/Title/Title";
import styles from "./Category.module.css";

export function Category() {
	const [state, dispatch] = useReducer(productReducer, initialState);
	const { url } = useParams();

	const {
		title,
		products,
		url: categoryUrl,
	} = state.find((category) => {
		return url === undefined
			? category.url === "cold-snack"
			: category.url === url;
	});

	// console.log(state);

	return (
		<MainContainer backward={false} addStyles={styles.category} key={url}>
			<Title title={title} />

			<div className={styles.products}>
				{products.map((product) => (
					<div key={product.id} className={styles.product}>
						<Link to={String(product.id)} state={true}>
							<img
								className={styles.product__image}
								src={product.images.src}
								alt={product.images.alt}
							></img>
						</Link>
						<div className={styles.product__container}>
							<div className={styles.title_box}>
								<h3 className={styles.product__title}>{product.title}</h3>
								<span className={styles.product__weight}>
									Вес: {product.weight} г
								</span>
							</div>
							<p className={styles.product__description}>
								{product.description}
							</p>
							<div className={styles.cart_box}>
								<BasketCounter
									productPrice={product.price}
									cartPrice={product.cartPrice}
									cartCount={product.cartCount}
									dispatch={dispatch}
									id={product.id}
									category={categoryUrl}
								/>
							</div>
						</div>
					</div>
				))}
			</div>
		</MainContainer>
	);
}
