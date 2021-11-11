import {
  Injectable, NestInterceptor, ExecutionContext, CallHandler,
  RequestTimeoutException,
} from '@nestjs/common';
import {
  catchError, Observable, throwError, timeout, TimeoutError,
} from 'rxjs';

@Injectable()
export class implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<any> | Promise<Observable<any>> {
    return next.handle().pipe(
      timeout(10000),
      catchError((err) => {
        if (err instanceof TimeoutError) {
          return throwError(new RequestTimeoutException());
        }
        return throwError(err);
      }),
    );
  }
}
