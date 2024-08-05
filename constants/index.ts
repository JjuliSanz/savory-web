import { MenuItem, MenuType } from "@/types";

export const promociones: MenuItem[] = [
  {
    id: 1,
    imageSrc: "/food/combo-entrada.jpeg",
    title: "Jarrito + 2 Medialunas",
    price: "$2600",
  },
  {
    id: 2,
    imageSrc: "/food/combo-entrada.jpeg",
    title: "Café con Leche + 3 Medialunas",
    price: "$3400",
  },
  {
    id: 3,
    imageSrc: "/food/combo-entrada.jpeg",
    title: "Tostado + Vaso de jugo",
    price: "$7300",
  },
  {
    id: 4,
    imageSrc: "/food/combo-entrada.jpeg",
    title: "Capuccino + 3 Medialunas ",
    price: "$3800",
  },
  {
    id: 5,
    imageSrc: "/food/combo-entrada.jpeg",
    title: "Medialuna grande de jamón y queso + Gaseosa",
    price: "$6800",
  },
  {
    id: 6,
    imageSrc: "/food/combo-entrada.jpeg",
    title: "2 Submarinos o 2 Capuccinos + 1 Porción de torta",
    price: "$12300",
  },
  {
    id: 7,
    imageSrc: "/food/combo-entrada.jpeg",
    title: "2 Cafés con Leche + Canasta de Tostadas ",
    price: "$9000",
  },
  {
    id: 8,
    imageSrc: "/food/combo-entrada.jpeg",
    title: "Café con leche + Muffin a elección",
    price: "$3600",
  },
  {
    id: 9,
    imageSrc: "/food/combo-entrada.jpeg",
    title: "Café con leche + Porción de budín a elección",
    price: "$3800",
  },
];

export const cafeteria: MenuItem[] = [
  {
    id: 1,
    category: "Cafeteria",
    imageSrc: "/capuccino-edit.jpg",
    title: "Café en Pocillo",
    price: "$50",
  },
  {
    id: 2,
    category: "Cafeteria",
    imageSrc: "/capuccino-edit.jpg",
    title: "Café en Jarrito",
    price: "$60",
  },
  {
    id: 3,
    category: "Cafeteria",
    imageSrc: "/capuccino-edit.jpg",
    title: "Cortado en Jarrito",
    price: "$60",
  },
  {
    id: 4,
    category: "Cafeteria",
    imageSrc: "/capuccino-edit.jpg",
    title: "Lágrima en Jarrito",
    price: "$60",
  },
  {
    id: 5,
    category: "Cafeteria",
    imageSrc: "/capuccino-edit.jpg",
    title: "Café con Leche",
    price: "$60",
  },
  {
    id: 6,
    category: "Cafeteria",
    imageSrc: "/capuccino-edit.jpg",
    title: "Café Latte",
    price: "$60",
  },
  {
    id: 7,
    category: "Cafeteria",
    imageSrc: "/capuccino-edit.jpg",
    title: "Café Doble",
    price: "$60",
  },
  {
    id: 8,
    category: "Cafeteria",
    imageSrc: "/capuccino-edit.jpg",
    title: "Lágrima Doble",
    price: "$60",
  },
  {
    id: 9,
    category: "Cafeteria",
    imageSrc: "/capuccino-edit.jpg",
    title: "Capuccino",
    price: "$60",
  },
  { id: 10, imageSrc: "/capuccino-edit.jpg", title: "Submarino", price: "$60" },
  {
    id: 11,
    category: "Cafeteria",
    imageSrc: "/capuccino-edit.jpg",
    title: "Chocolatada",
    price: "$60",
  },
  {
    id: 12,
    category: "Cafeteria",
    imageSrc: "/capuccino-edit.jpg",
    title: "Mate cocido / Té",
    price: "$60",
  },
  {
    id: 13,
    category: "Cafeteria",
    imageSrc: "/capuccino-edit.jpg",
    title: "Té",
    price: "$60",
  },
  {
    id: 14,
    category: "Cafeteria",
    imageSrc: "/capuccino-edit.jpg",
    title: "Mate cocido",
    price: "$60",
  },
];

