import React from 'react';
import Chance from 'chance';
import { render } from '@testing-library/react';
import * as nextRouter from 'next/router';

import Home from '.';

describe('Testing Home template', () => {
  const chance = new Chance();
  const children = chance.sentence();

  nextRouter.useRouter = jest.fn();
  nextRouter.useRouter.mockImplementation(() => ({ route: '/' }));

  test('Should display the children provided', () => {
    const { queryByText } = render(<Home children={children} />);
    const customChildren = queryByText(children);
    expect(customChildren).not.toBeNull();
    expect(customChildren).toBeInTheDocument();
  });
});
