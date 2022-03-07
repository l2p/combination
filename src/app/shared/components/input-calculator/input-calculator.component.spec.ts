import { ComponentFixture, TestBed } from "@angular/core/testing";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AngularModule } from "../../../angular.module";
import { InputCalculatorComponent } from "./input-calculator.component";

describe("InputCalculatorComponent", () => {
	let component: InputCalculatorComponent;
	let fixture: ComponentFixture<InputCalculatorComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [InputCalculatorComponent],
			imports: [AngularModule, BrowserAnimationsModule]
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(InputCalculatorComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});
});
