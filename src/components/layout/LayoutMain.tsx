import React, { useEffect, useState } from 'react';
import Head from 'next/head';

import { Container, Row, Col } from 'reactstrap';

export const LayoutMain = ({ children }: any) => {

	return (
		<>
			<Head>
				<title>SEO and Speed test friendly boilerplates</title>
				<meta name="title" content="SEO and Speed test friendly boilerplates" key="title_name" />
				<meta
					name="description"
					content="Lightning fast, highly optimised pages Google will love"
					key="description_name"
				/>

				<meta property="og:type" content="website" key="type_property" />
				<meta property="og:site_name" content="Lemon Digital Design" key="name_property" />
				<meta property="og:title" content="SEO and Speed test friendly boilerplates" key="title_property" />
				<meta
					property="og:description"
					content="Lightning fast, highly optimised pages Google will love"
					key="description_property"
				/>
				<meta property="og:keywords" content="SEO, Google, Speed test" key="keywords_property" />
				<meta property="og:url" content="https://www.carsvansandbikes.com" key="url" />
				<meta
					property="og:image"
					itemProp="image"
					content="https://cdn.carsvansandbikes.com/image/upload/media/documents/SharingLogo-1200x630.png"
					key="image"
				/>
				<meta name="application-name" content="lemon-digital.com" key="appName" />
			</Head>

			<Container>
				<Row>
					<Col>
						{children}
					</Col>
				</Row>
			</Container>
		</>
	)
}