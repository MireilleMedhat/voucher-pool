import { Module } from '@nestjs/common';
import { VoucherCodeController } from './voucher-code.controller';
import { VoucherCodeService } from './voucher-code.service';

@Module({
  controllers: [VoucherCodeController],
  providers: [VoucherCodeService],
})
export class VoucherCodeModule { }
