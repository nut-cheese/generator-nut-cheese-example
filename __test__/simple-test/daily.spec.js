import React from 'react';
import { expect } from 'chai';
import Enzyme, { mount, render, shallow } from 'enzyme'
import sinon from 'sinon';
import Adapter from 'enzyme-adapter-react-15';
import chalk from 'chalk';

import Daily from '../../src/containers/todo/components/daily';
import TodoItem from '../../src/containers/todo/components/daily/component/item';

import style from '../../src/containers/todo/components/daily/index.scss';

const log = console.log;

Enzyme.configure({ adapter: new Adapter() });

describe('Test daily component', () => {
  const mockList = [{ id: 1, desc: '2', completed: true }, { id: 1, desc: '2', completed: true }];
  function renderDaily(flag = true) {
    return shallow(<Daily completed={flag} list={mockList} />);
  }
  it('test render TodoItem component', () => {
    expect(renderDaily().find('TodoItem').length).to.equal(mockList.length);
  });
  
  it('test title has completed className when Daily get completed prop', () => {
    expect(renderDaily(false).find('p').hasClass(style.completed)).to.equal(false);
  });
  
  it('test title hasn\'tcompleted className when Daily didn\'t has completed prop', () => {
    expect(renderDaily(true).find('p').hasClass(style.completed)).to.equal(true);
  });
  
});