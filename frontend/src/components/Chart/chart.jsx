import React, { Component } from 'react';
import firebase from '../../firebase';
import Chart from "react-google-charts";

class charts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
        }
    }

    componentDidMount() {
        var ref = firebase.database().ref("criarh");
        ref.on('value', snapshot => {
            this.setState({
                data: (snapshot.val())
            });
        }, function (error) {
            console.log("Error: " + error.code);
        });
    }

    dataProcess() {
        var dataFromProcess = Object.entries(this.state.data);
        var arrayProcess = [];
        for (let index = 0; index < dataFromProcess.length; index++) {
            if (dataFromProcess[index][1].process.length != 0 && dataFromProcess[index][1].process[1] != "") {
                arrayProcess.push(dataFromProcess[index][1].process);
            }
        }
        for (let index = 0; index < arrayProcess.length; index++) {
            arrayProcess[index].sort((a, b) => parseInt(a) - parseInt(b));
        }

        return (arrayProcess);
    }

    numberAs(a, b) {
        return a - b;
    }

    ShowChartProcess() {
        var arrayForChart = this.dataProcess();
        console.log(arrayForChart)
        var count1 = 0, count2 = 0, count3 = 0, count4 = 0, count5 = 0;

        for (let index = 0; index < arrayForChart.length; index++) {
            for (let index_in = 0; index_in < arrayForChart[index].length; index_in++) {
                if (parseInt(arrayForChart[index][index_in]) === 5) {
                    count5++;
                }
            }
        }

        for (let index = 0; index < arrayForChart.length; index++) {
            for (let index_in = 0; index_in < arrayForChart[index].length; index_in++) {
                if (parseInt(arrayForChart[index][index_in]) === 4) {
                    count4++;
                }
            }
        }
        for (let index = 0; index < arrayForChart.length; index++) {
            for (let index_in = 0; index_in < arrayForChart[index].length; index_in++) {
                if (parseInt(arrayForChart[index][index_in]) === 3) {
                    count3++;
                }
            }
        }
        for (let index = 0; index < arrayForChart.length; index++) {
            for (let index_in = 0; index_in < arrayForChart[index].length; index_in++) {
                if (parseInt(arrayForChart[index][index_in]) === 2) {
                    count2++;
                }
            }
        }
        for (let index = 0; index < arrayForChart.length; index++) {
            for (let index_in = 0; index_in < arrayForChart[index].length; index_in++) {
                if (parseInt(arrayForChart[index][index_in]) === 1) {
                    count1++;
                }
            }
        }

        var data = [
            ['Element', 'Process', { role: 'style' }],
            ['Sempre é verdade', count5, 'blue'],
            ['Na maioria das vezes é verdade', count4, '#b87333'],
            ['Às vezes é verdade, às vezes não', count3, 'silver'],
            ['Na maioria das vezes não é verdade', count2, 'gold'],
            ['Nunca é verdade', count1, 'gold'],
        ];

        return data
    }



    render() {
        return (
            <div>
                <Chart
                    chartType="ColumnChart"
                    width="100%"
                    height="400px"
                    data={this.ShowChartProcess()}
                />
            </div>
        )
    }
}

export default charts;