import {
	HttpClient,
	HttpClientModule,
	HttpHandler
} from "@angular/common/http";
import { TestBed } from "@angular/core/testing";
import { HttpService } from "./http.service";

describe("HttpService", () => {
	let service: HttpService;

	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [HttpClient, HttpHandler, HttpClientModule]
		});
		service = TestBed.inject(HttpService);
	});

	it("should be created", () => {
		expect(service).toBeTruthy();
	});
});