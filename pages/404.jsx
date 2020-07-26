import React from 'react';
import Static from '../src/components/templates/Static';

const data = {
  title: 'Pagina não encontrada',
  content: `<p>Não conseguimos encontrar a página solicitada 😔</p>`
};

const NotFoundPage = () => {
  return (
    <Static
      title={data.title}
      content={data.content}
    />
  );
};

export default NotFoundPage;
