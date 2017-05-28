export class Restaurant {
  _index: string;
  _type: string;
  _id: string;
  _score: number;
  _source: {
     Id: string,
     avg_rate: number,
     description: string,
     freeTables: number,
     hour_open: string,
     locale: string,
     name: string,
     phone: string,
     speciality: string
  };
  fields: null;
}
