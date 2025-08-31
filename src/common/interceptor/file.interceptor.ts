// create a new file named custom-file.interceptor.ts

import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { Request } from 'express';
import { FileInterceptor } from '@nestjs/platform-express';

@Injectable()
export class CustomFileInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return new Observable((observer) => {
      // Extract the request object
      const ctx = context.switchToHttp();
      const req: Request = ctx.getRequest();

      // Create a new instance of FileInterceptor
      const fileInterceptor = FileInterceptor('file', {
        storage: diskStorage({
          destination: './uploads',
          filename: (req, file, callback) => {
            const uniqueSuffix =
              Date.now() + '-' + Math.round(Math.random() * 1e9);
            const ext = extname(file.originalname);
            callback(null, `${file.fieldname}-${uniqueSuffix}${ext}`);
          },
        }),
      });

      // Intercept the file upload using the created FileInterceptor instance
      fileInterceptor.bind(context, next).subscribe({
        next: (value) => observer.next(value),
        error: (err) => observer.error(err),
        complete: () => observer.complete(),
      });
    });
  }
}
