import { HttpErrorResponse } from "@angular/common/http";
import { Component, EventEmitter, OnDestroy, Output } from "@angular/core";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import {
	CombinationR,
	CombinationValue
} from "../../../../shared/interfaces/combination.interface";
import { ShopService } from "../../../../shared/services/web-services/shop.service";

@Component({
	selector: "app-calculator-two",
	templateUrl: "./calculator-two.component.html",
	styleUrls: ["./calculator-two.component.scss"]
})
export class CalculatorTwoComponent implements OnDestroy {
	@Output() amountEmit = new EventEmitter<CombinationValue>();

	isLoading = false;
	isDisabled = false;
	fieldInputRequired = true;
	isMin = false;
	isMax = false;
	value!: number;
	cardsValue: number[] = [];
	label = "Montant désiré";
	inputType = "number";
	placeholder = "montant";
	dataR?: CombinationR;

	private destroy: Subject<void> = new Subject<void>();

	/**
	 * Constructor of component  **CalculatorTwoComponent**
	 * @constructor
	 * @param {ShopService} _shopService - Api shop service.
	 */
	constructor(private _shopService: ShopService) {}

	ngOnDestroy(): void {
		this.destroy.next();
		this.destroy.complete();
		this.destroy.unsubscribe();
	}

	/**
	 * update of the value in the input field
	 * @param {number} value : input field
	 * @public
	 */
	newValue(value: number): void {
		this.value = value;
	}

	/**
	 * Search amounts possible
	 * Call api shopService
	 * @public
	 */
	onValidateClick(): void {
		this.isLoading = true;

		if (this.value) {
			this._shopService
				.getCombination(5, this.value)
				.pipe(takeUntil(this.destroy))
				.subscribe({
					next: (res: CombinationR) => {
						if (res.equal) {
							this.dataR = res;
							this.amountEmit.emit(res.equal);
						} else if (
							!res.floor &&
							res.ceil &&
							res.ceil.value > this.value
						) {
							// the desired amount is not possible and it is less than the possible amounts
							this.patchAmount({
								value: res.ceil.value,
								cards: res.ceil.cards
							});
						} else if (
							!res.ceil &&
							res.floor &&
							res.floor.value < this.value
						) {
							// the desired amount is not possible and it is higher than the possible amounts
							this.patchAmount({
								value: res.floor.value,
								cards: res.floor.cards
							});
						} else {
							// there are a lower and higher amount available
							this.dataR = res;
						}
						this.isLoading = false;
					},
					error: (error: HttpErrorResponse) => {
						console.error(error);
						this.isLoading = false;
					},
					complete: () => {
						this.isLoading = false;
					}
				});
		}
	}

	/**
	 * Update input & cardsValues
	 * @param {CombinationValue} combinValue : value: number && cards: number[]
	 * @public
	 */
	patchAmount(combinValue: CombinationValue): void {
		this.value = combinValue.value;
		this.cardsValue = combinValue.cards;
		this.onValidateClick();
	}

	/**
	 * Check is disabled
	 * @return {boolean}
	 * @public
	 */
	disabledValid(): boolean {
		return this.isDisabled || this.value === undefined;
	}

	/**
	 * Check is max
	 * @return {boolean}
	 * @public
	 */
	isMaxBoolean(): boolean {
		return this.isMax || this.value === undefined;
	}

	/**
	 * Check is min
	 * @return {boolean}
	 * @public
	 */
	isMinBoolean(): boolean {
		return this.isMin || this.value === undefined;
	}

	/**
	 * Call the next amount possible
	 * @param {string}: sign : 'plus' && 'less'
	 * @public
	 */
	computeNextValue(sign: string): void {
		let nextValue = 0;

		switch (sign) {
			case "plus":
				nextValue = this.value + 1;
				break;
			case "less":
				nextValue = this.value - 1;
				break;
		}

		this._shopService
			.getCombination(5, nextValue)
			.pipe(takeUntil(this.destroy))
			.subscribe((res: CombinationR) => {
				if (res) {
					this.isMin = res.ceil && !res.floor;
					this.isMax = !res.ceil && res.floor;
					switch (sign) {
						case "plus":
							if (res.ceil) {
								this.patchAmount(res.ceil);
							}
							break;
						case "less":
							if (res.floor) {
								this.patchAmount(res.floor);
							}
							break;
					}
				}
			});
	}
}
