import styles from "./card.module.scss";
import { LongButton } from "../long-button/long.button";
import { hex2rgba } from "../../utils";


export const Card = ({ id, image, categories, title, description, date, onClick }) => {
	return (
		<li className={styles.cardItem} key={id}>
			<img src={image} alt="" className={styles.image}/>
			<div className={styles.content}>
				<div>
					{categories.map((category) => (
						<span key={category.name}
									style={{ color: category.color, backgroundColor: hex2rgba(category.color, 0.2)}}
									className={styles.category}
						>
							{category.name}
						</span>
					))}
				</div>
				<div className={styles.description}>
					<h4 className={styles.h4}>{title}</h4>
					<p className={styles.p1}>{description.substring(0, 200)}{description.length > 200 && "..."}</p>
					<p className={styles.date}>{new Date(date).toLocaleDateString("nl")}</p>
				</div>
				<div className={styles.button}>
					<LongButton
						value="Saznaj više"
						type="filled"
						onclick={onClick}
						style={{ marginTop: "16px", display: "inline-flex" }}
					/>
				</div>
			</div>
		</li>
	);
};
