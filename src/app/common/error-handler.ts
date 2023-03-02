import { HttpErrorResponse } from "@angular/common/http";
import { ErrorHandler, Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class GlobalErrorHandler extends ErrorHandler {
  constructor() {
    super();
  }

  public override handleError(error: any): void {
    if(!this.isHttpForbiddenError(error)) {
      // TODO add some logging for error
    }
  }

  private isHttpForbiddenError(error: Error): boolean {
    return error instanceof HttpErrorResponse && error.status === 403;
  }
}