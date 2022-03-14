import 'jsdom-global/register';
import renderer from 'react-test-renderer';
import FormGenerator from '../FormGenerator';

describe("FormGenerator component", () => {
  it(`should match snapshot`, () => {
	
		const wrapper = renderer.create(<FormGenerator />).toJSON();
		expect(wrapper).toMatchSnapshot();
	});
});