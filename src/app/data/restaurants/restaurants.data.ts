import { InMemoryDbService } from 'angular-in-memory-web-api';

export class RestaurantsData implements InMemoryDbService {
  createDb() {
    let restaurants = [
      {
         "_index":"restaurants",
         "_type":"locals",
         "_id":"AU5v1mftlMNHZash_Vep",
         "_score":0,
         "_source":{
            "Id":"00008d750000000000000000",
            "avg_rate":10,
            "description":"El restaurante Albanta está situado en un precioso y privilegiado lugar en las faldas de Sierra Nevada y a los pies de la Alhambra, junto al cauce del Río Genil.  Tan sólo la experiencia de disfrutar de las vistas que ofrece la localización de este restaurante es motivo suficiente para hacer tu reserva.\r\n\r\nLa gastronomía es otro de sus fuertes. Una carta basada en el buen hacer culinario. Destaca por sus elaborados menús, la sabia combinación de materias primas de primera calidad, sabores, colores y texturas para deleitar a los paladares más exigentes. Para empezar, puedes probar las Pastelas mozárabes y continuar con sus famosas carnes o los arroces conocidos en toda la provincia. \r\n\r\nEn el restaurante Albanta, el placer de lo gastronómico está asegurado pero, además, el lugar es de ensueño. En invierno puedes disfrutar de sus salones con chimeneas y en verano de su terraza donde alargar la sobremesa con su especialidad en cócteles y mojitos. Para una comida o cena especial en Granada, haz tu reserva en Albanta. ¡Triunfarás!",
            "freeTables":0,
            "hour_open":"Comida: de 13:00 a 16:00 (todos los días)\r\nCena: de 19:30 a 23:30 (todos los días)",
            "locale":"37.165077220312,-3.5707499980927",
            "name":"Albanta",
            "phone":"34-637891149",
            "speciality":"Mediterráneo"
         },
         "fields":null
      },
      {
         "_index":"restaurants",
         "_type":"locals",
         "_id":"AU5v1mgKlMNHZash_Veq",
         "_score":0,
         "_source":{
            "Id":"000040610000000000000000",
            "avg_rate":10,
            "description":"En pleno centro de Madrid, próximo a la plaza del Rey, se sitúa este multifacético restaurante. Alvacío Gastronomía es un lugar moderno y original que sabrá entregar el marco ideal para que disfrutes en compañía de tus amigos. Su comedor está emplazado en la cocina donde se elaboran los platos, así podrás tener una relación directa y espontánea con todo el proceso culinario. \r\n\r\nSu carta se especializa en recetas de mercado, y tiene entre sus platos más recomendados la carrillera de ternera y el risotto de boletus edulis y parmesano. Además dispone de menús con una interesante selección de platos.\r\n\r\nSi buscas una salida gastronómica diferente y divertida no dudes en visitarles. Todo el encanto y calidez de su personal te espera para que vivas excelentes momentos.",
            "freeTables":1,
            "locale":"40.421163375734,-3.6967000961304",
            "name":"Alvacío Gastronomía",
            "phone":"34-915225056",
            "speciality":"De mercado"
         },
         "fields":null
       },
       {
          "_index":"restaurants",
          "_type":"locals",
          "_id":"AU5v1mgKlMNHZash_VAA",
          "_score":0,
          "_source":{
             "Id":"000040610000000000002000",
             "avg_rate":10,
             "description":"EXXXXXXXXXXXXcío Gastronomía es un lugar moderno y original que sabrá entregar el marco ideal para que disfrutes en compañía de tus amigos. Su comedor está emplazado en la cocina donde se elaboran los platos, así podrás tener una relación directa y espontánea con todo el proceso culinario. \r\n\r\nSu carta se especializa en recetas de mercado, y tiene entre sus platos más recomendados la carrillera de ternera y el risotto de boletus edulis y parmesano. Además dispone de menús con una interesante selección de platos.\r\n\r\nSi buscas una salida gastronómica diferente y divertida no dudes en visitarles. Todo el encanto y calidez de su personal te espera para que vivas excelentes momentos.",
             "freeTables":2,
             "locale":"40.421163375734,-3.6967000961304",
             "name":"Bar Manolo",
             "phone":"34-915225056",
             "speciality":"De mercado"
          },
          "fields":null
        }
    ];
    return { restaurants };
  }
}
