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
            theme: "fusion",
            minAngleForValue: "40",
            legendposition: "bottom",
        },
        data: [
            {
                label: "Open supply: (30%)",
                value: "3000000",
                displayValue: "Open supply: (30%)"
            },
            {
                label: "Development wallet: (30%)",
                value: "3000000",
                displayValue: "Development wallet: (30%)"
            },
            {
                label: "Play2Earn Rewards: (15%)",
                value: "1500000",
                displayValue: "Play2Earn Rewards: (15%)"
            },
            {
                label: "Marketing: (10%)",
                value: "1000000",
                displayValue: "Marketing: (10%)"
            },
            {
                label: "Private sale/ Pre-Sale allocation: (10%)",
                value: "1000000",
                displayValue: "Private sale/ Pre-Sale allocation: (10%)"
            },
            {
                label: "Team Token: (5%)",
                value: "500000",
                displayValue: "Team Token: (5%)"
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