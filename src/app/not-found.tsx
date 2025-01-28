import Link from "next/link";
import styles from "@/app/not-found.module.scss";

export default function NotFound() {
	return (
		<div className={styles.error__container}>
			<h2>Page Not Found</h2>
			<Link className={styles.btn_home} href="/">
				Return Home
			</Link>
		</div>
	);
}
