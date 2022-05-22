import * as React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import externalLink from 'assets/img/External_Link.svg';

import RadialChart from './MultiRadialChart.js';

import Chart from 'react-apexcharts';

const MyPage = () => {

    const series = [44, 55, 67, 83];
    const options = {
        chart: {
            height: 350,
        },
        plotOptions: {
            radialBar: {
                dataLabels: {
                    name: {
                        fontSize: '22px',
                    },
                    value: {
                        fontSize: '16px',
                    },
                    total: {
                        show: true,
                        label: 'Total',
                    }
                }
            }
        },
        labels: ['Apples', 'Oranges', 'Bananas', 'Berries'],
    };

    return (
        <>
            <Container className='mb-5'>
                <div className='d-flex align-items-baseline'>
                    <p className="page-title"> MY PAGE </p>
                    <div style={{ cursor: 'pointer' }}>
                        <span className='ml-3' style={{ fontFamily: 'SF Pro Text Bold', color: '#CEC0C0' }}>Docs</span>
                        <img className='ml-1' src={externalLink} />
                    </div>
                </div>

                <Row className='mt-4'>
                    <Col md='7'>
                        <div className="NT-Card">
                            <RadialChart
                                progress={75}
                                color="#F9D85E"
                                strokeWidth={12}
                                radius={66}
                            />
                            {/* <Chart options={options} series={series} type="radialBar" height='300' /> */}
                        </div>
                    </Col>
                </Row>

            </Container>
        </>
    );
};

export default MyPage;