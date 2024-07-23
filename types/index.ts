export type MenuItem = {
  id: number;
  imageSrc: string;
  title: string;
  ingredients?: string;
  price: string;
};

export type MenuType = {
  title: string;
  value: string;
  data: MenuItem[];
};
