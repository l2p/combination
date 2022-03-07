import {
	HttpEvent,
	HttpHandler,
	HttpInterceptor,
	HttpRequest
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { concatMap, delay, retryWhen, take } from "rxjs/operators";
import { ErrorsHandler } from "./errors-handler";

@Injectable()
export class ErrorsHandlerInterceptor implements HttpInterceptor {
	constructor(private errorsHandler: ErrorsHandler) {}
	intercept(
		req: HttpRequest<any>,
		next: HttpHandler
	): Observable<HttpEvent<any>> {
		return next.handle(req).pipe(
			retryWhen((errors: Observable<any>) =>
				errors.pipe(
					delay(500),
					take(3),
					concatMap((error: any, retryIndex: number) => {
						if (++retryIndex === 3) {
							// eslint-disable-next-line @typescript-eslint/no-unsafe-call
							this.errorsHandler.handleError(error);
							throw error;
						}
						return of(error);
					})
				)
			)
		);
	}
}
