import React from 'react';
import { expect } from 'chai';
import Enzyme, { mount, render, shallow } from 'enzyme'
import sinon from 'sinon';
import Adapter from 'enzyme-adapter-react-15';

import TodoItem from '../../src/containers/todo/components/daily/component/item';
import Checkbox from '../../src/components/Checkbox';

Enzyme.configure({ adapter: new Adapter() });

describe('Test TodoItem Component', () => {
  const deleteCb = sinon.spy();
  const id = "test";
  const complete = true;
  const item = mount(<TodoItem id={id} complete={complete} handleEdit={deleteCb} />);
  it('test edit button should toogle <p> or pencil icon', () => {
    expect(item.find('input').length).to.equal(0);
    item.find('p').simulate('click');
    expect(item.find('input').length).to.equal(1);
    item.find('.icon-edit').simulate('click');
    expect(item.find('input').length).to.equal(1);
  });
  
  it('test delete btn', () => {
    item.find('.icon-delete').simulate('click');
    const { args } = deleteCb;
    expect(args[0][0]).to.equal(id);
    expect(args[0][1]).to.deep.equal({operator: 'delete', value: true});
  });
  
})