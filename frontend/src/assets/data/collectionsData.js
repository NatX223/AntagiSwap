import thumb1 from "assets/images/nft/Image.png";
import thumb2 from "assets/images/nft/Image-1.png";
import thumb3 from "assets/images/nft/Image-2.png";
import thumb4 from "assets/images/nft/Image-3.png";
import thumb5 from "assets/images/nft/Image-4.png";
import thumb6 from "assets/images/nft/Image-5.png";
import thumb7 from "assets/images/nft/Image-6.png";
import thumb8 from "assets/images/nft/Image-7.png";
import thumb9 from "assets/images/nft/Image-8.png";
import thumb10 from "assets/images/nft/Image-9.png";
import thumb11 from "assets/images/nft/Image-10.png";
import thumb12 from "assets/images/nft/Image-11.png";

export const products = [
  {
    thumb: "https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/in/wp-content/uploads/2022/03/monkey-g412399084_1280.jpg",
    title: "Petcat #256",
    price: "0.25 ETH",
    likes: "124",
  },
  {
    thumb: thumb2,
    title: "Petcat #257",
    price: "0.35 ETH",
    likes: "123",
  },
  {
    thumb: thumb3,
    title: "Petcat #259",
    price: "0.50 ETH",
    likes: "150",
  },
  {
    thumb: thumb4,
    title: "Petcat #260",
    price: "0.65 ETH",
    likes: "165",
  },
  {
    thumb: thumb5,
    title: "Petcat #261",
    price: "0.85 ETH",
    likes: "185",
  },
  {
    thumb: thumb6,
    title: "Petcat #262",
    price: "1.00 ETH",
    likes: "210",
  },
  {
    thumb: thumb7,
    title: "Petcat #263",
    price: "1.15 ETH",
    likes: "225",
  },
  {
    thumb: thumb8,
    title: "Petcat #264",
    price: "1.35 ETH",
    likes: "235",
  },
  {
    thumb: thumb9,
    title: "Petcat #265",
    price: "1.50 ETH",
    likes: "250",
  },
  {
    thumb: thumb10,
    title: "Petcat #266",
    price: "2.50 ETH",
    likes: "265",
  },
  {
    thumb: thumb11,
    title: "Petcat #267",
    price: "2.85 ETH",
    likes: "270",
  },
  {
    thumb: thumb12,
    title: "Petcat #268",
    price: "3.10 ETH",
    likes: "345",
  },
];

export const categories = [
  {
    widgetTitle: "Sectors",
    items: [
      {
        title: "Gaming",
        products: "23",
      },
      {
        title: "DeFi",
        products: "18",
      },
      {
        title: "SocialFi",
        products: "13",
      },
      {
        title: "Digital Art",
        products: "24",
      },
      {
        title: "PFPs",
        products: "8",
      }
    ],
  },
];

export const barterTrades = [
  {
    image: "https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/in/wp-content/uploads/2022/03/monkey-g412399084_1280.jpg",
    images: [
      "https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/in/wp-content/uploads/2022/03/monkey-g412399084_1280.jpg",
      "https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/in/wp-content/uploads/2022/03/monkey-g412399084_1280.jpg"
    ],
    offeredCollection: "xexadons",
    targetCollection: "goonies",
    number: "4",
    
  },
  {
    image: "https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/in/wp-content/uploads/2022/03/monkey-g412399084_1280.jpg",
    images: [
      "https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/in/wp-content/uploads/2022/03/monkey-g412399084_1280.jpg",
      "https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/in/wp-content/uploads/2022/03/monkey-g412399084_1280.jpg"
    ],
    offeredCollection: "xexadons",
    targetCollection: "goonies",
    number: "4"
  },
  {
    image: "https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/in/wp-content/uploads/2022/03/monkey-g412399084_1280.jpg",
    images: [
      "https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/in/wp-content/uploads/2022/03/monkey-g412399084_1280.jpg",
      "https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/in/wp-content/uploads/2022/03/monkey-g412399084_1280.jpg"
    ],
    offeredCollection: "xexadons",
    targetCollection: "goonies",
    number: "4"
  },
]

export const collections = [
  {
    id: 0,
    image: "https://th.bing.com/th/id/OIG3.rhAda4KFsO1LwuVILtfu?pid=ImgGn",
    images: [
      {id: 0, src: "https://th.bing.com/th/id/OIG3.rhAda4KFsO1LwuVILtfu?pid=ImgGn"},
      {id: 1, src: "https://th.bing.com/th/id/OIG3.suBRQgyBQGRlFAKcpJgl?pid=ImgGn"},
      {id: 2, src: "https://th.bing.com/th/id/OIG3.Gzxwt_XFoNuc6eJ4maOp?pid=ImgGn"},
      {id: 3, src: "https://th.bing.com/th/id/OIG3.y3YxGqScdq1AasoqnGwe?pid=ImgGn"}
    ],
    name: "ArcAngel",
    nftLiquidity: 4,
    CANTOLiquidity: 0.1
  },
]

export const createOptions = [
  {id: 0, title: "Barter"},
  {id: 1, title: "Listing"},
  {id: 2, title: "AMM Pool"}
]