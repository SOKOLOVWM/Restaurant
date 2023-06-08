import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Product.module.css";
import { constants } from "../../constants/constants";
import { Back } from "../../common/Back/Back";
import { BasketCounterContainer } from "../../common/BasketCounter/BasketCounterContainer";
import { MainContainer } from "../../common/MainContainer/MainContainer";

export function Product() {
	const state = useSelector(
		(state) => state.productReducer.productInitialState
	);
	const dispatch = useDispatch();
	const { url, id } = useParams();

	const { products, url: categoryUrl } = state.find(
		(category) => category.url === url
	);
	const product = products.find((product) => product.id === +id);

	return (
		<MainContainer backward={false} addStyles={styles.product} key={url}>
			<Back />

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
							<BasketCounterContainer
								product={product}
								category={categoryUrl}
								dispatch={dispatch}
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
