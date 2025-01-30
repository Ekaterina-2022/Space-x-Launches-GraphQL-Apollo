"use client";

import { ApolloProvider } from "@apollo/client";
import { connectApolloClientToVSCodeDevTools } from "@apollo/client-devtools-vscode";
import client from "./apolloConfig";
import styles from "@/app/app.module.scss";
import Image from "next/image";
import logo from "../../public/logo.svg";
import { LaunchList } from "@/components/LaunchList/LaunchList";
import Roadster from "@/components/Roadster/Roadster";

export const devtoolsRegistration = connectApolloClientToVSCodeDevTools(
	client,
	"ws://localhost:7095"
);

function MyApp() {
	return (
		<ApolloProvider client={client}>
			<div className={styles.app}>
				<div className={styles.app__container}>
					<header className={styles.app__header}>
						<Image
							src={logo}
							alt="SpaceX logo"
							className={styles.app_logo}
							width={1768}
							height={100}
						/>
					</header>

					<main className={styles.app__content}>
						<LaunchList />
						<Roadster />
					</main>
				</div>
			</div>
		</ApolloProvider>
	);
}

export default MyApp;
