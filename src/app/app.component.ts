import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { CombinationValue } from "./shared/interfaces/combination.interface";

@Component({
	selector: "app-root",
	templateUrl: "./app.component.html",
	styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
	title = "calculator-front";
	form!: FormGroup;

	/**
	 * Constructor of component  **AppComponent**
	 * @constructor
	 * @param {FormBuilder} formBuilder - The FormBuilder service.
	 */
	constructor(private formBuilder: FormBuilder) {}

	/**
	 * Init Component, init the form with formControl'calculatorCtrl'
	 * call fn resultForm
	 * @public
	 */
	ngOnInit(): void {
		this.form = this.formBuilder.group({
			calculatorCtrl: [null, []]
		});
		this.resultForm();
	}

	/**
	 * return the form when the value of calculatorCtrl change
	 * @public
	 */
	resultForm(): void {
		this.form.controls.calculatorCtrl.valueChanges.subscribe(() => {
			console.log(this.form);
		});
	}

	/**
	 * Show the result in console.log
	 * @param {CombinationValue} value : value: number, cards: number[]
	 * @public
	 */
	onValueChange(value: CombinationValue): void {
		let cards = "";
		for (let index = 0; index < value.cards.length; index++) {
			cards += `${value.cards.toString()} € `;
		}
		console.log(
			`Amount change event received: ${value.value} € avec les ${cards} `
		);
	}
}
