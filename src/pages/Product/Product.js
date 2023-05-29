import { MainContainer } from "../../common/MainContainer/MainContainer";
import styles from "./Product.module.css";
import { initialState } from "../../reducer/initialState";
import { productReducer } from "../../reducer/productReducer";
import { useReducer } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { BasketCounter } from "../../components/Main/Category/BasketCounter/BasketCounter";
import { constants } from "../../constants/constants";

export function Product() {
	const [state, dispatch] = useReducer(productReducer, initialState);
	const { url } = useParams();
	const { pathname } = useLocation();
	const navigate = useNavigate();

	const goBack = () => {
		navigate(-1);
	};

	const productId = pathname.slice(pathname.lastIndexOf("/") + 1);

	const { products, url: categoryUrl } = state.find(
		(category) => category.url === url
	);
	const product = products.find((product) => product.id === +productId);

	return (
		<MainContainer backward={false} addStyles={styles.product} key={url}>
			<div className={styles.goBack} onClick={goBack}>
				<div className={styles.arrowBox}>
					<div className={styles.arrow}></div>
				</div>
				<span className={styles.goBackTitle}>Вернуться назад</span>
			</div>

			<div className={styles.container}>
				<img
					className={styles.productImage}
					src={product.images.src}
					alt={product.images.alt}
				></img>
				<div className={styles.content}>
					<div className={styles.headerBox}>
						<h3>{product.title}</h3>
						<p>{product.description}</p>
					</div>
					<div className={styles.mainBox}>
						<span className={styles.weight}>Вес: {product.weight} г</span>
						<div className={styles.cartBox}>
							<BasketCounter
								productPrice={product.price}
								cartPrice={product.cartPrice}
								cartCount={product.cartCount}
								dispatch={dispatch}
								id={product.id}
								category={categoryUrl}
								addStyles={styles.cartButton}
							/>
						</div>
						<table>
							<tbody>
								<tr>
									<td>{constants.caloric.protein}</td>
									<td>{constants.caloric.fat}</td>
									<td>{constants.caloric.carb}</td>
									<td>{constants.caloric.calory}</td>
									<td>{constants.caloric.weight}</td>
								</tr>
								<tr>
									<td>{product.caloric.protein.toFixed(2)}</td>
									<td>{product.caloric.fat.toFixed(2)}</td>
									<td>{product.caloric.calory.toFixed(2)}</td>
									<td>{product.caloric.carb}</td>
									<td>{product.caloric.weight} г</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</MainContainer>
	);
}
