import { HttpClient, HttpHandler } from "@angular/common/http";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ShopService } from "../../../../shared/services/web-services/shop.service";
import { SharedModule } from "../../../../shared/shared.module";
import { CalculatorThreeComponent } from "./calculator-three.component";

describe("CalculatorThreeComponent", () => {
	let component: CalculatorThreeComponent;
	let fixture: ComponentFixture<CalculatorThreeComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [CalculatorThreeComponent],
			imports: [
				SharedModule,
				ReactiveFormsModule,
				FormsModule,
				BrowserAnimationsModule
			],
			providers: [ShopService, HttpClient, HttpHandler]
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(CalculatorThreeComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});
});
