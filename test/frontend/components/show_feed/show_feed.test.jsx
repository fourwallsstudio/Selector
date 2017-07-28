import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import ShowFeed from '../../../../frontend/components/show_feed/show_feed';
import ShowFeedItem from '../../../../frontend/components/show_feed/show_feed_item';


describe('<ShowFeed />', () => {
  it('renders 10 <ShowFeedItem /> components', () => {
    const wrapper = shallow(<ShowFeed /> );
    expect(wrapper.find(ShowFeedItem)).to.have.length(10);
  })
})
