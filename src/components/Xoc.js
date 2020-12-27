import React, { useState } from "react";
import { connect } from "react-redux";
import data from "../data.json";
import { SET_RESULT } from "../redux/constant/BauCua";

export const Xoc = ({ setResult }) => {
  const [select1, setselect1] = useState(Math.floor(Math.random() * 6));
  const [select2, setselect2] = useState(Math.floor(Math.random() * 6));
  const [select3, setselect3] = useState(Math.floor(Math.random() * 6));
  const [animation, setAnimation] = useState(false);

  const actAnimation = (animation) => {
    return animation ? "xucXac" : "";
  };
  return (
    <div
      className='d-flex flex-column justify-content-center align-items-center'
      style={{ paddingTop: "50%" }}
    >
      <img
        className={"mb-3 " + actAnimation(animation)}
        src={data[select1].url}
        alt='hinh bau'
        height={50}
        width={50}
      />
      <img
        className={"mb-3 " + actAnimation(animation)}
        src={data[select2].url}
        alt='hinh bau'
        height={50}
        width={50}
      />
      <img
        className={"mb-3 " + actAnimation(animation)}
        src={data[select3].url}
        alt='hinh bau'
        height={50}
        width={50}
      />
      <button
        type='button'
        className='btn btn-success'
        style={{ fontSize: 20, height: 50, width: 100 }}
        onClick={() => {
          let i = 0;
          let random = setInterval(() => {
            setAnimation(true);
            setselect1(Math.floor(Math.random() * 6));
            setselect2(Math.floor(Math.random() * 6));
            setselect3(Math.floor(Math.random() * 6));
            i++;
            if (i === 4) {
              clearInterval(random);
              setResult(
                data[select1].name,
                data[select2].name,
                data[select3].name
              );
              setAnimation(false);
            }
          }, 1000);
        }}
      >
        Xốc
      </button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  setResult: (result1, result2, result3) => {
    dispatch({
      type: SET_RESULT,
      payload: { result1: result1, result2: result2, result3: result3 },
    });
  },
});

export default connect(null, mapDispatchToProps)(Xoc);
