import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import * as C from "./styles";
import { Bar } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';
import "./styles.css";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top' as const,
        },
        title: {
            display: true,
            text: 'Chart.js Bar Chart',
        },
    },
};

const labels = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

export const data = {
    labels,
    datasets: [
        {
            label: 'Chamados Abertos',
            data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
            color: "#FFF",
        },
        {
            label: 'Chamados Fechados',
            data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
            color: "#FFF",
        },
    ],
};

export function VerticalBarChart() {
    return (
        <C.CardContainer>
            <Bar className="vertical-bar-chart" options={options} data={data} />
        </C.CardContainer>
    );
}