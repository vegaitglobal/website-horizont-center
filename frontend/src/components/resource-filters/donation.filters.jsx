import { Input, Select } from "../../shared-components";
import styles from "./filters.module.scss";

export function DonationFilters ({ onChange }) {
	return (
		<div className={styles.filtersWrapper}>
			<p className={styles.explanatoryText}>Pretražite donacije na osnovu sledećih parametara:</p>
			<div className={styles.filters}>
				<Input
					withSearchIcon
					className={styles.leftField}
					id="donationContains"
					name="donationContains"
					placeholder="Naziv donacije..."
					onChange={(value) => onChange({ contains: value })}
				/>
				<Select
					className={styles.rightField}
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
