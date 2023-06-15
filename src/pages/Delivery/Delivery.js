import styles from "./Delivery.module.scss";
import { accordion } from "../../data/accordion";
import { AccordionLeft } from "../../common/Accordion/AccordionLeft/AccordionLeft";
import { AccordionRight } from "../../common/Accordion/AccordionRight/AccordionRight";
import { constants } from "../../constants/constants";
import { MainContainer } from "../../common/MainContainer/MainContainer";
import { Title } from "../../common/Title/Title";

export function Delivery() {
	return (
		<MainContainer addStyles={styles.delivery}>
			<Title title={constants.common.delivery} />
			<div className={styles.container}>
				<div className={styles.accordion}>
					{accordion.map(({ id, title, content }) => (
						<AccordionLeft key={id} title={title} content={content} />
					))}
				</div>
				<div className={styles.accordion}>
					<AccordionRight />
				</div>
			</div>
		</MainContainer>
	);
}
