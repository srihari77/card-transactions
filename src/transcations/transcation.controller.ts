import { Controller, Post, Body } from '@nestjs/common';
import { TransactionService } from './transcation.service';
import { CreateCardDto } from '../dto/create-card.dto';
import { Transaction } from '../entities/transaction.entity';

@Controller('transactions')
export class TransactionController {
  constructor(private readonly transactionService: TransactionService) {}

  @Post()
  create(@Body() createCardDto: CreateCardDto): Promise<Transaction> {
    return this.transactionService.create(createCardDto);
  }
}
