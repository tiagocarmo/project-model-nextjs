import React from 'react';
import Static from '../src/components/templates/Static';

const data = {
  title: 'Sobre',
  content: `<p><em>react-spa</em> é apenas uma demonstração de um projeto `
    + ` <a href="https://pt-br.reactjs.org/docs/getting-started.html" target="_blank" rel="noopener noreferrer">React (SPA)</a>, utilizando `
    + ` <a href="https://bradfrost.com/blog/post/atomic-web-design/" target="_blank" rel="noopener noreferrer">Atomic Design</a> para organização dos componentes, `
    + ` <a href="https://github.com/axios/axios" target="_blank"rel="noopener noreferrer">axios</a> para as chamadas de API, `
    + ` <a href="https://styled-components.com/" target="_blank"rel="noopener noreferrer">Styled Components</a> para estilização, e `
    + ` <a href="https://testing-library.com/docs/react-testing-library/intro" target="_blank"rel="noopener noreferrer">RTL</a> nos testes.</p>`
    + `<p>✌️</p>`
};

const AboutPage = () => {
  return (
    <Static
      title={data.title}
      content={data.content}
    />
  );
};

export default AboutPage;
