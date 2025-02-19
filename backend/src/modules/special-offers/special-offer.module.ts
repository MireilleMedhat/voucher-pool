import { Module } from '@nestjs/common';
import { SpecialOfferController } from './special-offer.controller';
import { SpecialOfferService } from './special-offer.service';

@Module({
  controllers: [SpecialOfferController],
  providers: [SpecialOfferService],
})
export class SpecialOfferModule { }
