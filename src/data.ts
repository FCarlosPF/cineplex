export const menu = [
  {
    id: 1,
    title: "Menú",
    listItems: [
      {
        id: 1,
        title: "Nosotros",
        url: "/",
        icon: "home.svg",
      }
    ],
  },
  {
    id: 2,
    title: "BSC",
    listItems: [
      {
        id: 1,
        title: "Finanzas",
        url: "/finanzas",
        icon: "user.svg",
      },
      {
        id: 2,
        title: "Clientes",
        url: "/clientes",
        icon: "product.svg",
      },
      {
        id: 3,
        title: "Procesos Internos",
        url: "/procesos",
        icon: "order.svg",
      },
      {
        id: 3,
        title: "Aprendizaje y Conocimiento",
        url: "/aprendizaje",
        icon: "order.svg",
      }
    ],
  },
];

export const topDealUsers = [
  {
    id: 1,
    img: "https://www.pharmaceutical-technology.com/wp-content/uploads/sites/24/2019/07/Image-1-Nexus-Pharmaceuticals.jpg",
    username: "Nexus Film Corp",
    amount: "81.93",
  },
  {
    id: 2,
    img: "https://www.confiep.org.pe/wp-content/uploads/2017/12/C21092015-5.jpg",
    username: "Rafael Dasso Montero",
    email: "linnie@gmail.com",
    amount: "6.00",
  },
  {
    id: 3,
    img: "https://upload.wikimedia.org/wikipedia/commons/8/88/Alejandro_Ponce.jpg",
    username: "Alejandro Ponce Pinto",
    amount: "2.20",
  },
  {
    id: 4,
    img: "https://i0.wp.com/devir.mx/wp-content/uploads/2016/08/Logo-Otros-2.jpg?ssl=1",
    username: "Otros",
    amount: "9.87",
  }
];

export const chartBoxIngreso = {
  color: "#8882d8",
  icon: "/userIcon.svg",
  title: "Total Ingresos  ",
  number: "249 M",
  dataKey: "monto",
  percentage: 386.0,
  chartData: [
    { name: "Dic 22", monto: 346 },
    { name: "Dic 21", monto: 71 },
    { name: "Dic 20", monto: 90 },
    { name: "Dic 19", monto: 500 },
    { name: "Dic 18", monto: 432 }
  ],
};

export const chartBoxUtilidadOperativa = {
  color: "skyblue",
  icon: "/productIcon.svg",
  title: "Utilidad Operativa",
  number: "66.499 M",
  dataKey: "utilidad",
  percentage: 21,
  chartData: [
    { name: "Dic 22", utilidad: 66 },
    { name: "Dic 21", utilidad: 53 },
    { name: "Dic 20", utilidad: 54 },
    { name: "Dic 19", utilidad: 136 },
    { name: "Dic 18", utilidad: 105 }
  ],
};
export const chartBoxResultadoNeto = {
  color: "teal",
  icon: "/revenueIcon.svg",
  title: "Resultado Neto",
  number: "12.617 M",
  dataKey: "neto",
  percentage: 20,
  chartData: [
    { name: "Dic 22", neto: 12 },
    { name: "Dic 21", neto: 47 },
    { name: "Dic 20", neto: 65 },
    { name: "Dic 19", neto: 56 },
    { name: "Dic 18", neto: 58 }
  ],
};
export const chartBoxGastosFinancieros = {
  color: "gold",
  icon: "/conversionIcon.svg",
  title: "Gastos Financeros",
  number: "13.303 M",
  dataKey: "ratio",
  percentage: -12,
  chartData: [
    { name: "Dic 22", ratio: 13 },
    { name: "Dic 21", ratio: 18 },
    { name: "Dic 20", ratio: 18 },
    { name: "Dic 19", ratio: 18 },
    { name: "Dic 18", ratio: 16 }
  ],
};

export const barChartBoxDulceria = {
  title: "Dulcería (2018-2022)",
  color: "skyblue",
  dataKey: "dulcería",
  chartData: [
    {
      name: "2018",
      dulcería: 172,
    },
    {
      name: "2019",
      dulcería: 203,
    },
    {
      name: "2020",
      dulcería: 41,
    },
    {
      name: "2021",
      dulcería: 24,
    },
    {
      name: "2022",
      dulcería: 163,
    }
  ]
};

export const barChartBoxPublicidad = {
  title: "Publicidad (2018-2022)",
  color: "pink",
  dataKey: "publicidad",
  chartData: [
    {
      name: "2018",
      publicidad: 33,
    },
    {
      name: "2019",
      publicidad: 44,
    },
    {
      name: "2020",
      publicidad: 6,
    },
    {
      name: "2021",
      publicidad: 13,
    },
    {
      name: "2022",
      publicidad: 29,
    }
  ]
};

export const barChartBoxPantallas = {
  title: "N° Pantallas (2018-2022)",
  color: "brown",
  dataKey: "pantallas",
  chartData: [
    {
      name: "2018",
      pantallas: 269,
    },
    {
      name: "2019",
      pantallas: 295,
    },
    {
      name: "2020",
      pantallas: 296,
    },
    {
      name: "2021",
      pantallas: 306,
    },
    {
      name: "2022",
      pantallas: 314,
    }
  ]
};



