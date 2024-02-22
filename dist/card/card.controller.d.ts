import { CardService } from './card.sevice';
import { CreateCardDto } from '../dto/create-card.dto';
import { Card } from '../entities/card.entity';
export declare class CardController {
    private readonly cardService;
    constructor(cardService: CardService);
    create(createCardDto: CreateCardDto): Promise<Card>;
    findAll(): Promise<Card[]>;
    findOne(id: number): Promise<Card>;
}
