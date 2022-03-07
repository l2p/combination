import { ComponentFixture, TestBed } from "@angular/core/testing";
import { AngularModule } from "../../../angular.module";
import { ActionButtonComponent } from "./action-button.component";

describe("ActionButtonComponent", () => {
	let component: ActionButtonComponent;
	let fixture: ComponentFixture<ActionButtonComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [ActionButtonComponent],
			imports: [AngularModule]
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(ActionButtonComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});
});
