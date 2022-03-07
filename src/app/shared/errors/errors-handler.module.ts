import { CommonModule } from "@angular/common";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { ErrorsHandlerInterceptor } from "./errors-handler-interceptor";

@NgModule({
	declarations: [], // Declare here component if you want to use routing to error component
	imports: [CommonModule],
	providers: [
		{
			provide: HTTP_INTERCEPTORS,
			useClass: ErrorsHandlerInterceptor,
			multi: true
		}
	]
})
export class ErrorsHandlerModule {}
