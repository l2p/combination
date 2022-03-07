import { HttpErrorResponse } from "@angular/common/http";
import { Component, forwardRef, OnDestroy, OnInit } from "@angular/core";
import {
	FormBuilder,
	FormGroup,
	NG_VALUE_ACCESSOR,
	Validators
} from "@angular/forms";
import { Subject, Subscription } from "rxjs";
import { takeUntil } from "rxjs/operators";
import {
	CombinationR,
	CombinationValue
} from "../../../../shared/interfaces/combination.interface";
import { ShopService } from "../../../../shared/services/web-services/shop.service";

@Component({
	selector: "app-calculator-three",
	templateUrl: "./calculator-three.component.html",
	styleUrls: ["./calculator-three.component.scss"],
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(() => CalculatorThreeComponent),
			multi: true
		}
	]
})
export class CalculatorThreeComponent implements OnInit, OnDestroy {
	isLoading = false;
	isDisabled = false;
	fieldInputRequired = true;
	isMin = false;
	isMax = false;
	label = "Montant désiré";
	inputType = "number";
	placeholder = "montant";
	dataR?: CombinationR;
	calculatorForm!: FormGroup;
	onTouched = () => undefined;
	onChangeSub!: Subscription;

	private destroy: Subject<void> = new Subject<void>();

	/**
	 * Constructor of component  **CalculatorThreeComponent**
	 * @constructor
	 * @param {ShopService} _shopService - Api shop service.
	 * @param {FormBuilder} formBuilder - The form builder service.
	 */
	constructor(
		private _shopService: ShopService,
		private formBuilder: FormBuilder
	) {}

	/**
	 * Init Component, init the form 'calculatorForm'
	 * formControl : amountCtrl
	 * formControl : cardsCtrl
	 * @public
	 */
	ngOnInit(): void {
		this.calculatorForm = this.formBuilder.group({
			amountCtrl: [null, [Validators.required]],
			cardsCtrl: [null, []]
		});
	}

	ngOnDestroy(): void {
		if (this.onChangeSub) this.onChangeSub.unsubscribe();
		this.destroy.next();
		this.destroy.complete();
		this.destroy.unsubscribe();
	}

	registerOnChange(onChange: any): void {
		this.onChangeSub = this.calculatorForm.valueChanges.subscribe(onChange);
	}

	registerOnTouched(onTouched: any): void {
		// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
		this.onTouched = onTouched;
	}

	/**
	 * update of the value in form
	 * @param {CombinationValue} value : value: number && cards: number[]
	 * @public
	 */
	writeValue(value: CombinationValue): void {
		if (value) {
			this.calculatorForm.controls.amountCtrl.patchValue(value.value);
			this.calculatorForm.controls.cardsCtrl.patchValue(value.cards);
		}
	}

	/**
	 * Search amounts possible
	 * Call api shopService
	 * @public
	 */
	onValidateClick(): void {
		this.isLoading = true;

		if (this.calculatorForm.controls.amountCtrl.value) {
			this._shopService
				.getCombination(
					5,
					this.calculatorForm.controls.amountCtrl.value
				)
				.pipe(takeUntil(this.destroy))
				.subscribe({
					next: (res: CombinationR) => {
						if (res.equal) {
							this.dataR = res;
						} else if (
							!res.floor &&
							res.ceil &&
							res.ceil.value >
								this.calculatorForm.controls.amountCtrl.value
						) {
							// the desired amount is not possible and it is less than the possible amounts
							this.patchAmount({
								value: res.ceil.value,
								cards: res.ceil.cards
							});
						} else if (
							!res.ceil &&
							res.floor &&
							res.floor.value <
								this.calculatorForm.controls.amountCtrl.value
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
		this.calculatorForm.controls.amountCtrl.patchValue(combinValue.value);
		this.calculatorForm.controls.cardsCtrl.patchValue(combinValue.cards);
		this.onValidateClick();
	}

	/**
	 * Check is disabled
	 * @return {boolean}
	 * @public
	 */ disabledValid(): boolean {
		return (
			this.isDisabled || !this.calculatorForm.controls.amountCtrl.valid
		);
	}

	/**
	 * Check is min
	 * @return {boolean}
	 * @public
	 */
	isMaxBoolean(): boolean {
		return this.isMax || !this.calculatorForm.controls.amountCtrl.valid;
	}

	/**
	 * Check is max
	 * @return {boolean}
	 * @public
	 */
	isMinBoolean(): boolean {
		return this.isMin || !this.calculatorForm.controls.amountCtrl.valid;
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
				nextValue =
					Number(this.calculatorForm.controls.amountCtrl.value) + 1;
				break;
			case "less":
				nextValue =
					Number(this.calculatorForm.controls.amountCtrl.value) - 1;
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
