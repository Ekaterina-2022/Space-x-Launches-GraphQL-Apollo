import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
	overwrite: true,
	schema: "https://spacex-production.up.railway.app/",
	documents: "src/**/*.{tsx,ts,js,jsx,graphql,gql}",
	generates: {
		"src/gql/generated.ts": {
			plugins: [
				"typescript",
				"typescript-operations",
				"typescript-react-apollo",
			],
			config: {
				withHooks: true,
			},
		},
	},
};

export default config;