export const frios: MenuItem[] = [
  {
    id: 1,
    imageSrc: "/milkshake-varios.jpg",
    title: "Cold brew",
    price: "$2800",
  },
  {
    id: 2,
    imageSrc: "/milkshake-varios.jpg",
    title: "Nutella latte",
    ingredients: "Café, nutella y leche cremosa",
    price: "$4100",
  },
  {
    id: 3,
    imageSrc: "/milkshake-varios.jpg",
    title: "Frapuccino",
    ingredients: "Dulce de leche, Oreo y chocotorta",
    price: "$4900",
  },
  {
    id: 4,
    imageSrc: "/milkshake-varios.jpg",
    title: "Licuado con agua",
    ingredients: "Consultar frutas del día.",
    price: "$2900",
  },
  {
    id: 5,
    imageSrc: "/milkshake-varios.jpg",
    title: "Licuado con jugo",
    ingredients: "Consultar frutas del día.",
    price: "$3400",
  },
  {
    id: 6,
    imageSrc: "/milkshake-varios.jpg",
    title: "Licuado con leche",
    ingredients: "Consultar frutas del día.",
    price: "$3200",
  },
  {
    id: 7,
    imageSrc: "/milkshake-varios.jpg",
    title: "Limonada",
    price: "$3800",
  },
  {
    id: 8,
    imageSrc: "/milkshake-varios.jpg",
    title: "Limonada con menta y jengibre ",
    price: "$3800",
  },
  {
    id: 9,
    imageSrc: "/milkshake-varios.jpg",
    title: "Sundae",
    ingredients: "Ensalada de frutas + 3 bochas de helado + crema",
    price: "$6300",
  },
  {
    id: 10,
    imageSrc: "/milkshake-varios.jpg",
    title: "Don pedro",
    ingredients: "Helado de americana (2 bochas) + nueces y whisky",
    price: "$4800",
  },
  {
    id: 11,
    imageSrc: "/milkshake-varios.jpg",
    title: "Jugo de naranja ",
    price: "$2800",
  },
  {
    id: 12,
    imageSrc: "/milkshake-varios.jpg",
    title: "Jugo de naranja durazno",
    price: "$2800",
  },
  {
    id: 13,
    imageSrc: "/milkshake-varios.jpg",
    title: "Milshakes",
    ingredients: "Batido de leche con sabor de helado a elección",
    price: "$3800",
  },
];

export const yogurts: MenuItem[] = [
  {
    id: 1,
    category: "Yogurts",
    imageSrc: "/milkshake-varios.jpg",
    title: "Yogurt Natural",
    ingredients: "Durazno, kiwi, banana y cereales",
    price: "$3800",
  },
  {
    id: 2,
    category: "Yogurts",
    imageSrc: "/milkshake-varios.jpg",
    title: "Yogurt de Frutos",
    ingredients: "Frutos rojos y cereales",
    price: "$4900",
  },
  {
    id: 3,
    category: "Yogurts",
    imageSrc: "/milkshake-varios.jpg",
    title: "Yogurt Maracuya",
    ingredients: "Durazno y cereales",
    price: "$4900",
  },
];

