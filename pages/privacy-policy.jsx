import React from 'react';
import Static from '../src/components/templates/Static';

const data = {
  title: 'Política Privacidade',
  content: `<p>A sua privacidade é importante!</p>`
    + `<p>Sendo assim não vamos gravar seus dados de acesso em nenhum momento.</p>`
    + `<p>Esta página foi criada apenas para demonstrar a reutilização do componente Pages/Static.</p>`
};

const PrivacyPolicyPage = () => {
  return (
    <Static
      title={data.title}
      content={data.content}
    />
  );
};

export default PrivacyPolicyPage;
