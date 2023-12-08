import React from "react";
import "./game.css";
import { useDispatch, useSelector } from "react-redux";
import {
  flipImg,
  generateRandomImg,
  lambaBmwClick,
  modeClick,
  twoFalse,
  twoTrue,
} from "../redux/gameSlice";
import lamba from "../img/lamba.jpg";
import bmw from "../img/bmw.jpg";
// import memory from "../img/memory.png";
import mem from "../img/mem.webp";
import win from "../img/win.gif";

const Game = () => {
  const dispatch = useDispatch();
  const expiriens = useSelector((state) => state.gameReducer.expiriens);
  const arrayImg = useSelector((state) => state.gameReducer.arrayImg);
  const randomArray = useSelector((state) => state.gameReducer.randomArray);
  const countClick = useSelector((state) => state.gameReducer.countClick);
  const left = useSelector((state) => state.gameReducer.left);
  const quantity = useSelector((state) => state.gameReducer.quantity);
  const test = useSelector((state) => state.gameReducer.test);
  const classS = useSelector((state) => state.gameReducer.classS);
  const zastavka = useSelector((state) => state.gameReducer.zastavka);
  const indexOne = useSelector(
    (state) => state.gameReducer.countClick.index[0]
  );
  const indexTwo = useSelector(
    (state) => state.gameReducer.countClick.index[1]
  );
  const modeIdentificationButton = useSelector(
    (state) => state.gameReducer.modeIdentificationButton
  );

  return (
    <div className="wrapper_game">
      <h1>--- Card-Memory-Game ---</h1>
      <h1>
        Game Move : {quantity} / Left : {left}
      </h1>
      {left < 1 && quantity !== 0 ? <h1>You Win!!!</h1> : ""}
      <div className="buttonGame">
        <button
          className="gameButton"
          onClick={() => dispatch(generateRandomImg())}>
          Restart
        </button>
        <button
          style={
            modeIdentificationButton[0].state
              ? { backgroundColor: "gray" }
              : { backgroundColor: "white" }
          }
          onClick={() =>
            dispatch(
              modeClick({
                countPar: 6,
                id: modeIdentificationButton[0].id,
                styleImg: modeIdentificationButton[0].styleImg,
                styleW: modeIdentificationButton[0].styleW,
              })
            )
          }
          className="gameButton mode">
          Lite
        </button>
        <button
          style={
            modeIdentificationButton[1].state
              ? { backgroundColor: "gray" }
              : { backgroundColor: "white" }
          }
          onClick={() =>
            dispatch(
              modeClick({
                countPar: 10,
                id: modeIdentificationButton[1].id,
                styleImg: modeIdentificationButton[1].styleImg,
                styleW: modeIdentificationButton[1].styleW,
              })
            )
          }
          className="gameButton mode">
          Normal
        </button>
        <button
          style={
            modeIdentificationButton[2].state
              ? { backgroundColor: "gray" }
              : { backgroundColor: "white" }
          }
          onClick={() =>
            dispatch(
              modeClick({
                countPar: 18,
                id: modeIdentificationButton[2].id,
                styleImg: modeIdentificationButton[2].styleImg,
                styleW: modeIdentificationButton[2].styleW,
              })
            )
          }
          className="gameButton mode">
          Hard
        </button>
      </div>

      {zastavka === 0 && <img className="memoryImg" src={mem} />}
      {left === 0 && <img className="win" src={win} />}

      <div className="mapWrapper">
        {countClick.click === 3
          ? randomArray[indexOne].id === randomArray[indexTwo].id
            ? dispatch(twoTrue())
            : dispatch(twoFalse())
          : randomArray.map((element, index) => {
              return (
                <div
                  onClick={() => dispatch(flipImg({ index, id: element.id }))}
                  className={`${modeIdentificationButton[0].styleW[0]}
                       ${modeIdentificationButton[1].styleW[0]}
                       ${modeIdentificationButton[2].styleW[0]}`}
                  style={{
                    transition: "transform 0.4s",
                    transform: element.classS,
                  }}>
                  <div
                    style={{
                      width: "100%",
                      position: "absolute",
                      backfaceVisibility: "hidden",
                      transform: element.classS,
                    }}>
                    <img
                      className={`${modeIdentificationButton[0].styleImg[0]}
                         ${modeIdentificationButton[1].styleImg[0]}
                         ${modeIdentificationButton[2].styleImg[0]}`}
                      src={element.imgSrc}
                      alt=""
                    />
                  </div>
                  <div
                    style={{
                      width: "100%",
                      position: "absolute",
                      backfaceVisibility: "hidden",
                      // transform: element.classS,
                    }}>
                    <img
                      className={`${modeIdentificationButton[0].styleImg[0]}
                         ${modeIdentificationButton[1].styleImg[0]}
                         ${modeIdentificationButton[2].styleImg[0]}`}
                      src={element.frontImg}
                      alt="asd"
                    />
                  </div>
                </div>
              );
            })}
      </div>
    </div>
  );
};

