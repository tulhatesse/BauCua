import React from "react";
import { connect } from "react-redux";

const Header = ({ value }) => {
  return (
    <div className='container text-center'>
      <h1 className='text-danger'>BÀI TẬP BẦU CUA CYBERSOFT</h1>
      <p>Tiền thưởng: {value} điểm </p>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    value: state.bauCuaReducer.value,
  };
};
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
