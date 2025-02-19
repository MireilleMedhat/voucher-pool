import { Injectable } from '@nestjs/common';
import { CreateVoucherCodeDto } from './dto/create-voucher-code.dto';
import { UpdateVoucherCodeDto } from './dto/update-voucher-code.dto';

@Injectable()
export class VoucherCodeService {
  create(createVoucherCodeDto: CreateVoucherCodeDto) {
    return 'This action adds a new voucherCode';
  }

  findAll() {
    return `This action returns all voucherCode`;
  }

  findOne(id: number) {
    return `This action returns a #${id} voucherCode`;
  }

  update(id: number, updateVoucherCodeDto: UpdateVoucherCodeDto) {
    return `This action updates a #${id} voucherCode`;
  }

  remove(id: number) {
    return `This action removes a #${id} voucherCode`;
  }
}
