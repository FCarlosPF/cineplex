import ModalComponent from "../../components/ModalComponent";
import BarChartBox from "../../components/barChartBox/BarChartBox";
import BigChartBox1 from "../../components/bigChartBox/BigChartBox1";
import BigChartBox from "../../components/bigChartBox/BigChartBox1";
import BigChartBox2 from "../../components/bigChartBox/BigChartBox2";
import ChartBox from "../../components/chartBox/ChartBox";
import PieChartBox from "../../components/pieCartBox/PieChartBox";
import TopBox from "../../components/topBox/TopBox";
import {
  barChartBoxDulceria,
  barChartBoxPantallas,
  barChartBoxPublicidad,
  barChartBoxTaquilla,
  chartBoxGastosFinancieros,
  chartBoxIngreso,
  chartBoxResultadoNeto,
  chartBoxUtilidadOperativa,
} from "../../data";
import "./finanza.scss";
import { useState } from "react";

export const Finanzas = () => {
  const [showModal, setShowModal] = useState(false);
  const data = [
    { column1: "Dato 1", column2: "Dato A" },
    { column1: "Dato 2", column2: "Dato B" },
    // Agrega más datos según tus necesidades
  ];

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);
  return (
    <div className="finanza">
      <div className="box box1">
        <TopBox />
      </div>
      <div className="box box2">
        <ChartBox {...chartBoxIngreso} />
      </div>
      <div className="box box3">
        <ChartBox {...chartBoxUtilidadOperativa} />
      </div>
      <div className="box box4">
        <PieChartBox />
      </div>
      <div className="box box5">
        <ChartBox {...chartBoxGastosFinancieros} />
      </div>
      <div className="box box6">
        <ChartBox {...chartBoxResultadoNeto} />
      </div>
      <div className="box box7">
        <BigChartBox1 />
      </div>
      <div className="box box8">
        <BarChartBox {...barChartBoxTaquilla} />
      </div>
      <div className="box box9">
        <BarChartBox {...barChartBoxDulceria} />
      </div>
      <div className="box box10">
        <BarChartBox {...barChartBoxPublicidad} />
      </div>
      <div className="box box10">
        <BarChartBox {...barChartBoxPantallas} />
      </div>
      <div className="box box7">
        <BigChartBox2 />
      </div>
      <div className="box box11 m-auto">
        <button
          className="bg-black hover:bg-blue-700 text-red font-bold py-2 px-4 rounded-full m-auto"
          onClick={handleShow}
        >
          Tabla
        </button>
        <ModalComponent
          showModal={showModal}
          handleClose={handleClose}
          data={data}
        />
      </div>
    </div>
  );
};
