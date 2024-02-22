import { TransactionService } from './transcation.service';
import { CreateCardDto } from '../dto/create-card.dto';
import { Transaction } from '../entities/transaction.entity';
export declare class TransactionController {
    private readonly transactionService;
    constructor(transactionService: TransactionService);
    create(createCardDto: CreateCardDto): Promise<Transaction>;
}
