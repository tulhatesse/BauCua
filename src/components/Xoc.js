import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import data from "../data.json";
import { SET_RESULT } from "../redux/constant/BauCua";

export const Xoc = ({ setResult }) => {
  const random = () => Math.floor(Math.random() * 6);
  const [values, setValues] = useState([random(), random(), random()]);
  const [animation, setAnimation] = useState(false);
  const [xocTime, setXocTime] = useState(0);
  const [intervalId, setIntervalId] = useState(null);
  const actAnimation = (animation) => {
    return animation ? "xucXac" : "";
  };

  useEffect(() => {
    if (xocTime === 4) {
      setResult(
        data[values[0]].name,
        data[values[1]].name,
        data[values[2]].name
      );
      clearInterval(intervalId);
      setIntervalId(null);
      setAnimation(false);
      setXocTime(0);
    }
  }, [intervalId, values, setResult, xocTime]);
  return (
    <div
      className='d-flex flex-column justify-content-center align-items-center'
      style={{ paddingTop: "50%" }}
    >
      <img
        className={"mb-3 " + actAnimation(animation)}
        src={data[values[0]].url}
        alt='hinh bau'
        height={50}
        width={50}
      />
      <img
        className={"mb-3 " + actAnimation(animation)}
        src={data[values[1]].url}
        alt='hinh bau'
        height={50}
        width={50}
      />
      <img
        className={"mb-3 " + actAnimation(animation)}
        src={data[values[2]].url}
        alt='hinh bau'
        height={50}
        width={50}
      />
      <button
        type='button'
        className='btn btn-success'
        style={{ fontSize: 20, height: 50, width: 100 }}
        onClick={() => {
          const intervalId = setInterval(() => {
            setValues([random(), random(), random()]);
            setXocTime((xocTime) => xocTime + 1);
            setAnimation(true);
          }, 1000);
          setIntervalId(intervalId);
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
      payload: [result1, result2, result3],
    });
  },
});

export default connect(null, mapDispatchToProps)(Xoc);
