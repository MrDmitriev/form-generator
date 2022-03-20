import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import Tab from '../Tab';

Enzyme.configure({ adapter: new Adapter() });

describe('Tab component', () => {
	it('Should set active tab after click on a particular tab', () => {
		const onTabClick = jest.fn();

		const props = {
			tabName: 'config',
			isActive: false,
			onTabClick
		};

		const e = {
			currentTarget: {
				id: 'config'
			}
		};

		const wrapper = shallow(<Tab {...props} />);
		wrapper.find('button').first().simulate('click', e);
		expect(onTabClick).toHaveBeenCalledTimes(1);
	})
})