import React from 'react'
import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import ReactFusioncharts from "react-fusioncharts";

const PieChart = () => {
    charts(FusionCharts);
    const dataSource = {
        chart: {
            enablesmartlabels: "1",
            showlabels: "1",
            usedataplotcolorforlabels: "1",
            plottooltext: "$label, <b>$value</b>",
            theme: "fusion"
        },
        data: [
            {
                label: "Open supply: 30 million (30%)",
                value: "3000000"
            },
            {
                label: "Development wallet: 30 million (30%)",
                value: "3000000"
            },
            {
                label: "Play2Earn Rewards: 15 million (15%)",
                value: "1500000"
            },
            {
                label: "Marketing: 10 million (10%)",
                value: "1000000"
            },
            {
                label: "Private sale/ Pre-Sale allocation: 10 million (10%)",
                value: "1000000"
            },
            {
                label: "Team Token: 5 million (5%)",
                value: "500000"
            }
        ]
    };
    return (
        <ReactFusioncharts
            type="doughnut3d"
            width="100%"
            height="100%"
            dataFormat="JSON"
            dataSource={dataSource}
        />
    )
}

export default PieChart