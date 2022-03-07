import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AngularModule } from "../../angular.module";
import { SharedModule } from "../../shared/shared.module";
import { CalculatorComponent } from "./components/calculator-first/calculator.component";
import { CalculatorThreeComponent } from "./components/calculator-three/calculator-three.component";
import { CalculatorTwoComponent } from "./components/calculator-two/calculator-two.component";

@NgModule({
	declarations: [
		CalculatorComponent,
		CalculatorTwoComponent,
		CalculatorThreeComponent
	],
	exports: [
		CalculatorComponent,
		CalculatorTwoComponent,
		CalculatorThreeComponent
	],
	imports: [CommonModule, SharedModule, AngularModule]
})
export class CombinationModule {}
