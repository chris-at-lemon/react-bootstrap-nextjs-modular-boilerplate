import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

import { Container, Row, Col } from 'reactstrap';


export const LayoutMain = ({ children }: any) => {

    return (
        <Container>
            <Row>
                <Col>
                    {children}
                </Col>
            </Row>
        </Container>
        
    )
}