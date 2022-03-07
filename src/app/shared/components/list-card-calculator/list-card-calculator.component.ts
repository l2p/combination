import { Component, EventEmitter, Input, Output } from "@angular/core";
import {
	CombinationR,
	CombinationValue
} from "../../interfaces/combination.interface";

@Component({
	selector: "app-list-card-calculator",
	templateUrl: "./list-card-calculator.component.html",
	styleUrls: ["./list-card-calculator.component.scss"]
})
export class ListCardCalculatorComponent {
	@Input() data!: CombinationR;
	@Output() chooseValue = new EventEmitter<CombinationValue>();

	/**
	 * Emmit amount & cards
	 * @param {number} amountValue
	 * @param {number[]} cardsValue
	 * @public
	 */
	patchAmount(amountValue: number, cardsValue: number[]): void {
		this.chooseValue.emit({ value: amountValue, cards: cardsValue });
	}
}
