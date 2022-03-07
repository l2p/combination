import { Overlay } from "@angular/cdk/overlay";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { AngularModule } from "../angular.module";
import { ActionButtonComponent } from "./components/action-button/action-button.component";
import { InputCalculatorComponent } from "./components/input-calculator/input-calculator.component";
import { InputFormCalculatorComponent } from "./components/input-form-calculator/input-form-calculator.component";
import { ListCardCalculatorComponent } from "./components/list-card-calculator/list-card-calculator.component";
import { SnackBarComponent } from "./components/snack-bar/snack-bar.component";
import { ErrorsHandler } from "./errors/errors-handler";
import { ErrorsHandlerModule } from "./errors/errors-handler.module";

@NgModule({
	declarations: [
		InputCalculatorComponent,
		InputFormCalculatorComponent,
		ActionButtonComponent,
		ListCardCalculatorComponent,
		SnackBarComponent
	],
	exports: [
		InputCalculatorComponent,
		InputFormCalculatorComponent,
		ActionButtonComponent,
		ListCardCalculatorComponent,
		SnackBarComponent
	],
	imports: [CommonModule, ErrorsHandlerModule, AngularModule],
	providers: [MatSnackBar, SnackBarComponent, Overlay, ErrorsHandler]
})
export class SharedModule {}
