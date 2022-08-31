/* eslint-disable import/export */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import type { FC, ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';

const Wrapper: FC<{
  children: ReactElement
}> = ({ children }) => {
  return <>{children}</>;
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { wrapper: Wrapper, ...options });

export * from '@testing-library/react';

export { customRender as render };
