export const apiEndpoints = {
	getCombination: (shopId: number, amount: number): string =>
		`shop/${shopId}/search-combination?amount=${amount}`
};
