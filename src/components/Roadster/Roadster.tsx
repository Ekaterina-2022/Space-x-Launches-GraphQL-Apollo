import { useEffect, useState } from "react";
import styles from "@/components/Roadster/roadster.module.scss";
import { useGetRoadsterInfoLazyQuery } from "@/gql/generated";
import { NetworkStatus } from "@apollo/client";

const Roadster = () => {
	const [autoUpdate, setAutoUpdate] = useState(false);
	const [getData, response] = useGetRoadsterInfoLazyQuery({
		notifyOnNetworkStatusChange: true,
	});

	const { data, networkStatus, error, refetch, startPolling, stopPolling } =
		response;
	const loading = isLoading(networkStatus);

	useEffect(() => {
		return autoUpdate ? startPolling(10000) : stopPolling();
	}, [autoUpdate, startPolling, stopPolling]);

	return (
		<section className={styles.roadster}>
			<h2>Roadster info</h2>

			<div className={styles.roadster__actions}>
				<button
					className={styles.roadster__button}
					disabled={loading}
					onClick={() => (data ? refetch() : getData())}
				>
					{loading ? "Loading..." : "Load latest"}
				</button>
				<label className={styles.roadster__label}>
					<input
						type="checkbox"
						checked={autoUpdate}
						onChange={(event) =>
							setAutoUpdate(event.currentTarget.checked)
						}
						className={styles.roadster__input}
					/>{" "}
					Auto-update
				</label>
			</div>

			{error && <p className={styles.error}>{error.message}</p>}

			{data?.roadster && (
				<div className={styles.roadster__content}>
					<div className={styles.roadster__row}>
						<span className={styles.roadster__key}>Name:</span>
						<span className={styles.roadster__value}>
							{data.roadster.name}
						</span>
					</div>

					<div className={styles.roadster__row}>
						<span className={styles.roadster__key}>Speed:</span>
						<span className={styles.roadster__value}>
							{roundNumber(data.roadster.speed_kph)} km/h
						</span>
					</div>

					<div className={styles.roadster__row}>
						<span className={styles.roadster__key}>
							Distance from Earth:
						</span>
						<span className={styles.roadster__value}>
							{roundNumber(data.roadster.earth_distance_km)} km
						</span>
					</div>

					<div className={styles.roadster__row}>
						<span className={styles.roadster__key}>
							Distance from Mars:
						</span>
						<span className={styles.roadster__value}>
							{roundNumber(data.roadster.mars_distance_km)} km
						</span>
					</div>
				</div>
			)}
		</section>
	);
};

export default Roadster;

function isLoading(status: NetworkStatus) {
	switch (status) {
		case NetworkStatus.loading:
		case NetworkStatus.setVariables:
		case NetworkStatus.fetchMore:
		case NetworkStatus.refetch:
		case NetworkStatus.poll:
			return true;
	}

	return false;
}

function roundNumber(number: number | null | undefined) {
	return new Intl.NumberFormat("ru-RU").format(
		number ? Math.round(number) : 0
	);
}
