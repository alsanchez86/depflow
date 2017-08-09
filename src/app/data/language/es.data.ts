import { InMemoryDbService } from 'angular-in-memory-web-api';

export class EsLanguageData implements InMemoryDbService {
  createDb() {
    let es = [
      {
         "Restaurantes": "Restaurantes"
      }
    ];
    
    return {es};
  }
}
