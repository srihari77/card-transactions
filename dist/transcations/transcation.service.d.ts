import { Repository } from 'typeorm';
import { Transaction } from '../entities/transaction.entity';
import { CreateCardDto } from '../dto/create-card.dto';
export declare class TransactionService {
    private readonly transactionRepository;
    constructor(transactionRepository: Repository<Transaction>);
    create(createCardDto: CreateCardDto): Promise<Transaction>;
}
