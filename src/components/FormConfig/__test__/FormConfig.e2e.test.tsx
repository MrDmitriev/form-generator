import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import renderer from 'react-test-renderer';

import FormConfig from '../FormConfig';

Enzyme.configure({ adapter: new Adapter() });

describe('FormConfig component', () => {
	it(`should match snapshot`, () => {
		const onConfigChange = jest.fn();
		const onConfigSubmit = jest.fn();

		const props = {
			value: "",
			onConfigChange,
			onConfigSubmit
		};
	
		const wrapper = renderer.create(<FormConfig {...props} />).toJSON();
		expect(wrapper).toMatchSnapshot();
	});

	it('Should update form config after change a textarea', () => {
		const onConfigChange = jest.fn();
		const onConfigSubmit = jest.fn();

		const props = {
			value: "",
			onConfigChange,
			onConfigSubmit
		};

		const e = {
			currentTarget: {
				value: "{'items': [{'type': 'button'}]}"
			}
		};

		const wrapper = shallow(<FormConfig {...props} />);
		wrapper.find('textarea').first().simulate('change', e);
		expect(onConfigChange).toHaveBeenCalledTimes(1);
	})

	it('Should toggle to result tab after submitting config form', () => {
		const onConfigChange = jest.fn();
		const onConfigSubmit = jest.fn();

		const props = {
			value: "",
			onConfigChange,
			onConfigSubmit
		};

		const wrapper = shallow(<FormConfig {...props} />);
		wrapper.find('button').first().simulate('click');
		expect(onConfigSubmit).toHaveBeenCalledTimes(1);
	})
})