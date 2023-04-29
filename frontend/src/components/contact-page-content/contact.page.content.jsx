import React from "react";
import { PageHeader, SectionWithImage } from "shared-components";
import styles from "./contact.page.content.module.scss";

export const ContactPageContent = () => {
	return (
		<div className={styles.contactPageContent}>
			<PageHeader withBackground title={"Povežimo se"}/>
			<SectionWithImage
				imageSrc="/images/static.4.jpg"
				paragraphs={
					<>
						<p className={styles.bold}>Centar HORIZONT 21</p>
						<p className={styles.bold}>Novi Sad</p>
						<a href="mailto:zajednica@negovatelji.rs">zajednica@negovatelji.rs</a>
					</>
				}
			/>
		</div>
	);
};
