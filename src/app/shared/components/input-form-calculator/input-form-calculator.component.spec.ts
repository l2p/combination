import { ComponentFixture, TestBed } from "@angular/core/testing";
import {
	FormControl,
	FormGroup,
	FormsModule,
	ReactiveFormsModule
} from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AngularModule } from "../../../angular.module";
import { InputFormCalculatorComponent } from "./input-form-calculator.component";

describe("InputFormCalculatorComponent", () => {
	let component: InputFormCalculatorComponent;
	let fixture: ComponentFixture<InputFormCalculatorComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [InputFormCalculatorComponent],
			imports: [
				AngularModule,
				ReactiveFormsModule,
				FormsModule,
				BrowserAnimationsModule
			]
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(InputFormCalculatorComponent);
		component = fixture.componentInstance;
		component.controlName = "testCtrl";
		component.label = "Label";
		component.placeholder = "Placeholder";
		component.required = true;
		component.type = "number";
		const controlName = component.controlName;
		component.form = new FormGroup({
			// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
			[controlName]: new FormControl()
		});
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});
});
