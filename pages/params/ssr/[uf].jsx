import React from 'react';
// import { useRouter } from 'next/router';
import CovidAPIClient from '../../../src/client/CovidAPIClient';
import Home from '../../../src/components/templates/Home';

const SSR = ({ covidData, uf }) => {
  // const router = useRouter();
  // const { uf } = router.query;
  // const filteredCovidState = uf ? { data: covidData.data.filter(obj => obj.uf === uf.toLocaleUpperCase()) } : covidData;
  return (
    <Home dataTable={covidData}>
      {uf && <p>Vamos filtrar pelo estado: {uf}</p>}
      <p>Abaixo segue um exemplo de implementação de <a href='https://pt-br.reactjs.org/docs/hooks-intro.html' target='blank' rel='noopener noreferrer'>React Hooks</a> com <a href='https://github.com/axios/axios' target='blank' rel='noopener noreferrer'>axios</a> utilizando a <a href='https://covid19-brazil-api.now.sh/' target='blank' rel='noopener noreferrer'>API Covid19 Brazil</a>.</p>
    </Home>
  );
};

SSR.getInitialProps = async (ctx) => {
  const covidData = await CovidAPIClient.getReportAllState();
  const { uf } = ctx.query;
  const filteredCovidState = uf ? { data: covidData.data.filter(obj => obj.uf === uf.toLocaleUpperCase()) } : covidData;
  return {
    covidData: filteredCovidState,
    uf
  };
};

export default SSR;
