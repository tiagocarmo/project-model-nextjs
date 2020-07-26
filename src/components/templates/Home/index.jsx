import React from 'react';
import Head from 'next/head';
import Header from '../../organisms/Header';

import * as Style from './style';

const Home = ({ children, dataTable, title }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Header />
      <Style.ResponsiveGrid>
        {children}
        {dataTable
          && <>
            <Style.Table>
              <thead>
                <tr>
                  <Style.TableHeader>Estado</Style.TableHeader>
                  <Style.TableHeader>Casos Confirmados</Style.TableHeader>
                  <Style.TableHeader>Mortes</Style.TableHeader>
                </tr>
              </thead>
              <tbody>
                {dataTable.data && dataTable.data.map((info, key) => {
                  return <Style.TableRow key={key}>
                    <td>{info.state}</td>
                    <td>{info.cases}</td>
                    <td>{info.deaths}</td>
                  </Style.TableRow>;
                })}
              </tbody>
            </Style.Table>
          </>
        }
      </Style.ResponsiveGrid>
    </>
  );
};

Home.defaultProps = {
  title: 'Report sobre a COVID-19 no Brasil'
};

export default Home;
