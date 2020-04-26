import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import NavigationItems from './NavigationItems';
import NavigationItem from './NavigationItem/NavigationItem';

configure({ adapter: new Adapter() });

describe('<NavigationItems />', () => {
    let wrapper = null;
    beforeEach(()=>{
        wrapper = shallow(<NavigationItems />);
    })
    it('should render two <NavigationItem /> elements if not authenticated', () => {
        //wont require whole application instaed will make shallow copy of Navigation Item
        expect(wrapper.find(NavigationItem)).toHaveLength(2);
    })
    it('should render three <NavigationItem /> elements if authenticated', () => {
        //one way is following way whereas other way is better
        //wrapper = shallow(<NavigationItems isAuthenticate />);
        wrapper.setProps({isAuthenticate: true});
        expect(wrapper.find(NavigationItem)).toHaveLength(3);
    })
});