import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Transaction } from '../entities/transaction.entity';
import { CreateCardDto } from '../dto/create-card.dto';

@Injectable()
export class TransactionService {
  constructor(
    @InjectRepository(Transaction)
    private readonly transactionRepository: Repository<Transaction>,
  ) {}

  async create(createCardDto: CreateCardDto): Promise<Transaction> {
    const transaction = this.transactionRepository.create(createCardDto);
    return await this.transactionRepository.save(transaction);
  }
}
