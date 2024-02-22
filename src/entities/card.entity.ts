import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { User } from './user.entity';
import { Transaction } from './transaction.entity';

@Entity()
export class Card {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ type: 'double precision', default: 0 })
  balance: number;

  @ManyToOne(() => User, (user) => user.cards)
  user: User;

  @OneToMany(() => Transaction, (transaction) => transaction.card)
  transactions: Transaction[];
}
