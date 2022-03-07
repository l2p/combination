import {
	HttpClient,
	HttpClientModule,
	HttpHandler
} from "@angular/common/http";
import { TestBed } from "@angular/core/testing";
import { HttpService } from "../utils-services/http.service";
import { ShopService } from "./shop.service";

describe("ShopService", () => {
	let service: ShopService;

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [],
			providers: [HttpClient, HttpHandler, HttpClientModule, HttpService]
		});
		service = TestBed.inject(ShopService);
	});

	it("should be created", () => {
		expect(service).toBeTruthy();
	});
});
