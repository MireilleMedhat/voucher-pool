import { Module, Global } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomerModule } from './modules/customers/customer.module';
import { SpecialOfferModule } from './modules/special-offers/special-offer.module';
import { VoucherCodeModule } from './modules/voucher-codes/voucher-code.module';
import { createClient, SupabaseClient } from '@supabase/supabase-js';


// import { Customer } from './entities/customer.entity';
// import { SpecialOffer } from './entities/special-offer.entity';
// import { VoucherCode } from './entities/voucher-code.entity';
console.log('LOGGG', process);
console.log('LOGGG', process.env);
console.log('LOGGG', process.env.SUPABASE_HOST!);
@Global()
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.SUPABASE_HOST!,
      port: Number(process.env.SUPABASE_PORT!),
      username: process.env.SUPABASE_USER!,
      password: process.env.SUPABASE_PASSWORD!,
      database: process.env.SUPABASE_DB!,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      // entities: [Customer, SpecialOffer, VoucherCode],
      synchronize: true,
      autoLoadEntities: true, // Automatically load entity modules
      ssl: true,  // ✅ Supabase requires SSL
      extra: {
        ssl: {
          rejectUnauthorized: false,  // ✅ Required for Supabase SSL
        },
      },
    }),
    SpecialOfferModule,
    CustomerModule,
    VoucherCodeModule,
    ConfigModule.forRoot({
      isGlobal: true, // Loads .env variables globally
    }),
  ],
  controllers: [AppController],
  providers: [AppService,
    {
      provide: 'SUPABASE_CLIENT',
      inject: [ConfigService],
      useFactory: () => {
        return createClient(
          process.env.SUPABASE_URL!,
          process.env.SUPABASE_KEY!
        );
      },
      // useFactory: (configService: ConfigService): SupabaseClient => {
      //   const supabaseUrl = configService.get<string>('SUPABASE_URL');
      //   const supabaseKey = configService.get<string>('SUPABASE_KEY');

      //   if (!supabaseUrl || !supabaseKey) {
      //     throw new Error('Supabase configuration is missing');
      //   }

      //   return createClient(supabaseUrl, supabaseKey);
      // },
    }
  ],
  exports: ['SUPABASE_CLIENT'],
})
export class AppModule { }


// TypeOrmModule.forRootAsync({
//   imports: [ConfigModule],
//   inject: [ConfigService],
//   useFactory: (configService: ConfigService) => ({
//     type: 'postgres',
//     host: configService.get<string>('SUPABASE_HOST', 'localhost'),
//     port: +configService.get<number>('SUPABASE_PORT', 5432),
//     username: configService.get<string>('SUPABASE_USER', 'postgres'),
//     password: configService.get<string>('SUPABASE_PASSWORD', 'password'),
//     database: configService.get<string>('SUPABASE_DB', 'voucher_pool'),
//     entities: [__dirname + '/**/*.entity{.ts,.js}'],
//     synchronize: true, // Auto sync tables
//     autoLoadEntities: true, // Automatically load entity modules
//   }),
// import { createClient } from '@supabase/supabase-js'

// const supabaseUrl = 'https://rwncmxkblyditehcpxlj.supabase.co'
// const supabaseKey = process.env.SUPABASE_KEY
// const supabase = createClient(supabaseUrl, supabaseKey)