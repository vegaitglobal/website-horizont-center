import React from "react";
import { CenteredSection, PageHeader, SectionWithImage, StepsSection } from "shared-components";
import styles from "./contact.page.content.module.scss";

export const ContactPageContent = () => {
  return (
    <div className={styles.contactPageContent}>
      <PageHeader withBackground title={"Povežimo se"} />
      <SectionWithImage
        imageSrc="/images/static.4.jpg"
        paragraphs={
          <>
            <p>Centar HORIZONT 21</p>
            <p>Novi Sad</p>
            <a href="mailto:zajednica@negovatelji.rs">zajednica@negovatelji.rs</a>
          </>
        }
      />
    </div>
  );
};