export default Game;

{
  /* <div
        style={{
          marginLeft: "auto",
          marginRight: "auto",
          //
          margin: "300px",
          transformStyle: "preserve-3d",
          transition: "transform 0.4s",
          transform: classS,
        }}>
        <div
          // bmw
          style={{
            width: "100%",
            position: "absolute",
            backfaceVisibility: "hidden",
            transform: classS,
          }}>
          <img
            onClick={() => dispatch(lambaBmwClick())}
            style={{
              width: "400px",
              height: "200px",
            }}
            src={bmw}
            alt=""
          />
        </div>
        <div
          // lamba
          style={{
            width: "100%",
            position: "absolute",
            backfaceVisibility: "hidden",
            // transform: classS,
          }}>
          <img
            onClick={() => dispatch(lambaBmwClick())}
            style={{
              width: "400px",
              height: "200px",
            }}
            src={lamba}
            alt=""
          />
        </div>
      </div> */
}

//
// <div className="flip-container">
//   <div className="flipper">
//     <div className="front">
//       <img onClick={flipImage} src={element.frontImg} alt="" />
//     </div>
//     <div className="back">
//       <img onClick={flipImage} src={element.imgSrc} alt="" />
//     </div>
//   </div>
// </div>
//
//
//
//
//
// function flipImage() {
//   var flipContainer = document.querySelector(".flip-container");
//   flipContainer.classList.toggle("flipped");
// }
// function myFlip() {
//   var meWrapperImages = document.querySelector(".my-wrapper-images");
//   meWrapperImages.classList.toggle("my-mini-wrapperTwo");
// }
/* <div
        //  className="my-mini-wrapper"
        style={{
          marginLeft: "auto",
          marginRight: "auto",
          //
          transformStyle: "preserve-3d",
          transition: "transform 0.4s",
          transform: classS,
        }}>
        <div
          //   className="lamba"
          style={{
            width: "100%",
            // height: "100%",
            position: "absolute",
            backfaceVisibility: "hidden",
            transform: classS,
          }}
          >
          <img onClick={() => dispatch(flipImg())} src={carImg.lamba} alt="" />
        </div>
        <div
          //   className="bmw"
          style={{
            width: "100%",
            // height: "100%",
            position: "absolute",
            backfaceVisibility: "hidden",
          }}>
          <img onClick={() => dispatch(flipImg())} src={carImg.bmw} alt="asd" />
        </div>
      </div> */
/* <div className="box_wrapper">
        <div className="flip-container">
          <div className="flipper">
            <div className="front">
              <img onClick={flipImage} src={lamba} alt="" />
            </div>
            <div className="back">
              <img onClick={flipImage} src={bmw} alt="" />
            </div>
          </div>
        </div>
      </div> */
