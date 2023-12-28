export interface IFaculty {
  id: number;
  name: string;
  short_name: string;
  inactive: boolean;
}

export interface IEquipment {
  id: number;
  name: string;
}

export interface IPlacesFree {
  id: number;
  address: string;
  name: string;
  faculty: {
    id: number;
    short_name: string;
  };
  size: number;
  equipments: [
    {
      equipment: {
        id: number;
        name: string;
      };
      amount: number;
    }
  ];
}

export interface IEquipmentProps {
  equipments: [
    {
      equipment: {
        id: number;
        name: string;
      };
      amount: number;
    }
  ];
}

export interface IPlacesFreeProps {
  number: string;
  faculty?: {
    id: number;
    short_name: string;
  };
  size: number;
  equipments: [
    {
      equipment: {
        id: number;
        name: string;
      };
      amount: number;
    }
  ];
}
