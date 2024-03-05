import { defineBuildConfig } from "unbuild";

export default defineBuildConfig({
	clean: true,
	declaration: true,
	rollup: {
		emitCJS: true,
		output: {
			preserveModules: true,
			preserveModulesRoot: "./src"
		}
	},
	entries: ["src/index"],
});