export const barChartBoxTaquilla = {
  title: "Taquilla (2018-2022)",
  color: "#FF8042",
  dataKey: "taquilla",
  chartData: [
    {
      name: "2018",
      taquilla: 227,
    },
    {
      name: "2019",
      taquilla: 254,
    },
    {
      name: "2020",
      taquilla: 44,
    },
    {
      name: "2021",
      taquilla: 35,
    },
    {
      name: "2022",
      taquilla: 155,
    }
  ],
};

export const userRows = [
  {
    id: 1,
    img: "https://images.pexels.com/photos/8405873/pexels-photo-8405873.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    lastName: "Hubbard",
    firstName: "Eula",
    email: "kewez@@gmail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
    verified: true,
  },
  {
    id: 2,
    img: "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Manning",
    firstName: "Stella",
    email: "comhuhmit@gmail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
    verified: true,
  },
  {
    id: 3,
    img: "https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Greer",
    firstName: "Mary",
    email: "ujudokon@hottmail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
    verified: true,
  },
  {
    id: 4,
    img: "https://images.pexels.com/photos/871495/pexels-photo-871495.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Williamson",
    firstName: "Mildred",
    email: "tinhavabe@gmail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
    verified: true,
  },
  {
    id: 5,
    img: "https://images.pexels.com/photos/1758144/pexels-photo-1758144.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Gross",
    firstName: "Jose",
    email: "gobtagbes@yahoo.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
  },
  {
    id: 6,
    img: "https://images.pexels.com/photos/769745/pexels-photo-769745.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Sharp",
    firstName: "Jeremy",
    email: "vulca.eder@mail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
    verified: true,
  },
  {
    id: 7,
    img: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Lowe",
    firstName: "Christina",
    email: "reso.bilic@gmail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
  },
  {
    id: 8,
    img: "https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Dean",
    firstName: "Garrett",
    email: "codaic@mail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
    verified: true,
  },
  {
    id: 9,
    img: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Parsons",
    firstName: "Leah",
    email: "uzozor@gmail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
  },
  {
    id: 10,
    img: "https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Reid",
    firstName: "Elnora",
    email: "tuhkabapu@gmail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
    verified: true,
  },
  {
    id: 11,
    img: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Dunn",
    firstName: "Gertrude",
    email: "gibo@gmail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
    verified: true,
  },
  {
    id: 12,
    img: "https://images.pexels.com/photos/774095/pexels-photo-774095.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Williams",
    firstName: "Mark",
    email: "tic.harvey@hotmail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
  },
  {
    id: 13,
    img: "https://images.pexels.com/photos/761977/pexels-photo-761977.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Cruz",
    firstName: "Charlotte",
    email: "ceuc@gmail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
  },
  {
    id: 14,
    img: "https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Harper",
    firstName: "Sara",
    email: "bafuv@hotmail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
  },
  {
    id: 15,
    img: "https://images.pexels.com/photos/8405873/pexels-photo-8405873.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    lastName: "Griffin",
    firstName: "Eric",
    email: "ubi@gmail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
  },
];

export const products = [
  {
    id: 1,
    img: "https://store.sony.com.au/on/demandware.static/-/Sites-sony-master-catalog/default/dw1b537bbb/images/PLAYSTATION5W/PLAYSTATION5W.png",
    title: "Playstation 5 Digital Edition",
    color: "white",
    producer: "Sony",
    price: "$250.99",
    createdAt: "01.02.2023",
    inStock: true,
  },
  {
    id: 2,
    img: "https://www.pngmart.com/files/6/Dell-Laptop-PNG-Image.png",
    title: "Dell Laptop KR211822",
    color: "black",
    producer: "Dell",
    price: "$499.99",
    createdAt: "01.02.2023",
    inStock: true,
  },
  {
    id: 3,
    img: "http://images.samsung.com/is/image/samsung/uk-led-tv-hg40ed670ck-hg40ed670ckxxu-001-front",
    title: "Samsung TV 4K SmartTV",
    color: "gray",
    producer: "Samsung",
    price: "$999.49",
    createdAt: "01.02.2023",
    inStock: true,
  },
  {
    id: 4,
    img: "https://raylo.imgix.net/iphone-14-blue.png",
    title: "Apple Iphone 14 Pro Max",
    color: "white",
    producer: "Apple",
    price: "$799.49",
    createdAt: "01.02.2023",
    inStock: true,
  },
  {
    id: 5,
    img: "https://www.signify.com/b-dam/signify/en-aa/about/news/2020/20200903-movie-night-essentials-popcorn-ice-cream-and-the-new-philips-hue-play-gradient-lightstrip/packaging-lighstrip.png",
    title: "Philips Hue Play Gradient",
    color: "rainbow",
    producer: "Philips",
    price: "$39.99",
    createdAt: "01.02.2023",
  },
  {
    id: 6,
    img: "https://www.smartworld.it/wp-content/uploads/2019/09/High_Resolution_PNG-MX-Master-3-LEFT-GRAPHITE.png",
    title: "Logitech MX Master 3",
    color: "black",
    producer: "Logitech",
    price: "$59.49",
    createdAt: "01.02.2023",
    inStock: true,
  },
  {
    id: 7,
    img: "https://www.pngarts.com/files/7/Podcast-Mic-PNG-Picture.png",
    title: "Rode Podcast Microphone",
    color: "gray",
    producer: "Rode",
    price: "$119.49",
    createdAt: "01.02.2023",
  },
  {
    id: 8,
    img: "https://5.imimg.com/data5/SW/VM/MY-5774620/toshiba-split-ac-2-ton-3-star-rated-ras-24s3ks-500x500.png",
    title: "Toshiba Split AC 2",
    color: "white",
    producer: "Toshiba",
    price: "$899.99",
    createdAt: "01.02.2023",
    inStock: true,
  },
  {
    id: 9,
    img: "https://img.productz.com/review_image/102489/preview_sony-kdl-50w800b-50-inch-hdtv-review-superb-picture-102489.png",
    title: "Sony Bravia KDL-47W805A",
    color: "black",
    producer: "Sony",
    price: "$970.49",
    createdAt: "01.02.2023",
  },
  {
    id: 10,
    img: "https://venturebeat.com/wp-content/uploads/2015/07/As_AO1-131_gray_nonglare_win10_03.png?fit=1338%2C1055&strip=all",
    title: "Acer Laptop 16 KL-4804",
    color: "black",
    producer: "Acer",
    price: "$599.99",
    createdAt: "01.02.2023",
    inStock: true,
  },
];



