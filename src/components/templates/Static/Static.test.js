import React from 'react';
import Chance from 'chance';
import { render } from '@testing-library/react';
import * as nextRouter from 'next/router';

import Static from '.';

describe('Testing Static template', () => {
  const chance = new Chance();
  const title = chance.sentence();
  const content = chance.sentence();

  nextRouter.useRouter = jest.fn();
  nextRouter.useRouter.mockImplementation(() => ({ route: '/' }));

  test('Should display the title and content provided', () => {
    const { queryByText } = render(<Static title={title} content={content} />);
    const customTitle = queryByText(title);
    const customContent = queryByText(content);
    expect(customTitle).not.toBeNull();
    expect(customContent).not.toBeNull();
    expect(customTitle).toBeInTheDocument();
    expect(customContent).toBeInTheDocument();
  });
});
