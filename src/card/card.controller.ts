import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CardService } from './card.sevice';
import { CreateCardDto } from '../dto/create-card.dto';
import { Card } from '../entities/card.entity';

@Controller('cards')
export class CardController {
  constructor(private readonly cardService: CardService) {}

  @Post()
  create(@Body() createCardDto: CreateCardDto): Promise<Card> {
    return this.cardService.create(createCardDto);
  }

  @Get()
  findAll(): Promise<Card[]> {
    return this.cardService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Card> {
    return this.cardService.findOne(id);
  }
}
