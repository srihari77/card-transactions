import { CardService } from './card.sevice';
export declare class GenerateDummyDataService {
    private readonly cardService;
    constructor(cardService: CardService);
    generateAndAddDummyData(): Promise<void>;
}
