import styles from "./Category.module.css";
import { useParams } from "react-router-dom";
import { menu } from "../../../data/menu";
import { BasketCounter } from "./BasketCounter/BasketCounter";

export function Category() {
	const { url } = useParams();

	const { title, products } = menu.find((category) => {
		return url === undefined
			? category.url === "cold-snack"
			: category.url === url;
	});

	return (
		<section className={styles.category} key={url}>
			<h2 className={styles.title}>{title}</h2>

			<div className={styles.products}>
				{products.map((product) => (
					<div key={product.id} className={styles.product}>
						<img
							className={styles.product__image}
							src={product.images.src}
							alt={product.images.alt}
						></img>

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
								<BasketCounter productPrice={product.price} />
							</div>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}
