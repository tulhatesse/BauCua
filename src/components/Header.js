import React from "react";
import { connect } from "react-redux";

const Header = ({ value }) => {
  return (
    <div className='container text-center d-flex flex-column align-items-center justify-content-center'>
      <h1 className='text-danger' style={{ fontSize: "40px" }}>
        BÀI TẬP BẦU CUA CYBERSOFT
      </h1>
      <div
        className='bg-warning rounded py-2 px-2 mb-3 d-flex align-items-center justify-content-center'
        style={{ width: "250px" }}
      >
        <p className='text-dark m-0' style={{ fontSize: "20px" }}>
          Tiền thưởng: {value} điểm{" "}
        </p>
      </div>
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
