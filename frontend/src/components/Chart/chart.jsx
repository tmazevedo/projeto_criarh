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

        if (localStorage.getItem("company")) {
            var ref = firebase.database().ref(localStorage.getItem("company"));
            ref.on('value', snapshot => {
                this.setState({
                    data: (snapshot.val())
                });
            }, function (error) {
                console.log("Error: " + error.code);
            });
        } else {
            var ref = firebase.database().ref("criarh");
            ref.on('value', snapshot => {
                this.setState({
                    data: (snapshot.val())
                });
            }, function (error) {
                console.log("Error: " + error.code);
            });
        }
    }


    dataChart(value) {
        var data = Object.entries(this.state.data);
        var array = [];
        for (let index = 0; index < data.length; index++) {
            if (data[index][1][value].length != 0 && data[index][1][value][1] != "") {
                array.push(data[index][1][value]);
            }
        }
        for (let index = 0; index < array.length; index++) {
            array[index].sort((a, b) => parseInt(a) - parseInt(b));
        }
        return (array);
    }

    dataDemographic() {
        var data = Object.entries(this.state.data);
        var array = [];
        for (let index = 0; index < data.length; index++) {
            if (data[index][1].demographics.length != 0 && data[index][1].demographics[1] != "") {
                array.push(data[index][1].demographics);
            }
        }
        return array;
    }

    ShowChartDemographicsSchoolLevel() {
        var data = this.dataDemographic();
        console.log(data);
        var supComp = 0, SuperiorIncomp = 0, MedioComp = 0, MedioIncomp = 0, FundamentalComp = 0;

        for (let index = 0; index < data.length; index++) {
            if (data[index][0] == "SuperiorComp") {
                supComp++;
            }
        }

        for (let index = 0; index < data.length; index++) {
            if (data[index][0] === "SuperiorIncomp") {
                SuperiorIncomp++;
            }
        }
        for (let index = 0; index < data.length; index++) {
            if (data[index][0] === "MedioComp") {
                MedioComp++;
            }
        }
        for (let index = 0; index < data.length; index++) {
            if (data[index][0] === "MedioIncomp") {
                MedioIncomp++;
            }
        }

        for (let index = 0; index < data.length; index++) {
            if (data[index][0] === "FundamentalComp") {
                FundamentalComp++;
            }
        }

        var dataChart = [
            ['Element', 'Nivel de Escolaridade'],
            ['Superior Completo', supComp],
            ['Superior Incompleto', SuperiorIncomp],
            ['Ensino Médio Completo', MedioComp],
            ['Ensino Medio Incompleto', MedioIncomp],
            ['Ensino Fundamental Completo', FundamentalComp],
        ];

        return dataChart
    }

    ShowChartDemographicsTimeCompany() {
        var data = this.dataDemographic();
        var twentyPlus = 0, tenToTwenty = 0, fiveToTen = 0, oneToFive = 0;

        for (let index = 0; index < data.length; index++) {
            if (data[index][1] == "20Plus") {
                twentyPlus++;
            }
        }

        for (let index = 0; index < data.length; index++) {
            if (data[index][1] === "10to20") {
                tenToTwenty++;
            }
        }
        for (let index = 0; index < data.length; index++) {
            if (data[index][1] === "5to10") {
                fiveToTen++;
            }
        }
        for (let index = 0; index < data.length; index++) {
            if (data[index][1] === "1to5") {
                oneToFive++;
            }
        }


        var dataChart = [
            ['Element', 'Worked on Company'],
            ['20 Mais', twentyPlus],
            ['10 - 20', tenToTwenty],
            ['5 - 10', fiveToTen],
            ['1 - 5', oneToFive],
        ];

        return dataChart
    }

    ShowChartDemographicsGender() {
        var data = this.dataDemographic();
        var male = 0, female = 0, others = 0;

        for (let index = 0; index < data.length; index++) {
            if (data[index][3] == "male") {
                male++;
            }
        }

        for (let index = 0; index < data.length; index++) {
            if (data[index][3] === "others") {
                others++;
            }
        }
        for (let index = 0; index < data.length; index++) {
            if (data[index][3] === "female") {
                female++;
            }
        }

        var dataChart = [
            ['Element', 'Gender'],
            ['Masculino', male],
            ['Feminino', female],
            ['Outros', others],
        ];

        return dataChart
    }



    numberAs(a, b) {
        return a - b;
    }


    ShowChart(option) {
        var arrayForChart = this.dataChart(option);
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
            ['Element', option],
            ['Sempre é verdade', count5],
            ['Na maioria das vezes é verdade', count4],
            ['Às vezes é verdade, às vezes não', count3],
            ['Na maioria das vezes não é verdade', count2],
            ['Nunca é verdade', count1],
        ];

        return data
    }



    render() {
        return (
            <div style={{ backgroundColor: '#F5F5F5', height: '100%' }}>
                <br />
                <br />
                <br />
                <div style={{ backgroundColor: "#ffff", paddingTop: "20", width: '90%', margin: 'auto', overflow: 'visible', height: "80%", display: "flex", flexDirection: "column" }}>

                    <b style={{ width: "100%", textAlign: "center", marginTop: 30, fontSize: 20 }}>Demografia</b>

                    <div style={{ height: "255px", width: "100%", justifyContent: "center", display: "flex", flexDirection: "row" }}>
                        <div style={{ width: "26%", height: "100%" }}>
                            <Chart
                                chartType="ColumnChart"
                                data={this.ShowChartDemographicsSchoolLevel()}
                            />
                        </div>
                        <div style={{ width: "26%", height: "100%" }}>
                            <Chart
                                chartType="ColumnChart"
                                data={this.ShowChartDemographicsTimeCompany()}
                            />
                        </div>
                        <div style={{ width: "26%", height: "100%" }}>
                            <Chart
                                chartType="ColumnChart"
                                data={this.ShowChartDemographicsGender()}
                            />
                        </div>
                    </div>

                    <div style={{ width: "100%", justifyContent: "center", paddingTop: 10, display: "flex", flexDirection: "row" }}>
                        <b style={{ width: "26%", textAlign: "center", fontSize: 20 }}>Espaço</b>
                        <b style={{ width: "26%", textAlign: "center", fontSize: 20 }}>Objetivo</b>
                        <b style={{ width: "26%", textAlign: "center", fontSize: 20 }}>Processo</b>
                    </div>

                    <div style={{ height: "255px", width: "100%", justifyContent: "center", display: "flex", flexDirection: "row" }}>
                        <div style={{ width: "26%", height: "100%" }}>
                            <Chart
                                chartType="ColumnChart"
                                data={this.ShowChart("space")}
                            />
                        </div>
                        <div style={{ width: "26%", height: "100%" }}>
                            <Chart
                                chartType="ColumnChart"
                                data={this.ShowChart("purpose")}
                            />
                        </div>
                        <div style={{ width: "26%", height: "100%" }}>
                            <Chart
                                chartType="ColumnChart"
                                data={this.ShowChart("process")}
                            />
                        </div>
                    </div>


                </div>
            </div>
        )
    }
}

export default charts;