export const tortas_delicias: MenuItem[] = [
  {
    id: 1,
    imageSrc: "/food/chocotorta.jpeg",
    title: "Torta Raffaello",
    ingredients: "Cheescake de coco y chocolate blanco",
    price: "$7000",
  },
  {
    id: 2,
    imageSrc: "/food/chocotorta.jpeg",
    title: "Cheescake con brownie",
    ingredients:
      "Cheescake de Vainilla horneado con base de brownke y salsa de frutos rojos",
    price: "$7000",
  },
  {
    id: 3,
    imageSrc: "/food/chocotorta.jpeg",
    title: "Torta Mantecol",
    ingredients: "Cheescake de mantecol con pedacitos de mantecol",
    price: "$7000",
  },
  {
    id: 4,
    imageSrc: "/food/chocotorta.jpeg",
    title: "Lemon Pie",
    price: "$7000",
  },
  {
    id: 5,
    imageSrc: "/food/chocotorta.jpeg",
    title: "Cheescake de Frutos",
    price: "$7000",
  },
  {
    id: 6,
    imageSrc: "/food/chocotorta.jpeg",
    title: "Cheescake de Frutilla",
    price: "$7000",
  },
  {
    id: 7,
    imageSrc: "/food/chocotorta.jpeg",
    title: "Torta Shot",
    price: "$7000",
  },
  {
    id: 8,
    imageSrc: "/food/chocotorta.jpeg",
    title: "Torta Balcarce",
    ingredients:
      "Pionono, dulce de leche, crema y frutos secos (nueces, almendras, pasas de uva)",
    price: "$7000",
  },
  {
    id: 9,
    imageSrc: "/food/chocotorta.jpeg",
    title: "Torta Oreo",
    price: "$7000",
  },
  {
    id: 10,
    imageSrc: "/food/chocotorta.jpeg",
    title: "Torta Choco Oreo",
    price: "$7000",
  },
  {
    id: 11,
    imageSrc: "/food/chocotorta.jpeg",
    title: "Torta Chocotorta",
    price: "$7000",
  },
  {
    id: 12,
    imageSrc: "/food/chocotorta.jpeg",
    title: "Torta Tiramisú",
    price: "$7000",
  },
  {
    id: 13,
    imageSrc: "/food/chocotorta.jpeg",
    title: "Panqueque con dulce de leche",
    ingredients: "Dos unidades",
    price: "$3700",
  },
  {
    id: 14,
    imageSrc: "/food/chocotorta.jpeg",
    title: "Panqueque con Nutella",
    ingredients: "Dos unidades",
    price: "$4500",
  },
  {
    id: 15,
    imageSrc: "/food/chocotorta.jpeg",
    title: "Panqueque con dulce de leche + bocha de helado",
    ingredients: "Dos unidades + bocha de helado (Sabor a elección)",
    price: "$4600",
  },
  {
    id: 16,
    imageSrc: "/food/chocotorta.jpeg",
    title: "Panqueque con nutella + bocha de helado",
    ingredients: "Dos unidades + bocha de helado (Sabor a elección)",
    price: "$5400",
  },
  {
    id: 17,
    imageSrc: "/food/chocotorta.jpeg",
    title: "Medialunas de manteca",
    price: "$350",
  },
  {
    id: 18,
    imageSrc: "/food/chocotorta.jpeg",
    title: "Muffin de dulce de leche",
    price: "$1300",
  },
  {
    id: 19,
    imageSrc: "/food/chocotorta.jpeg",
    title: "Muffin de frutos rojos",
    price: "$1300",
  },
  {
    id: 19,
    imageSrc: "/food/chocotorta.jpeg",
    title: "Budín marmolado",
    price: "$1500",
  },
  {
    id: 19,
    imageSrc: "/food/chocotorta.jpeg",
    title: "Budín de limón y amapolas",
    price: "$1500",
  },
  {
    id: 19,
    imageSrc: "/food/chocotorta.jpeg",
    title: "Budín de banana y nuez pecan",
    price: "$1500",
  },
  {
    id: 19,
    imageSrc: "/food/chocotorta.jpeg",
    title: "Alfajor cookie de pistacho",
    price: "$3800",
  },
  {
    id: 19,
    imageSrc: "/food/chocotorta.jpeg",
    title: "Alfajor cookie de mantecol",
    price: "$3800",
  },
];

