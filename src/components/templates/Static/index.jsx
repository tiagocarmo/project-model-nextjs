import React from 'react';
import Head from 'next/head';
import Header from '../../organisms/Header';

import * as Style from './style';

const StaticPage = ({ title, content }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Header />
      <Style.ResponsiveGrid>
        <Style.Title>{title}</Style.Title>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </Style.ResponsiveGrid>
    </>
  );
};

export default StaticPage;
