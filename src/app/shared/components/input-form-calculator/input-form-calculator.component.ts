import { Component, Input } from "@angular/core";
import { FormGroup } from "@angular/forms";

@Component({
	selector: "app-input-form-calculator",
	templateUrl: "./input-form-calculator.component.html",
	styleUrls: ["./input-form-calculator.component.scss"]
})
export class InputFormCalculatorComponent {
	@Input() label!: string;
	@Input() type!: string;
	@Input() placeholder!: string;
	@Input() required!: boolean;
	@Input() controlName!: string;
	@Input() form!: FormGroup;
}
