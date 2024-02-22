"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenerateDummyDataService = void 0;
const common_1 = require("@nestjs/common");
const card_sevice_1 = require("./card.sevice");
let GenerateDummyDataService = class GenerateDummyDataService {
    constructor(cardService) {
        this.cardService = cardService;
    }
    async generateAndAddDummyData() {
        const dummyCards = [
            { cardId: 9324932, amount: 100 },
            { cardId: 2743423, amount: 200 },
            { cardId: 8372848, amount: 300 },
        ];
        for (const dummyCard of dummyCards) {
            await this.cardService.create(dummyCard);
        }
    }
};
exports.GenerateDummyDataService = GenerateDummyDataService;
exports.GenerateDummyDataService = GenerateDummyDataService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [card_sevice_1.CardService])
], GenerateDummyDataService);
//# sourceMappingURL=generate-dummy-data.js.map