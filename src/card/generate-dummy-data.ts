// generate-dummy-data.service.ts

import { Injectable } from '@nestjs/common';
import { CardService } from './card.sevice';
import { CreateCardDto } from '../dto/create-card.dto';

@Injectable()
export class GenerateDummyDataService {
  constructor(private readonly cardService: CardService) {}

  async generateAndAddDummyData(): Promise<void> {
    const dummyCards: CreateCardDto[] = [
      { cardId: 9324932, amount: 100 },
      { cardId: 2743423, amount: 200 },
      { cardId: 8372848, amount: 300 },
    ];

    // Add dummy data to the database
    for (const dummyCard of dummyCards) {
      await this.cardService.create(dummyCard);
    }
  }
}
