export const parseFormConfigToJSON = (config: string) => {
	try {
		const parsed = JSON.parse(config);
		return parsed;
	} catch (error) {
		console.error("An error occured while parsing form config, #parseFormConfigToJSON", error);
		return '';
	}
}