export const salados_clasicos: MenuItem[] = [
  {
    id: 1,
    category: "Salados_Clasicos",
    imageSrc: "/milkshake-varios.jpg",
    title: "Tostado de jamón y queso ",
    ingredients: "En pan de miga",
    price: "$4800",
  },
  {
    id: 2,
    category: "Salados_Clasicos",
    imageSrc: "/milkshake-varios.jpg",
    title: "Medio tostado ",
    ingredients: "En pan de miga",
    price: "$3200",
  },
  {
    id: 3,
    category: "Salados_Clasicos",
    imageSrc: "/milkshake-varios.jpg",
    title: "Medialuna grande de jamon y queso",
    price: "$5800",
  },
  {
    id: 3,
    category: "Salados_Clasicos",
    imageSrc: "/milkshake-varios.jpg",
    title: "Canasta de tostadas ",
    ingredients:
      "Tostadas y grisines con queso crema, mermelada y dulce de leche",
    price: "$4400",
  },
  {
    id: 3,
    category: "Salados_Clasicos",
    imageSrc: "/milkshake-varios.jpg",
    title: "Tostado frances",
    ingredients:
      "Pan de miga, jamón, queso dambo, queso cheddar. ( Embebido en huevo )",
    price: "$6200",
  },
];

export const tostones: MenuItem[] = [
  {
    id: 1,
    category: "Tostones",
    imageSrc: "/tostones-jugos.webp",
    title: "Avocado Toast",
    ingredients:
      "Huevo revuelto, queso tipo finlandia, palta, tomate y panceta crispy",
    price: "$6400",
  },
  {
    id: 2,
    category: "Tostones",
    imageSrc: "/tostones-jugos.webp",
    title: "Crustón",
    ingredients: "Huevo revuelto, rúcula y queso parmesano",
    price: "$5700",
  },
  {
    id: 3,
    category: "Tostones",
    imageSrc: "/tostones-jugos.webp",
    title: "Crustón Cru",
    ingredients: "Huevo revuelto, rúcula, queso parmesano y jamón crudo",
    price: "$6100",
  },
  {
    id: 3,
    category: "Tostones",
    imageSrc: "/tostones-jugos.webp",
    title: "Salmón toast",
    ingredients: "Queso tipo finlandia, huevo revuelto y salmón ahumado",
    price: "$9500",
  },
];

export const sandwiches: MenuItem[] = [
  {
    id: 1,
    category: "Sandwiches",
    imageSrc: "/food/sandwiches/sandwich-lomito.jpg",
    title: "Sandwich Lomito",
    ingredients:
      "Fiambre de lomito, lechuga, tomates, queso y huevo revuelto en pan frances",
    price: "$7700",
  },
  {
    id: 2,
    category: "Sandwiches",
    imageSrc: "/food/sandwiches/sandwich-pollo.jpeg",
    title: "Pollo al Verdeo",
    ingredients: "Pollo al verdeo en pan frances",
    price: "$7900",
  },
  {
    id: 3,
    category: "Sandwiches",
    imageSrc: "/food/sandwiches/sandwich-bondiola.jpg",
    title: "Sandwich de Atún",
    ingredients: "Atún, cebolla morada, lechuga, tomate, huevo y salsa de queso ciboulette en pan francés",
    price: "$7200",
  },
  {
    id: 3,
    category: "Sandwiches",
    imageSrc: "/food/sandwiches/sandwich-bondiola.jpg",
    title: "Sandwich Bondiola",
    ingredients: "Fiambre de bondiola, tomates confitados, queso azul, rúcula y aceite de oliva en pan ciabatta",
    price: "$7800",
  },
  {
    id: 3,
    category: "Sandwiches",
    imageSrc: "/food/sandwiches/focaccia-salame.jpeg",
    title: "Focaccia de salame y queso gouda",
    price: "$6500",
  },
  {
    id: 3,
    category: "Sandwiches",
    imageSrc: "/food/sandwiches/focaccia-mortadela.jpeg",
    title: "Focaccia de mortadela y queso fontina",
    price: "$6500",
  },
  {
    id: 3,
    category: "Sandwiches",
    imageSrc: "/food/sandwiches/focaccia-queso.jpeg",
    title: "Focaccia de queso tybo, mortadela y pesto",
    price: "$6500",
  },
  {
    id: 3,
    category: "Sandwiches",
    imageSrc: "/food/sandwiches/canoa.jpeg",
    title: "Canoa en pan francés",
    ingredients: "Pollo a los 4 quesos (con pesto)",
    price: "$7900",
  },
  {
    id: 3,
    category: "Sandwiches",
    imageSrc: "/food/sandwiches/chipa-de-chedar.jpeg",
    title: "Chipa cheddar",
    ingredients: "Queso cheddar, panceta y huevo revuelto",
    price: "$6700",
  },
  {
    id: 3,
    category: "Sandwiches",
    imageSrc: "/food/sandwiches/pan-de-chipa.jpeg",
    title: "Chipa jamón y queso",
    ingredients: "Lechuga, tomate, jamón y queso con salsa de mayonesa",
    price: "$6300",
  },
  {
    id: 3,
    category: "Sandwiches",
    imageSrc: "/food/sandwiches/pan-de-chipa.jpeg",
    title: "Chipa jamón crudo",
    ingredients: "Rúcula, jamón crudo, queso, palta y cebolla caramelizada",
    price: "$7200",
  },
];

