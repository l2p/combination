export interface CombinationR {
	equal?: CombinationValue;
	floor?: CombinationValue;
	ceil: CombinationValue;
}

export interface CombinationValue {
	value: number;
	cards: number[];
}
