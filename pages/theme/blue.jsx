import React, { useState, useEffect } from 'react';
import CovidAPIClient from '../../src/client/CovidAPIClient';
import HomeWithTheme from '../../src/components/templates/HomeWithTheme';
import theme from '../../src/themes/blue';

const HomePage = () => {
  const [covidData, setCovidData] = useState();
  useEffect(() => {
    if (!covidData) {
      CovidAPIClient.getReportAllState().then((data) => {
        setCovidData(data);
      });
    }
  }, [covidData]);

  return (
    <HomeWithTheme dataTable={covidData} theme={theme}>
      <p>Abaixo segue um exemplo de implementação de <a href='https://pt-br.reactjs.org/docs/hooks-intro.html' target='blank' rel='noopener noreferrer'>React Hooks</a> com <a href='https://github.com/axios/axios' target='blank' rel='noopener noreferrer'>axios</a> utilizando a <a href='https://covid19-brazil-api.now.sh/' target='blank' rel='noopener noreferrer'>API Covid19 Brazil</a>.</p>
    </HomeWithTheme>
  );
};

export default HomePage;
