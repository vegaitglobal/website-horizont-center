import React from "react";
import styles from "./about.module.scss";
import { PageHeader, SectionWithImage } from "../../shared-components";
import { ImageLinksSection } from "../image-links-section/image.links.section";
import { CountersSection } from "../counters-section/counters.section";
import { OrganizationPartnersSection } from "../organization-partners-section/organization.partners.section";
import { BLOGS_NAV_ITEM, DONATIONS_NAV_ITEM, REGISTRATION_NAV_ITEM } from "../../config/navigation";

export const About = () => {

	return (
		<div className={styles.aboutContent}>
			<PageHeader
				withBackground
				title={"ZAJEDNICA KOJA BRINE ZA BLIŽNJE"}
			/>
			<SectionWithImage
				hasImageFirst
				imageSrc="/images/static.7.jpg"
				title="Zajednica negovatelja"
				paragraphs={
					<>
						<p>
							Negovatelji.rs je platforma za povezivanje, osnaživanje i podršku svima koji neguju bližnje,
							nemoćne, zavisne osobe… za sve kojima je potrebna pomoć za kućnu negu bolesnika, dece,
							supružnika, roditelja, prijatelja…
						</p>
						<p>
							Negovatelji.rs je mesto i za sve koji žele da se angažuju, obrazuju ili uključe u podršku
							osobama u brizi za bližnje.
						</p>
						<p>
							Pojedinaci, organizacije, institucije, kompanije i mediji koji žele da podrže negovatelje
							i osobe o kojima brinu, takođe su deo naše zajednice i dobrodišlli ste. Informiši se – Poveži se
							– Osnaži se <a href={`/${REGISTRATION_NAV_ITEM.pathname}`}>(Registruj se)</a>.
						</p>
						<p><a href={`/${DONATIONS_NAV_ITEM.pathname}`}>Pokreni kampanju podrške</a></p>
						<p><a href={`/${BLOGS_NAV_ITEM.pathname}`}>Pomozi i sebi i bližnjima koje neguješ</a></p>
						<p><a href="mailto:zajednica@negovatelji.rs">Predloži promene koje unapređuju život</a></p>
					</>
				}
			/>
			<ImageLinksSection/>
			<SectionWithImage
				imageSrc="/images/static.1.jpg"
				paragraphs={
					<>
						<p className={styles.bold}>Vizija</p>
						<p>
							<span className={[styles.bold, styles.italic].join(" ")}>
								Društvo koje ceni, podržava i osnažuje porodične negovatelje
							</span> – željena je budućnost Centra HORIZONT 21 i platforme NEGOVATELJI.RS
						</p>
						<p className={styles.bold}>Misija</p>
						<p>
							Platforma NEGOVETELJI.RS podržava i osnažuje porodične negovatelje, naročito žene, da se razviju i
							napreduju kod kuće, na poslu i u životu, povezujući u zajednicu pojedince, institucije, civilno društvo i
							kompanije spremne da doprinesu dobrobiti negovatelja i osoba o kojima se brinu.
						</p>
					</>
				}
			/>
			<SectionWithImage
				hasImageFirst
				imageSrc="/images/static.2.jpg"
				title={"NEGOVATELJI.RS posotoji, jer želimo da:"}
				paragraphs={
					<>
						<p>Podižemo pažnju javnosti na:</p>
						<ul>
							<li>
								neplaćeni rad neformalnih negovatelja/ica, ali i potrebnu brigu za očuvanje
								i njihovog zdravlja
							</li>
							<li>
								negovatelje/negovateljice: srodnike, komšije, prijatelje, decu… koji brinu o
								svojim bližnjima, bez stručnih znanja, sistemske podrške i uz malo razumevanja
								i okoline, a često i onih o kojima brinu, za njihove probleme, pritiske i potrebe
							</li>
							<li>
								mogućnosti koje donosioci odluka mogu da učine i olakšaju život i rad neformalnih
								negovateljima
							</li>
						</ul>
					</>
				}
			/>
			<CountersSection/>
			<OrganizationPartnersSection/>
		</div>
	);
};
