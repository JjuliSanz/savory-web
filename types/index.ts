export type MenuItem = {
  id: number;
  category?: string;
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

export type MenuTab = {
  title: string;
  value: string;
}