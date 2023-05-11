import styles from "./Category.module.css";
import cart from "./../../../assets/images/icon_cart.svg";
import { useParams } from "react-router-dom";
import { menu } from "../../../data/menu";
import { useState } from "react";

export function Category() {
	const { url } =
		useParams(); /* используйа huck с именем useParams из библиотеки react-router-dom получаю значение свойства path динамически переданное router, который вызывает текущую компоненту (Category) */
	/* useParams применйатьсйа только при работе с Roetes (компонента Category вызываетсйа из Routers) */
	const { title, products } = menu.find((category) => {
		return url === undefined
			? category.url === "cold-snack"
			: category.url === url; //если домашнайаа страница (url === undefined), то вернуть category с холодными закусками
	}); //получаю значение свойства title из массива menu по url

	const [count, setCount] = useState(0);
	const countAdd = () => setCount(count + 1);

	return (
		<section className={styles.category}>
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
								<span className={styles.product__price}>
									{product.price.toLocaleString()} &#x20bd;
								</span>
								<button className={styles.product__button} onClick={countAdd}>
									В корзину
									<img src={cart}></img>
								</button>
							</div>
						</div>

						<span className={styles.counter}>{count}</span>
					</div>
				))}
			</div>
		</section>
	);
}
