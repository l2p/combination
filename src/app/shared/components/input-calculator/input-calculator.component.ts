import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
	selector: "app-input-calculator",
	templateUrl: "./input-calculator.component.html",
	styleUrls: ["./input-calculator.component.scss"]
})
export class InputCalculatorComponent {
	@Input() label!: string;
	@Input() type!: string;
	@Input() placeholder!: string;
	@Input() required!: boolean;
	@Input() value!: number;
	@Output() changeValue = new EventEmitter<number>();

	/**
	 * Emmit value to component parent
	 * @return {number} : emit - changeValue
	 * @public
	 */
	emmitValue(): void {
		this.changeValue.emit(this.value);
	}
}
