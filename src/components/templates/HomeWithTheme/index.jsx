import React from 'react';
import Head from 'next/head';
import Header from '../../organisms/Header';

import * as Style from './style';
import { ThemeProvider } from 'styled-components';

const HomeWithTheme = ({ children, dataTable, title, theme }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Header />
      <ThemeProvider theme={theme}>
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
      </ThemeProvider>
    </>
  );
};

HomeWithTheme.defaultProps = {
  title: 'Report sobre a COVID-19 no Brasil'
};

export default HomeWithTheme;
