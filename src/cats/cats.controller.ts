import { Body, Controller, Get, Query, Post, Req } from '@nestjs/common';
import { CatsService } from './cats.service';
import { CatRequestDto } from './dto/cats.request.dto';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Get()
  getCurrentCat(@Query('email') email: string) {
    console.log('email : ', email);
    return this.catsService.findAllCats(email);
  }

  @Post()
  async signUp(@Body() body: CatRequestDto) {
    return this.catsService.signup(body);
  }
}
