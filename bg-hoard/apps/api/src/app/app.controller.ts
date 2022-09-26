import { Game } from '@bg-hoard/libs/api/util-interface';
import { Controller, Get, Param } from '@nestjs/common';

import { AppService } from './app.service';

@Controller('games')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getAllGames(): Game[] {
    return this.appService.getAllGames();
  }

  @Get('/:id')
  getGame(@Param('id') id: string) {
    return this.appService.getGame(id);
  }
}
