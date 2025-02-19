import { VoucherCode } from 'src/modules/voucher-codes/entities/voucher-code.entity';
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, OneToMany } from 'typeorm';

@Entity('special_offers')
export class SpecialOffer {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 255 })
  name: string;

  // todo revise
  @Column({ type: 'decimal', precision: 5, scale: 2 })
  discountPercentage: number;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @OneToMany(() => VoucherCode, (voucher) => voucher.specialOffer)
  vouchers: VoucherCode[];
}
