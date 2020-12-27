import React from "react";
import { connect } from "react-redux";
import { ADD_ITEM, REMOVE_ITEM } from "../redux/constant/BauCua";

export const BauCuaItem = ({
  id,
  name,
  url,
  addItem,
  removeItem,
  selected,
}) => {
  const itemMoney = selected[name];
  return (
    <div
      className='d-flex flex-column justify-content-center align-items-center'
      style={{ width: 200, marginRight: 120 }}
    >
      <img className='mb-3' src={url} alt='hinh bau' height={180} width={180} />
      <div
        className='BauCuaItem__Cuoc d-flex align-items-center justify-content-center bg-warning rounded py-2 px-5 mb-2'
        style={{ width: 200, fontSize: "20px", fontWeight: 600 }}
      >
        <p className='m-0'>Cược: </p>
        <button
          type='button'
          className='btn btn-success mx-2'
          style={{ fontSize: 20 }}
          onClick={() => {
            addItem(name);
          }}
        >
          +
        </button>
        <p className='m-0'>{itemMoney}</p>
        <button
          type='button'
          className='btn btn-success mx-2'
          style={{ fontSize: 20 }}
          onClick={() => {
            removeItem(name);
          }}
        >
          -
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  selected: state.bauCuaReducer.selected,
});

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => {
    dispatch({
      type: ADD_ITEM,
      payload: item,
    });
  },
  removeItem: (item) => {
    dispatch({
      type: REMOVE_ITEM,
      payload: item,
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(BauCuaItem);
