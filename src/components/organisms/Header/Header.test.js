import React from 'react';
import Chance from 'chance';
import { render } from '@testing-library/react';
import * as nextRouter from 'next/router';

import Header from '.';

describe('Testing Header organism', () => {
  const chance = new Chance();
  const title = chance.sentence();

  nextRouter.useRouter = jest.fn();
  nextRouter.useRouter.mockImplementation(() => ({ route: '/' }));

  test('Should display the default value, when the title is not informed', () => {
    const { queryByText } = render(<Header />);
    const defaultTitle = queryByText('Report sobre a COVID-19 no Brasil');
    expect(defaultTitle).not.toBeNull();
    expect(defaultTitle).toBeInTheDocument();
  });

  test('Should display the title provided', () => {
    const { queryByText } = render(<Header title={title} />);
    const customTitle = queryByText(title);
    expect(customTitle).not.toBeNull();
    expect(customTitle).toBeInTheDocument();
  });
});
