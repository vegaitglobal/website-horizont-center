import { defaultField } from "./default.field";

export const beneficiaryProfileFieldset = {
	title: "INFORMACIJE OSOBE KOJOJ JE POTREBNA NEGA",
	fields: {
		beneficiary_person: {
			...defaultField,
			label: "Kome je potrebna nega?",
			placeholder: "Kome je potrebna nega?",
		},
		helping_period: {
			...defaultField,
			label: "Period pružanja pomoći",
			placeholder: "Period pružanja pomoći",
			infoText: (
				"Navedite u kom vremenskom periodu Vam je potrebna podrška. " +
				"Primeri: ovog meseca, od 1. do 15. marta 2023. godine, tokom " +
				"čitavog februara 2023. godine, tokom čitave 2023. godine..."
			),
		},
		weekly_days: {
			...defaultField,
			label: "Broj dana nedeljno",
			placeholder: "Broj dana nedeljno",
		},
		daily_hours: {
			...defaultField,
			type: "number",
			label: "Koliko sati dnevno?",
			placeholder: "Koliko sati dnevno (0-24h)",
			infoText: "Potrebna pomoć na dnevnom nivou u satima (0-24h). Primer: 5h",
		},
		care_type: {
			...defaultField,
			label: "Vrsta pomoći",
			placeholder: "Vrsta pomoći",
			suggestions: [
				"Socijalizacija i emotivna podrška",
				"Za vožnju na preglede i obavljanje poslova nabavke",
				"Demencija, parkinsonova bolest ili neka druga specijalna nega",
				"Pomoć  u održavanju lične higijene - kupanju, oblačenju i slično",
				"Kućni poslovi, priprema hrane",
			],
		},
	},
};
