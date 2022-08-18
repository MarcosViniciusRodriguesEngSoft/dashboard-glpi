import CardTotais from "./components/CardTotais";
import { Grafico } from "./components/Doughnut";
import { VerticalBarChart } from "./components/VerticalBarChart";

import * as C from './helpers/styles';

function App() {
  return (
    <>
      <C.Container>
        <C.Divider className="space">
          <CardTotais />
        </C.Divider>
        <C.Divider className="responsive-dash space">
          <C.Row>
            <C.Col>
              <VerticalBarChart />
            </C.Col>
            <C.Col>
              <Grafico />
            </C.Col>
          </C.Row>
        </C.Divider>
      </C.Container>
    </>
  );
}

export default App;
