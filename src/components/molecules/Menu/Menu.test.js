import React from 'react';
import { render } from '@testing-library/react';
import * as nextRouter from 'next/router';

import Menu from '.';

describe('Testing Menu molecule', () => {
  nextRouter.useRouter = jest.fn();
  nextRouter.useRouter.mockImplementation(() => ({ route: '/' }));

  test('Should render home link correctly', () => {
    const { queryByText } = render(<Menu />);
    const link = queryByText('Home');
    expect(link).not.toBeNull();
    expect(link).toBeInTheDocument();
  });

  test('Should render about link correctly', () => {
    const { queryByText } = render(<Menu />);
    const link = queryByText('Sobre');
    expect(link).not.toBeNull();
    expect(link).toBeInTheDocument();
  });

  test('Should render privacy-policy link correctly', () => {
    const { queryByText } = render(<Menu />);
    const link = queryByText('Política Privacidade');
    expect(link).not.toBeNull();
    expect(link).toBeInTheDocument();
  });
});
