import { Select } from "../../shared-components";
import styles from "./filters.module.scss";

export function DonationFilters ({ onChange }) {
	return (
		<div className={styles.filtersWrapper}>
			<p className={styles.explanatoryText}>Pretražite donacije na osnovu sledećih parametara:</p>
			<div className={styles.filters}>
				<Select
					className={styles.field}
					id="donationType"
					name="donationType"
					options={{ true: "finansijska", false: "robna" }}
					placeholder="Vrsta donacije..."
					onChange={(value) => onChange({ isFinancial: value })}
				/>
				<Select
					className={styles.field}
					id="donationStatus"
					name="donationStatus"
					options={{ true: "u toku", false: "završeno" }}
					placeholder="Faza donacije..."
					onChange={(value) => onChange({ isActive: value })}
				/>
			</div>
		</div>
	);
}
