import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  index() {
    return {
      app: 'Api IMC',
      version: '1.0',
      routes: [
        { documentação: '/docs' },
        { User: '/users' },
        { Health: '/Health' },
      ],
    };
  }
}
