import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CreateVoucherCodeDto } from './dto/create-voucher-code.dto';
import { UpdateVoucherCodeDto } from './dto/update-voucher-code.dto';
import { VoucherCodeService } from './voucher-code.service';

@Controller('voucher-code')
export class VoucherCodeController {
  constructor(private readonly voucherCodeService: VoucherCodeService) { }

  @Post()
  create(@Body() createVoucherCodeDto: CreateVoucherCodeDto) {
    return this.voucherCodeService.create(createVoucherCodeDto);
  }

  @Get()
  findAll() {
    return this.voucherCodeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.voucherCodeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVoucherCodeDto: UpdateVoucherCodeDto) {
    return this.voucherCodeService.update(+id, updateVoucherCodeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.voucherCodeService.remove(+id);
  }
}