export const ensaladas: MenuItem[] = [
  {
    id: 1,
    category: "Ensaladas",
    imageSrc: "/ensalada.jpg",
    title: "Caesar",
    ingredients:
      "Lechuga, queso parmesano, pollo rebozado en cereal, crustones y salsa caesar",
    price: "$6200",
  },
  {
    id: 2,
    category: "Ensaladas",
    imageSrc: "/ensalada.jpg",
    title: "Sávory",
    ingredients: "Arroz, huevo, jamón, queso cremoso, kanikama, zanahoría y choclo",
    price: "$6600",
  },
];

export const postres_helados: MenuItem[] = [
  {
    id: 1,
    category: "Postres_Helados",
    imageSrc: "/food/heladeria/barritas.jpeg",
    title: "Paletas Bañadas en chocolate negro",
    ingredients:
      "Pistacho, Chocotorta, Kinder, Menta granizada, Chocolate Block",
    price: "$3600",
  },
  {
    id: 2,
    category: "Postres_Helados",
    imageSrc: "/food/heladeria/cubatones.jpeg",
    title: "Cubanotes bañados en chocolate negro",
    ingredients: "Dulce de leche, vainilla, frutilla a la crema, sambayón, bombon sávory",
    price: "$3200",
  },
  {
    id: 2,
    category: "Postres_Helados",
    imageSrc: "/food/heladeria/cubatones-blanco.jpeg",
    title: "Cubanotes bañados en chocolate blanco",
    ingredients: "Mascarpone, chocolate suizo, kinder",
    price: "$3400",
  },
  {
    id: 2,
    category: "Postres_Helados",
    imageSrc: "/food/heladeria/cubatones-bombon.jpeg",
    title: "Cubanotes bañados en chocolate negro con Bombones",
    ingredients: "americana",
    price: "$3400",
  },
  {
    id: 2,
    category: "Postres_Helados",
    imageSrc: "/food/heladeria/alfajores.jpeg",
    title: "Alfajor Bombón sávory",
    price: "$2800",
  },
  {
    id: 2,
    category: "Postres_Helados",
    imageSrc: "/food/heladeria/alfajores.jpeg",
    title: "Alfajor Chocolate",
    price: "$2800",
  },
  {
    id: 2,
    category: "Postres_Helados",
    imageSrc: "/food/heladeria/alfajores.jpeg",
    title: "Alfajor Americana",
    price: "$2800",
  },
  {
    id: 2,
    category: "Postres_Helados",
    imageSrc: "/food/heladeria/alfajores.jpeg",
    title: "Alfajor Dulce de leche",
    price: "$2800",
  },
  {
    id: 2,
    category: "Postres_Helados",
    imageSrc: "/food/heladeria/alfajores-cookies.jpeg",
    title: "Alfajor cookie de pistacho",
    price: "$3800",
  },
  {
    id: 2,
    category: "Postres_Helados",
    imageSrc: "/food/heladeria/alfajores-cookies.jpeg",
    title: "Alfajor cookie de mantecol ",
    price: "$3800",
  },
  {
    id: 2,
    category: "Postres_Helados",
    imageSrc: "/food/heladeria/bombones.jpeg",
    title: "Bombon Americana",
    ingredients: "Rellenos de helado con corazón de dulce de leche repostero y bañado en chocolate negro",
    price: "$2700",
  },
  {
    id: 2,
    category: "Postres_Helados",
    imageSrc: "/food/heladeria/bombones.jpeg",
    title: "Bombon Chocolate",
    ingredients: "Rellenos de helado con corazón de dulce de leche repostero y bañado en chocolate negro",
    price: "$2700",
  },
  {
    id: 2,
    category: "Postres_Helados",
    imageSrc: "/food/heladeria/bombones.jpeg",
    title: "Bombon Dulce de leche",
    ingredients: "Rellenos de helado con corazón de dulce de leche repostero y bañado en chocolate negro",
    price: "$2700",
  },
];

