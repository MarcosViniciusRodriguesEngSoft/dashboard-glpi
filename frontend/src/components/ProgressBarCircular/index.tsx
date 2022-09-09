import { useEffect, useState } from 'react';
import { Progress } from 'antd';
import { Col, Row } from '../../helpers/styles';
import { IContadorFullDTO } from '../../_config/base/contador.service';
import { useContadorService } from '../../_config/services/contador.service';
import * as C from "./styles";
import "./styles.css";

function ProgressBarCircular() {
  const [contador, setContador] = useState<IContadorFullDTO | any>();
  const serviceContador = useContadorService();

  const contadores = () => {
    serviceContador.contadores()
      .then(response => {
        setContador(response.data)
      });
  }

  useEffect(() => {
    contadores();
    // eslint-disable-next-line
  }, []);

  const total = contador?.abertos - contador?.fechados
  const totalPercente = 100 - ((contador?.fechados / contador?.abertos) * 100)

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
              <C.Legenda>Abertos: {contador?.abertos}</C.Legenda>
            </Col>
          </Row>
          <Row className="config-responsive-progressbarcicle">
            <Col className="margin-space">
              <C.Pixel />
            </Col>
            <Col>
              <C.Legenda>Fechados: {contador?.fechados}</C.Legenda>
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