//
//
// <div
//   onClick={() => dispatch(flipImg())}
//   className={`my-mini-wrapper  ${stan ? "stan" : ""}`}
//   style={{
//     // // marginLeft: "auto",
//     // // marginRight: "auto",
//     // margin: "200px",
//     // // marginLeft: "200px",
//     // // marginRight: "200px",
//     // transformStyle: "preserve-3d",
//     // transition: "transform 0.4s",
//     transform: classS,
//   }}>
//   <div
//     // onClick={() => dispatch(flipImg())}
//     className="lamba"
//     style={{
//       // width: "100%",
//       // height: "100%",
//       // position: "absolute",
//       // backfaceVisibility: "hidden",
//       transform: classS,
//     }}>
//     <img
//       // onClick={() => dispatch(flipImg())}
//       // src={carImg.lamba}
//       src={element.frontImg}
//       alt=""
//     />
//   </div>
//   <div
//     // onClick={() => dispatch(flipImg())}
//     className="bmw"
//     // style={{
//     //   width: "100%",
//     //   height: "100%",
//     //   position: "absolute",
//     //   backfaceVisibility: "hidden",
//     // }}
//   >
//     <img
//       // onClick={() => dispatch(flipImg())}
//       // src={carImg.bmw}
//       src={element.imgSrc}
//       alt="asd"
//     />
//   </div>
// </div>
{
  /* {countClick.click === 3 &&
        randomArray[indexOne].id === randomArray[indexTwo].id
          ? dispatch(twoTrue())
          : randomArray.map((element, index) => {
              return (
                <div
                  onClick={() => dispatch(flipImg({ index, id: element.id }))}
                  style={{
                    // margin: "190px",
                    marginLeft: "190px",
                    marginRight: "190px",
                    marginTop: "100px",
                    marginBottom: "100px",
                    transformStyle: "preserve-3d",
                    transition: "transform 0.4s",
                    transform: element.classS,
                  }}>
                  <div
                    style={{
                      width: "100%",
                      height: "100%",
                      position: "absolute",
                      backfaceVisibility: "hidden",
                      transform: element.classS,
                    }}>
                    <img src={element.imgSrc} alt="" />
                  </div>
                  <div
                    style={{
                      width: "100%",
                      height: "100%",
                      position: "absolute",
                      backfaceVisibility: "hidden",
                    }}>
                    <img src={element.frontImg} alt="asd" />
                  </div>
                </div>
                //
              );
            })}
        <hr></hr>
        {countClick.click === 3 &&
        randomArray[indexOne].id !== randomArray[indexTwo].id
          ? dispatch(twoFalse())
          : randomArray.map((element, index) => {
              return (
                <div
                  onClick={() => dispatch(flipImg({ index, id: element.id }))}
                  style={{
                    margin: "200px",
                    transformStyle: "preserve-3d",
                    transition: "transform 0.4s",
                    transform: element.classS,
                  }}>
                  <div
                    style={{
                      width: "100%",
                      height: "100%",
                      position: "absolute",
                      backfaceVisibility: "hidden",
                      transform: element.classS,
                    }}>
                    <img src={element.imgSrc} alt="" />
                  </div>
                  <div
                    style={{
                      width: "100%",
                      height: "100%",
                      position: "absolute",
                      backfaceVisibility: "hidden",
                    }}>
                    <img src={element.frontImg} alt="asd" />
                  </div>
                </div>
                //
              );
            })} */
}
//   modeIdentificationButton[0].state && {
//     // LIte
//     padding: "10px",
//     marginLeft: "270px",
//     marginRight: "270px",
//     marginTop: "170px",
//     marginBottom: "170px",
//     transformStyle: "preserve-3d",
//     transition: "transform 0.4s",
//     transform: element.classS,
//   },
//
//   modeIdentificationButton[1].state && {
//     // Normal
//     padding: "10px",
//     marginLeft: "220px",
//     marginRight: "220px",
//     marginTop: "120px",
//     marginBottom: "120px",
//     transformStyle: "preserve-3d",
//     transition: "transform 0.4s",
//     transform: element.classS,
//   },
//   //   : {},
//   modeIdentificationButton[2].state && {
//     // Hard
//     padding: "10px",
//     marginLeft: "180px",
//     marginRight: "180px",
//     marginTop: "110px",
//     marginBottom: "110px",
//     transformStyle: "preserve-3d",
//     transition: "transform 0.4s",
//     transform: element.classS,
//   }

{
  /* <div>
        <img
          className={`${modeIdentificationButton[0].styleImg[0]} `}
          src={arrayImg[0].imgSrc}
        />
      </div> */
}
// `liteImg ${""} ${""}`
//   ("liteImg",
// "",
// (modeIdentificationButton[0].styleW[0],
// modeIdentificationButton[1].styleW[0],
// modeIdentificationButton[2].styleW[0])
//
// `liteImg ${""} ${""}`
//   ("liteImg",
// "",
// "")
// modeIdentificationButton[1].styleW[0], // (modeIdentificationButton[0].styleW[0],
// modeIdentificationButton[2].styleW[0])
//
