import { createSlice, formatProdErrorMessage } from "@reduxjs/toolkit";
import skype from "../img/logoSkype.png";
import instagram from "../img/logoInst.jpg";
import adidas from "../img/logoAdidas.jpg";
import hp from "../img/logoHp.jpg";
import nike from "../img/logoNike.jpg";
import samsung from "../img/logoSamsung.jpg";
import facebook from "../img/facebook2.png";
import rs from "../img/rs.jpg";
import greenFon from "../img/greenFone.jpg";
import nft from "../img/nft.avif";
import glaza from "../img/glaza.jpg";
import galka from "../img/galka.jpg";
import calculator from "../img/calculator.jpg";
import calendar from "../img/calendar.jpg";
import adidas2 from "../img/adidas2.jpg";
import iagodi from "../img/iagodi.avif";
import lebed from "../img/lebed.jpg";
import snejinka2 from "../img/snejinka2.jpg";
import windowsVista from "../img/windowsVista.jpg";
import pyziri from "../img/pyziri.jpg";
import lamba from "../img/lamba.jpg";
import bmw from "../img/bmw.jpg";

export const gameSlice = createSlice({
  name: "game",
  initialState: {
    ass: [],
    arrayImg: [
      {
        id: 1,
        imgSrc: skype,
        frontImg: greenFon,
        stan: true,
        classS: "",
      },
      {
        id: 2,
        imgSrc: instagram,
        frontImg: greenFon,
        stan: true,
        classS: "",
      },
      {
        id: 3,
        imgSrc: adidas,
        frontImg: greenFon,
        stan: true,
        classS: "",
      },
      {
        id: 4,
        imgSrc: hp,
        frontImg: greenFon,
        stan: true,
        classS: "",
      },
      {
        id: 5,
        imgSrc: nike,
        frontImg: greenFon,
        stan: true,
        classS: "",
      },
      {
        id: 6,
        imgSrc: rs,
        frontImg: greenFon,
        stan: true,
        classS: "",
      },
      {
        id: 7,
        imgSrc: samsung,
        frontImg: greenFon,
        stan: true,
        classS: "",
      },
      {
        id: 8,
        imgSrc: facebook,
        frontImg: greenFon,
        stan: true,
        classS: "",
      },
      {
        id: 9,
        imgSrc: nft,
        frontImg: greenFon,
        stan: true,
        classS: "",
      },
      {
        id: 10,
        imgSrc: glaza,
        frontImg: greenFon,
        stan: true,
        classS: "",
      },
      // {
      //   id: 11,
      //   imgSrc: galka,
      //   frontImg: greenFon,
      //   stan: true,
      //   classS: "",
      // },
      {
        id: 12,
        imgSrc: calculator,
        frontImg: greenFon,
        stan: true,
        classS: "",
      },
      {
        id: 13,
        imgSrc: calendar,
        frontImg: greenFon,
        stan: true,
        classS: "",
      },
      {
        id: 13,
        imgSrc: adidas2,
        frontImg: greenFon,
        stan: true,
        classS: "",
      },
      {
        id: 14,
        imgSrc: iagodi,
        frontImg: greenFon,
        stan: true,
        classS: "",
      },
      {
        id: 15,
        imgSrc: lebed,
        frontImg: greenFon,
        stan: true,
        classS: "",
      },
      {
        id: 16,
        imgSrc: snejinka2,
        frontImg: greenFon,
        stan: true,
        classS: "",
      },
      {
        id: 17,
        imgSrc: windowsVista,
        frontImg: greenFon,
        stan: true,
        classS: "",
      },
      {
        id: 18,
        imgSrc: pyziri,
        frontImg: greenFon,
        stan: true,
        classS: "",
      },
    ],
    modeIdentificationButton: [
      {
        name: "lite",
        id: 1,
        state: false,
        styleImg: ["", "liteImg", "liteImg"],
        styleW: ["", "liteW", "liteW"],
      },
      {
        name: "normal",
        id: 2,
        state: true,
        styleImg: ["normalImg", "", "normalImg"],
        styleW: ["normalW", "", "normalW"],
      },
      {
        name: "hard",
        id: 3,
        state: false,
        styleImg: ["", "hardImg", "hardImg"],
        styleW: ["", "hardW", "hardW"],
      },
    ],
    modeNumber: 10,
    modeArray: [],
    fullArray: [],
    randomArray: [],
    count: 1,
    length: 0,
    frontImg: greenFon,
    carImg: {
      lamba: lamba,
      bmw: bmw,
      fon: greenFon,
      stan: true,
      classS: "",
    },
    countClick: {
      click: 0,
      index: [],
    },
    quantity: 0,
    left: "---",
    test: 1,
    expiriens: [false, true, false],
    zastavka: 0,
  },
  reducers: {
    generateRandomImg: (state) => {
      state.randomArray = [];
      state.fullArray = [];
      state.modeArray = [];
      state.count = 1;
      state.zastavka = 1;

      state.modeArray = state.arrayImg.slice(0, state.modeNumber);
      state.fullArray = state.modeArray;
      state.modeArray.map((item) => {
        state.fullArray = [...state.fullArray, item];
      });
      state.length = state.fullArray.length;
      for (let i = 0; i < state.length; i++) {
        let rrr = Math.round(Math.random() * (state.length - state.count));
        state.randomArray = [...state.randomArray, state.fullArray[rrr]];
        state.fullArray.splice(rrr, 1);
        state.count += 1;
        state.quantity = 0;
        state.left = state.modeArray.length;
      }
    },
    flipImg: (state, action) => {
      const index = action.payload.index;

      state.countClick.click += 1;
      state.countClick.index = [...state.countClick.index, index];

      state.randomArray[index].stan = !state.randomArray[index].stan;
      state.randomArray[index].stan
        ? (state.randomArray[index].classS = "")
        : (state.randomArray[index].classS = "rotateY(180deg)");
    },
    flipOnDefaultImg: (state) => {
      let indexArr = state.countClick.index;
      state.randomArray[indexArr[0]].stan =
        !state.randomArray[indexArr[0]].stan;
      state.randomArray[indexArr[1]].stan =
        !state.randomArray[indexArr[1]].stan;
    },
    twoFalse: (state) => {
      let index = state.countClick.index;

      state.randomArray[index[0]].stan = !state.randomArray[index[0]].stan;
      state.randomArray[index[0]].stan
        ? (state.randomArray[index[0]].classS = "")
        : (state.randomArray[index[0]].classS = "rotateY(180deg)");

      state.randomArray[index[1]].stan = !state.randomArray[index[1]].stan;
      state.randomArray[index[1]].stan
        ? (state.randomArray[index[1]].classS = "")
        : (state.randomArray[index[1]].classS = "rotateY(180deg)");

      state.randomArray[index[2]].stan = !state.randomArray[index[2]].stan;
      state.randomArray[index[2]].stan
        ? (state.randomArray[index[2]].classS = "")
        : (state.randomArray[index[2]].classS = "rotateY(180deg)");

      state.countClick.click = 0;
      state.countClick.index = [];
      state.quantity += 1;
    },
    twoTrue: (state) => {
      let index = state.countClick.index;

      state.randomArray[index[0]].stan = true;
      // !state.randomArray[index[0]].stan;
      state.randomArray[index[0]].stan
        ? (state.randomArray[index[0]].classS = "rotateY(180deg)")
        : (state.randomArray[index[0]].classS = "");

      state.randomArray[index[1]].stan = true;
      // !state.randomArray[index[1]].stan;
      state.randomArray[index[1]].stan
        ? (state.randomArray[index[1]].classS = "rotateY(180deg)")
        : (state.randomArray[index[1]].classS = "");

      state.randomArray[index[2]].stan = !state.randomArray[index[2]].stan;

      state.randomArray[index[2]].stan
        ? (state.randomArray[index[2]].classS = "")
        : (state.randomArray[index[2]].classS = "rotateY(180deg)");

      state.countClick.click = 0;
      state.countClick.index = [];
      state.quantity += 1;
      state.left -= 1;
    },
    consoleDispatch: (state) => {
      state.countClick.click = 0;
      state.countClick.index = [];
    },
    modeClick: (state, action) => {
      state.zastavka = 1;
      // state.modeNumber = action.payload;
      console.log("action : ", action.payload);

      state.modeNumber = action.payload.countPar;
      state.modeIdentificationButton.map((element) => {
        element.state = false;
        // element.styleImg[1] = element.styleImg[0];
        element.styleImg[0] = "";
        // element.styleW[1] = element.styleW[0];
        element.styleW[0] = "";
      });
      console.log("payload : ", action.payload.styleImg, action.payload.styleW);
      console.log(
        "styleImg / styleW  do : ",
        state.modeIdentificationButton[action.payload.id - 1].styleImg[0],
        state.modeIdentificationButton[action.payload.id - 1].styleW[0]
      );
      state.modeIdentificationButton[action.payload.id - 1].styleImg[0] =
        action.payload.styleImg[2];
      state.modeIdentificationButton[action.payload.id - 1].styleW[0] =
        action.payload.styleW[2];
      state.modeIdentificationButton[action.payload.id - 1].state = true;

      // console.log(
      //   "state : ",
      //   state.modeIdentificationButton[action.payload.id - 1].state
      // );\
      console.log(
        "styleImg / styleW  posle : ",
        state.modeIdentificationButton[action.payload.id - 1].styleImg[0],
        state.modeIdentificationButton[action.payload.id - 1].styleW[0]
      );

      state.randomArray = [];
      state.fullArray = [];
      state.modeArray = [];
      state.count = 1;

      state.modeArray = state.arrayImg.slice(0, state.modeNumber);
      state.fullArray = state.modeArray;
      state.modeArray.map((item) => {
        state.fullArray = [...state.fullArray, item];
      });
      state.length = state.fullArray.length;
      for (let i = 0; i < state.length; i++) {
        let rrr = Math.round(Math.random() * (state.length - state.count));
        state.randomArray = [...state.randomArray, state.fullArray[rrr]];
        state.fullArray.splice(rrr, 1);
        state.count += 1;
        state.quantity = 0;
        state.left = state.modeArray.length;
      }
    },
    lambaBmwClick: (state) => {
      state.stan = !state.stan;
      state.stan ? (state.classS = "rotateY(180deg)") : (state.classS = "");
    },
  },
});

export const {
  generateRandomImg,
  asd,
  flipImg,
  flipOnDefaultImg,
  twoFalse,
  twoTrue,
  consoleDispatch,
  modeClick,
  lambaBmwClick,
} = gameSlice.actions;
export default gameSlice.reducer;

// state.randomArray[0].stan = !state.randomArray[0].stan;
// state.randomArray[0].stan
//   ? (state.randomArray[0].classS = "")
//   : (state.randomArray[0].classS = "rotateY(180deg)");

// state.randomArray[1].stan = !state.randomArray[1].stan;
// state.randomArray[1].stan
//   ? (state.randomArray[1].classS = "")
//   : (state.randomArray[1].classS = "rotateY(180deg)");

// state.randomArray[2].stan = !state.randomArray[2].stan;
// state.randomArray[2].stan
//   ? (state.randomArray[2].classS = "")
//   : (state.randomArray[2].classS = "rotateY(180deg)");
