import renderer from 'react-test-renderer';
import FormResult from '../FormResult';
import mockFormConfig from '../../../mock-content/form-config-test.json';

describe("FormResult component", () => {
  it(`should match snapshot`, () => {
		const props = {
			formConfig: JSON.stringify(mockFormConfig)
		}
	
		const wrapper = renderer.create(<FormResult {...props} />).toJSON();
		expect(wrapper).toMatchSnapshot();
	});
});