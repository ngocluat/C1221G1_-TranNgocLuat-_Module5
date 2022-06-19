export  class RentTypeService {
  id: number;
  name :string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
}

export const rentTypeList=[
  {
    "id": 1,
    "name": "Year"
  },
  {
    "id": 2,
    "name": "Month"
  },
  {
    "id": 3,
    "name": "Day"
  },
  {
    "id": 4,
    "name": "House"
  }
]
