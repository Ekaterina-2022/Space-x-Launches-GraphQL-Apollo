import styles from "./page.module.scss";
import MyApp from "./_app";

export default function Home() {
	return (
		<div className={styles.page}>
			<MyApp />
		</div>
	);
}
