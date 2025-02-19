import { PartialType } from '@nestjs/swagger';
import { CreateVoucherCodeDto } from './create-voucher-code.dto';

export class UpdateVoucherCodeDto extends PartialType(CreateVoucherCodeDto) {}
