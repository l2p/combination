import { HttpClient, HttpHandler } from "@angular/common/http";
import { TestBed } from "@angular/core/testing";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AngularModule } from "./angular.module";
import { AppComponent } from "./app.component";
import { CombinationModule } from "./modules/combination/combination.module";

describe("AppComponent", () => {
	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [AppComponent],
			imports: [
				ReactiveFormsModule,
				FormsModule,
				CombinationModule,
				AngularModule
			],
			providers: [HttpClient, HttpHandler]
		}).compileComponents();
	});

	it("should create the app", () => {
		const fixture = TestBed.createComponent(AppComponent);
		const app = fixture.componentInstance;
		expect(app).toBeTruthy();
	});

	it(`should have as title 'calculator-front'`, () => {
		const fixture = TestBed.createComponent(AppComponent);
		const app = fixture.componentInstance;
		expect(app.title).toEqual("calculator-front");
	});
});
