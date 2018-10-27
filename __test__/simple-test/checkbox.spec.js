import React from 'react';
import { expect } from 'chai';
import Enzyme, { mount, render, shallow } from 'enzyme';
import sinon from 'sinon';
import Adapter from 'enzyme-adapter-react-15';

import Checkbox from '../../src/components/Checkbox';

Enzyme.configure({ adapter: new Adapter() });


describe('Test Checkbox component', () => {
  it('checkbox checked should return current img icon', () => {
    const checkbox = render(<Checkbox checked={true} />)
    expect(checkbox.find('img').attr('src')).to.equal('/images/yes.svg');
  });

  it('checkbox not checked should return null', () => {
    const checkbox = shallow(<Checkbox checked={false} />);
    expect(checkbox.props().children).to.equal(null);
  });

  it('simulate checkbox click event', () => {
    const flag = false;
    const onClick = sinon.spy();
    const checkbox = shallow(<Checkbox checked={flag} onchange={onClick} />);
    checkbox.find('div').simulate('click');
    expect(onClick.args[0]).to.include(!flag);
  });
});
