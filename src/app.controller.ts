import { Controller, Get, Post, Req } from '@nestjs/common';
import { AppService } from './app.service';
import { Request } from 'express';

@Controller('amanda')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/')
  asyHi(): string {
    return 'hi amanda';
  }
  @Get('/test')
  testGet(@Req() req: Request): string {
    console.log('Get test ****************************************');
    console.log('req.params ***************');
    console.log(req.params);
    console.log('req.body ***************');
    console.log(req.body);
    return 'hi';
  }
  @Post('/test')
  testPost(@Req() req: Request): string {
    console.log('Post test ****************************************');
    console.log('req.params ***************');
    console.log(req.params);
    console.log('req.body ***************');
    console.log(req.body);

    return 'hi';
  }
}
