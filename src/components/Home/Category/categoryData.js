import Img1 from "../../../assets/img/cat-1.png";
import Img2 from "../../../assets/img/cat-2.png";

export const timeData = [
  {
    id: 1,
    name: "HAPPY HOUR",
    img: Img1,
    time: "3:00 PM TO 8:00 PM",
    chname: "欢乐时 光",
    category: [
      {
        name: "Frais de chambre / Room fee / 包房费",
        desc: "Nourriture, beauvage et alcool extra/ Food , drink and alchohol extra / 未含食品酒水",
        price: [
          { name: "P/S/小", amount: "100$" },
          { name: "M/中", amount: "150$" },
          { name: "G/L/大", amount: "200$" },
          { name: "VIP", amount: "300$" },
        ],
      },
      {
        name: "Par personne / Per Person / 每人",
        desc: "Nourriture, beauvage et alcool extra/ Food , drink and alchohol extra / 未含食品酒水",
        price: [
          { name: "P/S/小", amount: "20$" },
          { name: "M/中", amount: "25$" },
          { name: "G/L/大", amount: "30$" },
          { name: "VIP", amount: "50$" },
        ],
      },
    ],
  },
  {
    id: 2,
    name: "LES SOIRÉES",
    img: Img2,
    time: "8:00 PM TO 3:00 AM",
    chname: "晚间夜场",
    category: [
      {
        name: "Frais de chambre / Room fee / 套餐费 à partir de starting at 起",
        desc: "Nourriture, beauvage et alcool inclus / Food , drink and alchohol included / 包含食品酒水",
        price: [
          { name: "P/S/小", amount: "288$" },
          { name: "M/中", amount: "328$" },
          { name: "G/L/大", amount: "388$" },
          { name: "VIP", amount: "688$" },
        ],
      },
      {
        name: "Toutes les deux heures/ Every 2 hours/ 每2时 Par personne / Per Person / 每人",
        desc: "Nourriture, beauvage et alcool extra/ Food , drink and alchohol extra / 未含食品酒水",
        price: [
          { name: "P/S/小", amount: "20$" },
          { name: "M/中", amount: "25$" },
          { name: "G/L/大", amount: "30$" },
          { name: "VIP", amount: "50$" },
        ],
      },
    ],
  },
];
