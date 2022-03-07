import {
	HttpClient,
	HttpErrorResponse,
	HttpHeaders
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError, map } from "rxjs/operators";
import { environment } from "../../../../environments/environment";

@Injectable({
	providedIn: "root"
})
export class HttpService {
	private token = "tokenTest123";
	private headers = new HttpHeaders({
		"Content-Type": "application/json",
		Authorization: this.token
	});
	private httpOptions = { headers: this.headers };

	constructor(private httpClient: HttpClient) {}

	get<T>(url: string): Observable<T> {
		return this.httpClient
			.get<T>(`${environment.apiUrl}${url}`, this.httpOptions)
			.pipe(
				map((res: T) => res),
				catchError((error: HttpErrorResponse) =>
					this.handleError(error)
				)
			);
	}

	private handleError(error: HttpErrorResponse) {
		return throwError(
			`Something bad happened; please try again later. ${error.message}`
		);
	}
}
