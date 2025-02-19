import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
} from 'typeorm';
import { Customer } from '../../customers/entities/customer.entity';
import { SpecialOffer } from 'src/modules/special-offers/entities/special-offer.entity';

@Entity('voucher_codes')
export class VoucherCode {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', unique: true, length: 12 })
  // min length 8
  code: string;

  @ManyToOne(() => Customer, (customer) => customer.vouchers, { nullable: false })
  customer: Customer;

  @ManyToOne(() => SpecialOffer, (specialOffer) => specialOffer.vouchers, { nullable: false })
  specialOffer: SpecialOffer;

  @Column({ type: 'timestamp' })
  expirationDate: Date;

  @Column({ type: 'timestamp', nullable: true })
  usedAt: Date | null;

  @Column({ type: 'boolean', default: false })
  isUsed: boolean;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;
}
