/**
 * Copyright (c) Quid, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
// @flow
import * as React from 'react';
import css from '@emotion/css/macro';
import styled from '@emotion/styled/macro';
import { textStyles, withFallback as wf, sizes } from '@quid/theme';

export type Props = {
  children: React.Node,
  id: string,
  isActive: boolean,
  onClick: Function,
};

const TabButton = styled.button`
  ${textStyles('normal', 'bold')};
  border: 0;
  font-size: inherit;
  font-family: inherit;
  cursor: pointer;
  background-color: inherit;

  position: relative;
  flex: 1;
  padding: ${sizes.regular};
  line-height: 1;

  &:focus:not(:focus-visible) {
    outline: 0;
  }
  &:focus-visible {
    z-index: 1;
  }

  ${wf(props => {
    return (
      props.isActive &&
      css`
        background-color: ${props.theme.primaryInverse};
        color: ${props.theme.selected};
      `
    );
  })};
`;

const Tab = styled(({ isActive, id, onClick, children, ...props }: Props) => {
  return (
    <li {...props}>
      <TabButton
        isActive={isActive}
        id={`${id}_tab`}
        aria-controls={`${id}_panel`}
        aria-selected={isActive}
        role="tab"
        onClick={onClick}
      >
        {children}
      </TabButton>
    </li>
  );
})`
  flex: 1;
  display: flex;
`;

export default Tab;
