import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AngularModule } from "./angular.module";
import { AppComponent } from "./app.component";
import { CombinationModule } from "./modules/combination/combination.module";
import { SharedModule } from "./shared/shared.module";

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		HttpClientModule,
		SharedModule,
		AngularModule,
		CombinationModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
