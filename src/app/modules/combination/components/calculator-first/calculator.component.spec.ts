import { HttpClient, HttpHandler } from "@angular/common/http";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ShopService } from "../../../../shared/services/web-services/shop.service";
import { SharedModule } from "../../../../shared/shared.module";
import { CalculatorComponent } from "./calculator.component";

describe("CalculatorComponent", () => {
	let component: CalculatorComponent;
	let fixture: ComponentFixture<CalculatorComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [CalculatorComponent],
			imports: [SharedModule, BrowserAnimationsModule],
			providers: [ShopService, HttpClient, HttpHandler]
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(CalculatorComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});
});
