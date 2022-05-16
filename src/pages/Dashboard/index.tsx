import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import RadialChart from './RadialChart.js';
// import ApexCharts from 'apexcharts';

import './index.scss';

const Dashboard = () => {
    // const series = [
    //     {
    //         name: 'South',
    //         data: generateDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 20, {
    //             min: 10,
    //             max: 60
    //         })
    //     },
    //     {
    //         name: 'North',
    //         data: generateDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 20, {
    //             min: 10,
    //             max: 20
    //         })
    //     },
    //     {
    //         name: 'Central',
    //         data: generateDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 20, {
    //             min: 10,
    //             max: 15
    //         })
    //     }
    // ];

    // const options = {
    //     chart: {
    //         type: 'area',
    //         height: 350,
    //         stacked: true,
    //         events: {
    //             selection: function (chart, e) {
    //                 console.log(new Date(e.xaxis.min))
    //             }
    //         },
    //     },
    //     colors: ['#008FFB', '#00E396', '#CED4DC'],
    //     dataLabels: {
    //         enabled: false
    //     },
    //     stroke: {
    //         curve: 'smooth'
    //     },
    //     fill: {
    //         type: 'gradient',
    //         gradient: {
    //             opacityFrom: 0.6,
    //             opacityTo: 0.8,
    //         }
    //     },
    //     legend: {
    //         position: 'top',
    //         horizontalAlign: 'left'
    //     },
    //     xaxis: {
    //         type: 'datetime'
    //     },
    // };

    return (
        <>
            <Container>
                <p className="page-title"> DASHBOARD </p>

                <div className="NT-Card mt-5">
                    <Row>
                        <Col sm="4" style={{ borderRight: '1px solid #5C5353' }}>
                            <p className="mb-0" style={{ fontSize: '18px', letterSpacing: '-0.06rem' }}>TOTAL VALUE LOCKED</p>
                            <p style={{ fontSize: '30px', fontWeight: '500' }}>165,859,532 <span style={{ fontSize: '16px' }}>USD</span></p>

                            <div className='mt-4 d-flex align-items-center'>
                                <RadialChart
                                    progress={75}
                                    color="#F9D85E"
                                    strokeWidth={22}
                                    radius={66}
                                />

                                <div className='ml-4'>
                                    <div>
                                        <div className='d-flex align-items-center'>
                                            <div className='chart-state' style={{ background: '#F9D85E' }} />
                                            <span className='ml-2'>STABLE COINS</span>
                                        </div>
                                        <span style={{ fontSize: '12px', fontStyle: 'italic' }}>$ 40,859,532,875</span>
                                    </div>
                                    <div className='mt-3'>
                                        <div className='d-flex align-items-center'>
                                            <div className='chart-state' style={{ background: 'black' }} />
                                            <span className='ml-2'>OTHER ASSETS</span>
                                        </div>
                                        <span style={{ fontSize: '12px', fontStyle: 'italic' }}>$ 80,569,902,875</span>
                                    </div>
                                </div>
                            </div>
                        </Col>

                        <Col sm="8">
                            {/* <ApexCharts /> */}
                            {/* <ReactApexChart options={options} series={series} type="area" height={350} /> */}
                        </Col>
                    </Row>
                </div>
            </Container>
        </>
    );
};

export default Dashboard;