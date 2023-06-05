import { useParams, Link } from "react-router-dom";
import { BasketCounter } from "./BasketCounter/BasketCounter";
import { useContext } from "react";
import { MainContainer } from "../../../common/MainContainer/MainContainer";
import { Title } from "../../../common/Title/Title";
import styles from "./Category.module.css";
import { AppContext } from "../../App/App";

export function Category() {
	const { state, dispatch } = useContext(AppContext);

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

	return (
		<MainContainer backward={false} addStyles={styles.category} key={url}>
			<Title title={title} />

			<div className={styles.products}>
				{products.map((product) => (
					<div key={product.id} className={styles.product}>
						<Link to={`/${categoryUrl}/${product.id}`} state={true}>
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
									product={product}
									dispatch={dispatch}
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
