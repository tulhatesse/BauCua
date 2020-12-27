import React from "react";
import BauCuaItem from "../components/BauCuaItem";
import Header from "../components/Header";
import Xoc from "../components/Xoc";
import data from "../data.json";

export default function BauCua() {
  return (
    <div className='bg-dark p-5'>
      <Header />
      <div className='row'>
        <div className='BauCuaList d-flex justify-content-start flex-wrap col-9'>
          {data.map((item) => {
            return <BauCuaItem key={item.id} name={item.name} url={item.url} />;
          })}
        </div>
        <div className='col-3'>
          <Xoc />
        </div>
      </div>
    </div>
  );
}
