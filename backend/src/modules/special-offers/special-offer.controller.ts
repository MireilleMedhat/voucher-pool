import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CreateSpecialOfferDto } from './dto/create-special-offer.dto';
import { UpdateSpecialOfferDto } from './dto/update-special-offer.dto';
import { SpecialOfferService } from './special-offer.service';

@Controller('special-offer')
export class SpecialOfferController {
  constructor(private readonly specialOfferService: SpecialOfferService) { }

  @Post()
  create(@Body() createSpecialOfferDto: CreateSpecialOfferDto) {
    return this.specialOfferService.create(createSpecialOfferDto);
  }

  @Get()
  findAll() {
    return this.specialOfferService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.specialOfferService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSpecialOfferDto: UpdateSpecialOfferDto) {
    return this.specialOfferService.update(+id, updateSpecialOfferDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.specialOfferService.remove(+id);
  }
}
