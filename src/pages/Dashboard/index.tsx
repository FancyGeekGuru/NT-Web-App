import React, { useState } from 'react';
import Chart from 'react-apexcharts';
import { Container, Row, Col, Dropdown } from 'react-bootstrap';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import RadialChart from './RadialChart.js';

import { coins } from './data';

import './index.scss';

const Dashboard = () => {
    const series = [
        {
            name: 'South',
            data: [20, 16, 28, 26, 21, 23, 33, 30, 24, 40, 36, 52, 44, 60]
        }
    ];

    const options = {
        chart: {
            id: 'basic-bar',
            width: '100%',
            staked: true,
            toolbar: {
                show: false
            }
        },
        xaxis: {
            categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1998, 1998, 1999, 2000, 2001, 2002],
            labels: {
                show: false
            },
            axisBorder: {
                show: false
            },
            axisTicks: {
                show: false,
            },
            crosshairs: {
                show: false
            },
            tooltip: {
                enabled: false
            }
        },
        yaxis: {
            show: false,
            min: 0,
        },
        grid: {
            show: false,
        },
        colors: ['#F9D85E'],
        dataLabels: {
            enabled: false
        },
        fill: {
            type: 'gradient',
            gradient: {
                opacityFrom: 0.4,
                opacityTo: 0,
            }
        },
        stroke: {
            show: true,
            width: 1,
        },
    };
    return (
        <>
            <Container className='mb-5'>
                <p className="page-title"> DASHBOARD </p>

                <div className="NT-Card mt-5">
                    <Row className='d-flex align-items-center'>
                        <Col className="borderRight" md="4">
                            <p className="mb-0" style={{ fontSize: '17px', letterSpacing: '-0.01rem', fontFamily: 'SF Pro Text Heavy' }}>TOTAL VALUE LOCKED</p>
                            <p style={{ fontSize: '28px', fontFamily: 'SF Pro Text Heavy' }}>165,859,532 <span style={{ fontSize: '17px', fontFamily: 'SF Pro Text Heavy' }}>USD</span></p>

                            <Row className='mt-4 d-flex align-items-center justify-content-center'>
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
                                            <span className='ml-2' style={{ fontFamily: 'SF Pro Text Bold' }}>STABLE COINS</span>
                                        </div>
                                        <span style={{ fontSize: '12px', fontStyle: 'italic', fontFamily: 'SF Pro Text' }}>$ 40,859,532,875</span>
                                    </div>
                                    <div className='mt-3'>
                                        <div className='d-flex align-items-center'>
                                            <div className='chart-state' style={{ background: 'black' }} />
                                            <span className='ml-2' style={{ fontFamily: 'SF Pro Text Bold' }}>VOLATILE COINS</span>
                                        </div>
                                        <span style={{ fontSize: '12px', fontStyle: 'italic', fontFamily: 'SF Pro Text' }}>$ 80,569,902,875</span>
                                    </div>
                                </div>
                            </Row>
                        </Col>

                        <Col md="8">
                            <Chart options={options} series={series} type="area" height='300' />
                        </Col>
                    </Row>
                </div>

                <div className="NT-Card mt-5">
                    <Table>
                        <Thead>
                            <Tr>
                                <Th width='28%'> Name </Th>
                                <Th width='20%'> APY </Th>
                                <Th > TVL </Th>
                                <Th width='30%'> Actions </Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {
                                coins.map((coin, index) => {
                                    return (
                                        <Tr key={index}>
                                            <Td>
                                                <div className='d-flex align-items-center'>
                                                    <img src={coin.url} />
                                                    <div className='d-flex flex-column ml-4'>
                                                        <span style={{ fontFamily: 'SF Pro Text Heavy', fontSize: '16px' }}>{coin.identifier}</span>
                                                        <span style={{ fontFamily: 'SF Pro Text', fontSize: '13px', color: '#CEC0C0' }}>{coin.name}</span>
                                                    </div>
                                                </div>
                                            </Td>
                                            <Td>
                                                <span style={{ fontFamily: 'SF Pro Text', fontSize: '13px', color: '#CEC0C0' }}> {coin.APY + '%'}</span>
                                            </Td>
                                            <Td>
                                                <div className='d-flex flex-column'>
                                                    <span style={{ fontFamily: 'SF Pro Text', fontSize: '13px', color: '#CEC0C0' }}> {coin.value + ' ' + coin.identifier}</span>
                                                    <span style={{ fontFamily: 'SF Pro Text', fontSize: '13px', color: '#CEC0C0' }}> {coin.tValue + ' USD Value'}</span>
                                                </div>
                                            </Td>
                                            <Td>
                                                <button className='deposit-but'>Deposit</button>
                                                <button className='withdraw-but'>Withdraw</button>
                                            </Td>
                                        </Tr>
                                    );
                                })
                            }
                        </Tbody>
                    </Table>
                </div>

                <div className="NT-Card mt-5">
                    <Row>
                        <Col md="3" className="borderRight">
                            <span style={{ fontFamily: 'SF Pro Text Heavy', fontSize: '18px' }}>HOW MUCH CAN I EARN?</span>

                            <div className='d-flex flex-column mt-5'>
                                <Dropdown className="w-100" drop='down' style={{ width: '150px' }}>
                                    <Dropdown.Toggle className='token-id-toggle' id="token-id">
                                        <span style={{ fontFamily: 'SF Pro Text Heavy', fontSize: '22px' }}>STABLE COIN</span>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu className="token-id-menu">
                                        <Dropdown.Item>
                                            <span style={{ fontFamily: 'SF Pro Text ', fontSize: '16px' }}>STABLE COIN</span>
                                        </Dropdown.Item>
                                        <Dropdown.Item>
                                            <span style={{ fontFamily: 'SF Pro Text', fontSize: '16px' }}>VOLATILE COIN</span>
                                        </Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                                <span style={{ fontFamily: 'SF Pro Text', fontSize: '11px', color: '#CEC0C0' }}>Your Deposit</span>
                            </div>

                            <div className='d-flex flex-column mt-2'>
                                <input className='amount-input'/>
                                <span style={{ fontFamily: 'SF Pro Text', fontSize: '11px', color: '#CEC0C0' }}>Amount in USD</span>
                            </div>
                        </Col>

                        <Col md="9">
                            <Row className='d-flex align-items-center'>
                                <Col md="3">
                                    <div className='d-flex flex-column'>
                                        <span style={{ fontFamily: 'SF Pro Text Heavy', fontSize: '32px' }}>$148,700</span>
                                        <span style={{ fontFamily: 'SF Pro Text', fontSize: '11px', color: '#CEC0C0' }}>Invest Earned</span>
                                    </div>

                                    <div className='d-flex flex-column mt-3'>
                                        <span style={{ fontFamily: 'SF Pro Text Heavy', fontSize: '32px' }}>$448,700</span>
                                        <span style={{ fontFamily: 'SF Pro Text', fontSize: '11px', color: '#CEC0C0' }}>Total</span>
                                    </div>

                                    <div className='d-flex align-items-center mt-4'>
                                        <div className='chart-state' style={{ background: '#F9D85E' }} />
                                        <span className='ml-2' style={{ fontFamily: 'SF Pro Text Bold', color: '#CEC0C0', fontSize: '12px' }}>NT Performance</span>
                                    </div>
                                    <div className='d-flex align-items-center mt-2'>
                                        <div className='chart-state' style={{ background: 'black' }} />
                                        <span className='ml-2' style={{ fontFamily: 'SF Pro Text Bold', color: '#CEC0C0', fontSize: '12px' }}>Traditional Market</span>
                                    </div>

                                </Col>
                                <Col md="9">
                                    <Chart options={options} series={series} type="area" height='300' />
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </div>

                <div className="NT-Card mt-5">
                    <p className="mb-0" style={{ fontSize: '17px', letterSpacing: '-0.01rem', fontFamily: 'SF Pro Text Heavy' }}>TVL OF THE ENTIRE ECOSYSTEM</p>
                    <p style={{ fontSize: '28px', fontFamily: 'SF Pro Text Heavy' }}>525,859,532,875 <span style={{ fontSize: '17px', fontFamily: 'SF Pro Text Heavy' }}>USD</span></p>

                    <Chart options={options} series={series} type="area" height='300' />
                </div>
            </Container>
        </>
    );
};

export default Dashboard;