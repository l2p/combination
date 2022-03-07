import { Injectable } from "@angular/core";
import { Observable } from "rxjs/internal/Observable";
import { CombinationR } from "../../interfaces/combination.interface";
import { apiEndpoints } from "../utils-services/api-endpoints";
import { HttpService } from "../utils-services/http.service";

@Injectable({
	providedIn: "root"
})
export class ShopService {
	constructor(private httService: HttpService) {}

	/**
	 * get the combination
	 * @param {number} shopId
	 * @param {number} amount
	 * @return Observable<CombinationR>
	 * @public
	 */
	getCombination(shopId: number, amount: number): Observable<CombinationR> {
		return this.httService.get<CombinationR>(
			apiEndpoints.getCombination(shopId, amount)
		);
	}
}
