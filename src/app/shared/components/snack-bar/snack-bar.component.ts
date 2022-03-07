import { Component } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
	selector: "app-snack-bar",
	templateUrl: "./snack-bar.component.html",
	styleUrls: ["./snack-bar.component.scss"]
})
export class SnackBarComponent {
	/**
	 * Constructor of component  **SnackBarComponent**
	 * @constructor
	 * @param {MatSnackBarConfig} snackBar - The snack bar material service.
	 */
	constructor(public snackBar: MatSnackBar) {}

	// this function will open up snackbar on top right position with custom background color (defined in css)
	openSnackBar(message: string, action: string, className: string): void {
		this.snackBar.open(message, action, {
			duration: 2000,
			verticalPosition: "top",
			horizontalPosition: "end",
			panelClass: [className]
		});
	}
}
