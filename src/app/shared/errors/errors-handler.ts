import { HttpErrorResponse } from "@angular/common/http";
import { ErrorHandler, Injectable } from "@angular/core";
import { SnackBarComponent } from "../components/snack-bar/snack-bar.component";

@Injectable()
export class ErrorsHandler implements ErrorHandler {
	constructor(private snackBar: SnackBarComponent) {}

	handleError(error: Error | HttpErrorResponse): void {
		const classname = error.constructor.name;
		let message: string;
		switch (classname) {
			case "HttpErrorResponse":
				message = !navigator.onLine
					? "There is no internet connection"
					: error.message;
				break;
			default:
				message = error.message;
		}
		this.snackBar.openSnackBar(message, "Close", "red-snackbar");
	}
}
