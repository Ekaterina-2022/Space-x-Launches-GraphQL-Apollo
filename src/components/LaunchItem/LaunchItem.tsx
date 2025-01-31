import styles from "@/components/LaunchItem/launchItem.module.scss";
import { LaunchItemFragment, useGetPastLaunchesQuery } from "@/gql/generated";

import Image from "next/image";
import logo from "../../../public/logo.svg";

interface Props {
	launch: LaunchItemFragment;
}

export const LaunchItem = ({ launch }: Props) => {
	const { mission_name, launch_date_utc, links } = launch;
	const src = links?.flickr_images && `${links?.flickr_images[0]}`;

	return (
		<div className={styles.launch}>
			<figure className={styles.launch__figure}>
				<div className={styles.launch__figure_frame}>
					<Image
						loader={() => (src ? src : logo)}
						src={logo}
						alt="SpaceX logo"
						className={styles.launch__figure_img}
						width={100}
						height={100}
					/>
				</div>
			</figure>

			<div className={styles.launch__content}>
				<h3 className={styles.launch__title}>{mission_name}</h3>

				<div className={styles.launch__caption}>
					{new Date(launch_date_utc).toUTCString()}
				</div>
			</div>
		</div>
	);
};
