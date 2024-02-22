import { User } from './user.entity';
import { Transaction } from './transaction.entity';
export declare class Card {
    id: number;
    name: string;
    balance: number;
    user: User;
    transactions: Transaction[];
}
