import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import CovidAPIClient from '../../../src/client/CovidAPIClient';
import Home from '../../../src/components/templates/Home';

const HomePage = () => {
  const [covidData, setCovidData] = useState();
  const router = useRouter();

  useEffect(() => {
    const { uf } = router.query;
    if (!covidData && uf) {
      CovidAPIClient.getReportAllState().then((data) => {
        const filteredCovidState = uf ? { data: data.data.filter(obj => obj.uf === uf.toLocaleUpperCase()) } : data;
        setCovidData(filteredCovidState);
      });
    }
  }, [router, covidData]);

  return (
    <Home dataTable={covidData}>
      <p>Abaixo segue um exemplo de implementação de <a href='https://pt-br.reactjs.org/docs/hooks-intro.html' target='blank' rel='noopener noreferrer'>React Hooks</a> com <a href='https://github.com/axios/axios' target='blank' rel='noopener noreferrer'>axios</a> utilizando a <a href='https://covid19-brazil-api.now.sh/' target='blank' rel='noopener noreferrer'>API Covid19 Brazil</a>.</p>
    </Home>
  );
};

export default HomePage;