export const heladeria: MenuItem[] = [
  {
    id: 1,
    category: "Heladeria",
    imageSrc: "/food/heladeria/pote.jpeg",
    title: "Almendrado",
    price: "$6400",
  },
  {
    id: 2,
    category: "Heladeria",
    imageSrc: "/food/heladeria/pote.jpeg",
    title: "Americana",
    price: "$5700",
  },
  {
    id: 3,
    category: "Heladeria",
    imageSrc: "/food/heladeria/pote.jpeg",
    title: "Banana",
    price: "$6100",
  },
  {
    id: 3,
    category: "Heladeria",
    imageSrc: "/food/heladeria/pote.jpeg",
    title: "Banana Split",
    price: "$9500",
  },
  {
    id: 2,
    category: "Heladeria",
    imageSrc: "/food/heladeria/pote.jpeg",
    title: "Bananita Dolca",
    price: "$5700",
  },
  {
    id: 3,
    category: "Heladeria",
    imageSrc: "/food/heladeria/pote.jpeg",
    title: "Bombón Sávory",
    ingredients: "Crema de avellanas con un veteado de chocolate",
    price: "$6100",
  },
  {
    id: 3,
    category: "Heladeria",
    imageSrc: "/food/heladeria/pote.jpeg",
    title: "Cadbury de frutilla",
    price: "$9500",
  },
  {
    id: 3,
    category: "Heladeria",
    imageSrc: "/food/heladeria/pote.jpeg",
    title: "Cereza a la Pana",
    price: "$9500",
  },
  {
    id: 3,
    category: "Heladeria",
    imageSrc: "/food/heladeria/pote.jpeg",
    title: "Crema Rusa",
    price: "$9500",
  },
  {
    id: 3,
    category: "Heladeria",
    imageSrc: "/food/heladeria/pote.jpeg",
    title: "Flan con Dulce de Leche",
    price: "$9500",
  },
  {
    id: 3,
    category: "Heladeria",
    imageSrc: "/food/heladeria/pote.jpeg",
    title: "Frutilla a la crema",
    price: "$9500",
  },
  {
    id: 3,
    category: "Heladeria",
    imageSrc: "/food/heladeria/pote.jpeg",
    title: "Frutos del Bosque",
    price: "$9500",
  },
  {
    id: 3,
    category: "Heladeria",
    imageSrc: "/food/heladeria/pote.jpeg",
    title: "Granizado",
    price: "$9500",
  },
  {
    id: 3,
    category: "Heladeria",
    imageSrc: "/food/heladeria/pote.jpeg",
    title: "Huevo Kinder",
    price: "$9500",
  },
  {
    id: 3,
    category: "Heladeria",
    imageSrc: "/food/heladeria/pote.jpeg",
    title: "Kinotos al Whisky",
    price: "$9500",
  },
  {
    id: 3,
    category: "Heladeria",
    imageSrc: "/food/heladeria/pote.jpeg",
    title: "Mousse de limón",
    price: "$9500",
  },
  {
    id: 3,
    category: "Heladeria",
    imageSrc: "/food/heladeria/pote.jpeg",
    title: "Mousse de Maracuyá",
    price: "$9500",
  },
  {
    id: 3,
    category: "Heladeria",
    imageSrc: "/food/heladeria/pote.jpeg",
    title: "Mascarpone con Frutos",
    ingredients: "Queso mascarpone con salsa de frutos rojos",
    price: "$9500",
  },
  {
    id: 3,
    category: "Heladeria",
    imageSrc: "/food/heladeria/pote.jpeg",
    title: "Mantecol",
    price: "$9500",
  },
  {
    id: 3,
    category: "Heladeria",
    imageSrc: "/food/heladeria/pote.jpeg",
    title: "Marroc",
    price: "$9500",
  },
  {
    id: 3,
    category: "Heladeria",
    imageSrc: "/food/heladeria/pote.jpeg",
    title: "Menta Granizada",
    price: "$9500",
  },
  {
    id: 3,
    category: "Heladeria",
    imageSrc: "/food/heladeria/pote.jpeg",
    title: "Pistacho",
    price: "$9500",
  },
  {
    id: 3,
    category: "Heladeria",
    imageSrc: "/food/heladeria/pote.jpeg",
    title: "Sambayón",
    price: "$9500",
  },
  {
    id: 3,
    category: "Heladeria",
    imageSrc: "/food/heladeria/pote.jpeg",
    title: "Sambayón con almendras",
    price: "$9500",
  },
  {
    id: 3,
    category: "Heladeria",
    imageSrc: "/food/heladeria/pote.jpeg",
    title: "Tiramisú",
    price: "$9500",
  },
  {
    id: 3,
    category: "Heladeria",
    imageSrc: "/food/heladeria/pote.jpeg",
    title: "Tramontana",
    price: "$9500",
  },
  {
    id: 3,
    category: "Heladeria",
    imageSrc: "/food/heladeria/pote.jpeg",
    title: "Vainilla",
    price: "$9500",
  },
  {
    id: 3,
    category: "Heladeria",
    imageSrc: "/food/heladeria/pote.jpeg",
    title: "Vainilla al Oreo",
    price: "$9500",
  },
  {
    id: 3,
    category: "Heladeria",
    imageSrc: "/food/heladeria/pote.jpeg",
    title: "Chocolate clásico",
    price: "$9500",
  },
  {
    id: 3,
    category: "Heladeria",
    imageSrc: "/food/heladeria/pote.jpeg",
    title: "Chocolate con pasas al Rhum",
    price: "$9500",
  },
  {
    id: 3,
    category: "Heladeria",
    imageSrc: "/food/heladeria/pote.jpeg",
    title: "Chocolate con almendras",
    price: "$9500",
  },
  {
    id: 3,
    category: "Heladeria",
    imageSrc: "/food/heladeria/pote.jpeg",
    title: "Chocolate block",
    price: "$9500",
  },
  {
    id: 3,
    category: "Heladeria",
    imageSrc: "/food/heladeria/pote.jpeg",
    title: "Chocolate Suizo",
    ingredients: "Chocolate negro al rum con dulce de leche repostero",
    price: "$9500",
  },
  {
    id: 3,
    category: "Heladeria",
    imageSrc: "/food/heladeria/pote.jpeg",
    title: "Chocolate Sávory",
    ingredients: "Chocolate negro con dulce de leche repostero y pedacitos de chocolate blanco",
    price: "$9500",
  },
  {
    id: 3,
    category: "Heladeria",
    imageSrc: "/food/heladeria/pote.jpeg",
    title: "Chocolate amargo",
    price: "$9500",
  },
  {
    id: 3,
    category: "Heladeria",
    imageSrc: "/food/heladeria/pote.jpeg",
    title: "Chocolate blanco",
    price: "$9500",
  },
  {
    id: 3,
    category: "Heladeria",
    imageSrc: "/food/heladeria/pote.jpeg",
    title: "Chocolate blanco tentación",
    ingredients: "Chocolate blanco con dulce de leche repostero y bombones rellenos",
    price: "$9500",
  },
  {
    id: 3,
    category: "Heladeria",
    imageSrc: "/food/heladeria/pote.jpeg",
    title: "Raffaello",
    ingredients: "Chocolate blanco con veteado de coco y cereales",
    price: "$9500",
  },
  {
    id: 3,
    category: "Heladeria",
    imageSrc: "/food/heladeria/pote.jpeg",
    title: "Ferrero Rocher",
    price: "$9500",
  },
  {
    id: 3,
    category: "Heladeria",
    imageSrc: "/food/heladeria/pote.jpeg",
    title: "Dulce de leche clásico",
    price: "$9500",
  },
  {
    id: 3,
    category: "Heladeria",
    imageSrc: "/food/heladeria/pote.jpeg",
    title: "Dulce de leche",
    price: "$9500",
  },
  {
    id: 3,
    category: "Heladeria",
    imageSrc: "/food/heladeria/pote.jpeg",
    title: "Dulce de leche Súper",
    ingredients: "Dulce de leche repostero y bombones rellenos de dulce de leche",
    price: "$9500",
  },
  {
    id: 3,
    category: "Heladeria",
    imageSrc: "/food/heladeria/pote.jpeg",
    title: "Dulce de leche con Brownie",
    price: "$9500",
  },
  {
    id: 3,
    category: "Heladeria",
    imageSrc: "/food/heladeria/pote.jpeg",
    title: "Dulce de leche al Oreo",
    price: "$9500",
  },
  {
    id: 3,
    category: "Heladeria",
    imageSrc: "/food/heladeria/pote.jpeg",
    title: "Dulce de leche granizado",
    price: "$9500",
  },
  {
    id: 3,
    category: "Heladeria",
    imageSrc: "/food/heladeria/pote.jpeg",
    title: "Dulce de leche con Nuez",
    price: "$9500",
  },
  {
    id: 3,
    category: "Heladeria",
    imageSrc: "/food/heladeria/pote.jpeg",
    title: "Chocotorta",
    price: "$9500",
  },
  {
    id: 3,
    category: "Heladeria",
    imageSrc: "/food/heladeria/pote.jpeg",
    title: "Frutilla al Agua",
    price: "$9500",
  },
  {
    id: 3,
    category: "Heladeria",
    imageSrc: "/food/heladeria/pote.jpeg",
    title: "Limón",
    price: "$9500",
  },
  {
    id: 3,
    category: "Heladeria",
    imageSrc: "/food/heladeria/pote.jpeg",
    title: "Ananá",
    price: "$9500",
  },
  {
    id: 3,
    category: "Heladeria",
    imageSrc: "/food/heladeria/pote.jpeg",
    title: "Durazno",
    price: "$9500",
  },
  {
    id: 3,
    category: "Heladeria",
    imageSrc: "/food/heladeria/pote.jpeg",
    title: "Frambueza",
    price: "$9500",
  },
  {
    id: 3,
    category: "Heladeria",
    imageSrc: "/food/heladeria/pote.jpeg",
    title: "Limón Siciliano",
    ingredients: "Limón al agua con salsa de frutos rojos",
    price: "$9500",
  },
  {
    id: 3,
    category: "Heladeria",
    imageSrc: "/food/heladeria/pote.jpeg",
    title: "Pera",
    price: "$9500",
  },
];

