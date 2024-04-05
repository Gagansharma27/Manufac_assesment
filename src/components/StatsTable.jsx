import React from 'react'
import { groupByAlcoholType, mean, median, mode } from '../helper/utilityFunctions.js';
import '../styles/statsTable.css';


function StatsTable({ attribute, data }) {


    // grouped alcohol by types (this will help whenever more alcohol type is added)
    const groupedByAlcohol = groupByAlcoholType(data);


    //these array holds class wise calculated mean median and mode
    const calculatedMean = Object.keys(groupedByAlcohol).map(key => (mean(groupedByAlcohol[key], attribute)))
    const calculateMode = Object.keys(groupedByAlcohol).map(key => (mode(groupedByAlcohol[key], attribute)))
    const calculateMedian = Object.keys(groupedByAlcohol).map(key => (median(groupedByAlcohol[key], attribute)))



    return (
        <div>
            <h1>{attribute} Stats Table</h1>
            <table className='styled-table'>
                <thead>
                    <tr>
                        <th>Measure</th>
                        {
                            Object.keys(groupedByAlcohol).map((key) => {
                                return <th key={key}>
                                    {`class ${[key]}`}
                                </th>
                            })
                        }
                    </tr>

                </thead>

                <tbody>
                    <tr>
                        <th>{attribute} Mean</th>
                        {
                            calculatedMean.map((mean, index) => <td key={index}> {mean}</td>)
                        }
                    </tr>
                    <tr>
                        <th>{attribute} Median</th>
                        {
                            calculateMedian.map((median, index) => <td key={index}> {median}</td>)
                        }
                    </tr>
                    <tr>
                        <th>{attribute} Mode</th>
                        {
                            calculateMode.map((mode, index) => <td key={index}>{mode}</td>)
                        }
                    </tr>
                </tbody>

            </table>
        </div>
    )
}

export default StatsTable