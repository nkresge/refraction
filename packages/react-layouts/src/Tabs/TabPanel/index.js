/**
 * Copyright (c) Quid, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
// @flow
import React from 'react';
import styled from '@emotion/styled/macro';
import { sizes } from '@quid/theme';

export type Props = {
  label: string,
  id: string,
  className?: string,
};

const TabPanel = styled(({ label, id, className, ...props }: Props) => (
  <div id={`panel_${id}`} aria-labelledby={`tab_${id}`} {...props} />
))`
  padding: calc(${sizes.regular} + 3px);
`;

export default TabPanel;
