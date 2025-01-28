import { useGetPastLaunchesQuery } from "@/gql/generated";
import { LaunchItem } from "@/components/LaunchItem/LaunchItem";
import styles from "@/components/LaunchList/launchList.module.scss";

export async function generateStaticParams() {
	const { data } = useGetPastLaunchesQuery({
		variables: {
			limit: 48,
		},
	});

	return data?.launchesPast
		?.map(
			(launch, index) =>
				launch &&
				index >= 40 && <LaunchItem launch={launch} key={index} />
		)
		.reverse();
}

export const LaunchList = () => {
	const { data, loading, error } = useGetPastLaunchesQuery({
		variables: {
			limit: 48,
		},
	});

	return (
		<section className={styles.launches}>
			<h2>Past launches</h2>

			{error && <p className={styles.error}>{error.message}</p>}

			{loading ? (
				<p className={styles.caption}>Loading...</p>
			) : (
				data?.launchesPast && (
					<div className={styles.launches__list}>
						{data.launchesPast
							.map(
								(launch, index) =>
									launch &&
									index >= 40 && (
										<LaunchItem
											launch={launch}
											key={index}
										/>
									)
							)
							.reverse()}
					</div>
				)
			)}
		</section>
	);
};
