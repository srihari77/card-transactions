import { Repository } from 'typeorm';
import { Card } from '../entities/card.entity';
import { CreateCardDto } from '../dto/create-card.dto';
export declare class CardService {
    private readonly cardRepository;
    constructor(cardRepository: Repository<Card>);
    create(createCardDto: CreateCardDto): Promise<Card>;
    findAll(): Promise<Card[]>;
    findOne(id: number): Promise<Card>;
}
