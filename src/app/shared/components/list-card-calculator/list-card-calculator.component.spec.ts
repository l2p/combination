import { ComponentFixture, TestBed } from "@angular/core/testing";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AngularModule } from "../../../angular.module";
import { ListCardCalculatorComponent } from "./list-card-calculator.component";

describe("ListCardCalculatorComponent", () => {
	let component: ListCardCalculatorComponent;
	let fixture: ComponentFixture<ListCardCalculatorComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [ListCardCalculatorComponent],
			imports: [AngularModule, BrowserAnimationsModule]
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(ListCardCalculatorComponent);
		component = fixture.componentInstance;
		component.data = {
			equal: {
				value: 42,
				cards: [22, 20]
			},
			floor: {
				value: 42,
				cards: [22, 20]
			},
			ceil: {
				value: 42,
				cards: [22, 20]
			}
		};
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});
});
