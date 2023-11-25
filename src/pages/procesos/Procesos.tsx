import BarChartBox from "../../components/barChartBox/BarChartBox";
import BigChartBox from "../../components/bigChartBox/BigChartBox1";
import ChartBox from "../../components/chartBox/ChartBox";
import PieChartBox from "../../components/pieCartBox/PieChartBox";
import TopBox from "../../components/topBox/TopBox";
import {
  barChartBoxDulceria,
  barChartBoxTaquilla,
  chartBoxGastosFinancieros,
  chartBoxIngreso,
  chartBoxResultadoNeto,
  chartBoxUtilidadOperativa,
} from "../../data";

export const Procesos = () => {
  return (
    <div className="home">
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
        <BigChartBox />
      </div>
      <div className="box box8">
        <BarChartBox {...barChartBoxTaquilla} />
      </div>
      <div className="box box9">
        <BarChartBox {...barChartBoxDulceria} />
      </div>
    </div>
  );
};
