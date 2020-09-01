import React from 'react';
import Chance from 'chance';
import { render } from '@testing-library/react';

import MenuLink from '.';

describe('Testing MenuLink atom', () => {
  const chance = new Chance();
  const text = chance.word();
  const url = chance.url();

  test('Should render text correctly', () => {
    const { queryByText } = render(<MenuLink url={url} text={text} />);
    const link = queryByText(text);
    expect(link).not.toBeNull();
    expect(link).toBeInTheDocument();
  });
});
