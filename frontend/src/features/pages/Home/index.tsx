import CardTotais from "../../../components/CardTotais";
import ProgressBarCircular from "../../../components/ProgressBarCircular";
import { VerticalBarChart } from "../../../components/VerticalBarChart";
import { DoughnutCicle } from "../../../components/Doughnut";
import { Divider, Row } from "../../../helpers/styles";
import * as C from "../../../helpers/styles";
import "./styles.css";

function Home() {
    return (
        <>
            <C.Container>
                <Divider className="config-space">
                    <CardTotais />
                </Divider>
                <Row>
                    <Divider className="config-space">
                        <DoughnutCicle />
                    </Divider>
                    <Divider className="config-space">
                        <ProgressBarCircular />
                    </Divider>
                </Row>
                <Divider className="config-space">
                    <VerticalBarChart />
                </Divider>
            </C.Container>
        </>
    );
}

export default Home;