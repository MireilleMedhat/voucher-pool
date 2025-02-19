import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  onModuleInit() {
    console.log(process.env); // Logs all environment variables when the module is initialized
    console.log('SUPABASE_URL:', process.env.SUPABASE_URL);
    console.log('SUPABASE_HOST:', process.env.SUPABASE_HOST);
  }
  getHello(): string {
    return 'Hello World!';
  }
}
