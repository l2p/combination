// Angular framework
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
// Material Angular framework
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatListModule } from "@angular/material/list";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";

@NgModule({
	imports: [
		// Angular Imports
		CommonModule,
		FormsModule,
		ReactiveFormsModule,

		// Angular Material Imports
		MatButtonModule,
		MatInputModule,
		MatIconModule,
		MatFormFieldModule,
		MatCardModule,
		MatListModule,
		MatProgressSpinnerModule
	],
	exports: [
		// Angular Imports
		CommonModule,
		FormsModule,
		ReactiveFormsModule,

		// Angular Material Imports
		MatButtonModule,
		MatInputModule,
		MatIconModule,
		MatFormFieldModule,
		MatCardModule,
		MatListModule,
		MatProgressSpinnerModule
	]
})
export class AngularModule {}
