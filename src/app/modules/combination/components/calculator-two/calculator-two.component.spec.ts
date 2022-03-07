import { HttpClient, HttpHandler } from "@angular/common/http";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ShopService } from "../../../../shared/services/web-services/shop.service";
import { SharedModule } from "../../../../shared/shared.module";
import { CalculatorTwoComponent } from "./calculator-two.component";

describe("CalculatorTwoComponent", () => {
	let component: CalculatorTwoComponent;
	let fixture: ComponentFixture<CalculatorTwoComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [CalculatorTwoComponent],
			imports: [SharedModule, BrowserAnimationsModule],
			providers: [ShopService, HttpClient, HttpHandler]
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(CalculatorTwoComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});
});
