import { InMemoryDbService } from 'angular-in-memory-web-api';

export class EnLanguageData implements InMemoryDbService {
  createDb() {
    let en = [
      {
         "Restaurantes": "Restaurants"
      }
    ];
    
    return {en};
  }
}
