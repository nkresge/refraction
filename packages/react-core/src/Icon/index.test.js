/**
 * Copyright (c) Quid, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
// @flow
import * as React from 'react';
import { mount } from 'enzyme';
import Icon from '.';

it('renders the expected markup', () => {
  const wrapper = mount(<Icon name="network" />);

  expect(wrapper).toMatchSnapshot();
});

it('renders a non squared Icon', () => {
  const wrapper = mount(<Icon name="network" squared={false} />);

  expect(wrapper).toMatchSnapshot();
});