export const singleUser = {
  id: 1,
  title: "John Doe",
  img: "https://images.pexels.com/photos/17397364/pexels-photo-17397364.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
  info: {
    username: "Johndoe99",
    fullname: "John Doe",
    email: "johndoe@gmail.com",
    phone: "123 456 789",
    status: "verified",
  },
  chart: {
    dataKeys: [
      { name: "visits", color: "#82ca9d" },
      { name: "clicks", color: "#8884d8" },
    ],
    data: [
      {
        name: "Sun",
        visits: 4000,
        clicks: 2400,
      },
      {
        name: "Mon",
        visits: 3000,
        clicks: 1398,
      },
      {
        name: "Tue",
        visits: 2000,
        clicks: 3800,
      },
      {
        name: "Wed",
        visits: 2780,
        clicks: 3908,
      },
      {
        name: "Thu",
        visits: 1890,
        clicks: 4800,
      },
      {
        name: "Fri",
        visits: 2390,
        clicks: 3800,
      },
      {
        name: "Sat",
        visits: 3490,
        clicks: 4300,
      },
    ],
  },
  activities: [
    {
      text: "John Doe purchased Playstation 5 Digital Edition",
      time: "3 day ago",
    },
    {
      text: "John Doe added 3 items into their wishlist",
      time: "1 week ago",
    },
    {
      text: "John Doe purchased Sony Bravia KD-32w800",
      time: "2 weeks ago",
    },
    {
      text: "John Doe reviewed a product",
      time: "1 month ago",
    },
    {
      text: "John Doe added 1 items into their wishlist",
      time: "1 month ago",
    },
    {
      text: "John Doe reviewed a product",
      time: "2 months ago",
    },
  ],
};
export const singleProduct = {
  id: 1,
  title: "Playstation 5 Digital Edition",
  img: "https://store.sony.com.au/on/demandware.static/-/Sites-sony-master-catalog/default/dw1b537bbb/images/PLAYSTATION5W/PLAYSTATION5W.png",
  info: {
    productId: "Ps5SDF1156d",
    color: "white",
    price: "$250.99",
    producer: "Sony",
    export: "Japan",
  },
  chart: {
    dataKeys: [
      { name: "visits", color: "#82ca9d" },
      { name: "orders", color: "#8884d8" },
    ],
    data: [
      {
        name: "Sun",
        visits: 4000,
        orders: 2400,
      },
      {
        name: "Mon",
        visits: 3000,
        orders: 1398,
      },
      {
        name: "Tue",
        visits: 2000,
        orders: 3800,
      },
      {
        name: "Wed",
        visits: 2780,
        orders: 3908,
      },
      {
        name: "Thu",
        visits: 1890,
        orders: 4800,
      },
      {
        name: "Fri",
        visits: 2390,
        orders: 3800,
      },
      {
        name: "Sat",
        visits: 3490,
        orders: 4300,
      },
    ],
  },
  activities: [
    {
      text: "John Doe purchased Playstation 5 Digital Edition",
      time: "3 day ago",
    },
    {
      text: "Jane Doe added Playstation 5 Digital Edition into their wishlist",
      time: "1 week ago",
    },
    {
      text: "Mike Doe purchased Playstation 5 Digital Edition",
      time: "2 weeks ago",
    },
    {
      text: "Anna Doe reviewed the product",
      time: "1 month ago",
    },
    {
      text: "Michael Doe added Playstation 5 Digital Edition into their wishlist",
      time: "1 month ago",
    },
    {
      text: "Helen Doe reviewed the product",
      time: "2 months ago",
    },
  ],
};
