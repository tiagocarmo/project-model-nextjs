import React from 'react';
import CovidAPIClient from '../src/client/CovidAPIClient';
import Home from '../src/components/templates/Home';

const SSR = ({ covidData }) => {
  return (
    <Home dataTable={covidData}>
      <p>Abaixo segue um exemplo de implementação de <a href='https://pt-br.reactjs.org/docs/hooks-intro.html' target='blank' rel='noopener noreferrer'>React Hooks</a> com <a href='https://github.com/axios/axios' target='blank' rel='noopener noreferrer'>axios</a> utilizando a <a href='https://covid19-brazil-api.now.sh/' target='blank' rel='noopener noreferrer'>API Covid19 Brazil</a>.</p>
    </Home>
  );
};

SSR.getInitialProps = async () => {
  const covidData = await CovidAPIClient.getReportAllState();
  return {
    covidData
  };
};

export default SSR;
