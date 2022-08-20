import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { IContadorFullDTO } from '../../_config/base/contador.service';
import { useContadorService } from '../../_config/services/contador.service';
import { abertos, fechados, solucionados } from '../CardTotais';
import * as C from "./styles";
import "./styles.css";

ChartJS.register(ArcElement, Tooltip, Legend);

export function Grafico() {
    const [contador, setContador] = useState<IContadorFullDTO>()
    const serviceContador = useContadorService();

    const contadores = () => {
        serviceContador.Contadores()
            .then(response => setContador(response.data));
    }

    /*useEffect(() => {
        contadores()
    }, [contador]);*/

    const data = {
        labels: ['Abertos', 'Solucionados', 'Fechados'],
        datasets: [
            {
                label: '# of Votes',
                data: [contador?.abertos, abertos, contador?.solucionados,solucionados, contador?.fechados, fechados],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    //'rgba(75, 192, 192, 0.2)',
                    //'rgba(153, 102, 255, 0.2)',
                    //'rgba(255, 159, 64, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    //'rgba(75, 192, 192, 1)',
                    //'rgba(153, 102, 255, 1)',
                    //'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 1,
            },
        ],
    }

    return (
        <C.CardContainer>
            <Doughnut className="dash-doughnut" data={data} />
        </C.CardContainer>
    );
}
