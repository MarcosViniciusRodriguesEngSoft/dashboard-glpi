import { Progress } from 'antd';
import { Col, Row } from '../../helpers/styles';
import { abertos, fechados } from '../CardTotais';
import * as C from "./styles";
import "./styles.css";

const total = abertos - fechados
const totalPercente = 100 - ((fechados / abertos) * 100)

function ProgressBarCircular() {
  return (
    < C.CardContainer >
      <>
        <Progress
          type="circle"
          width={400}
          strokeWidth={10}
          percent={totalPercente}
          format={() => `${total} BackLog`} />

        <Col className="alin-container">
          <Row className="config-responsive-progressbarcicle">
            <Col className="margin-space">
              <C.Pixel />
            </Col>
            <Col>
              <C.Legenda>Abertos: {abertos}</C.Legenda>
            </Col>
          </Row>
          <Row className="config-responsive-progressbarcicle">
            <Col className="margin-space">
              <C.Pixel />
            </Col>
            <Col>
              <C.Legenda>Fechados: {fechados}</C.Legenda>
            </Col>
          </Row>
          <Row className="config-responsive-progressbarcicle">
            <Col className="margin-space">
              <C.Pixel />
            </Col>
            <Col>
              <C.Legenda>BackLog: {total}</C.Legenda>
            </Col>
          </Row>
        </Col>
      </>
    </C.CardContainer >
  );
}
export default ProgressBarCircular;