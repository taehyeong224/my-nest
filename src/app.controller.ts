import { Body, Controller, Get, Param, Req } from '@nestjs/common';
import { Request } from 'express';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(
    @Req() req: Request,
    @Body() body,
    @Param() param: { id: string; name: string },
  ): { msg: string } {
    console.log(param);
    const str: string = this.appService.getHello();
    return {
      msg: str,
    };
  }
}
