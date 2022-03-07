import { Component, Input } from "@angular/core";

@Component({
	selector: "app-action-button",
	templateUrl: "./action-button.component.html",
	styleUrls: ["./action-button.component.scss"]
})
export class ActionButtonComponent {
	@Input() color = "normal";
	@Input() fontSize = "1em";
	@Input() width = "fit-content";
	@Input() disabled = false;
	@Input() isLoading = false;

	/**
	 * set disabled button with the class css
	 * @return {string} classCss
	 * @public
	 */
	getCSSClass(): string {
		return `${this.color} ${
			this.disabled || this.isLoading ? "disabled" : ""
		}`;
	}
}
