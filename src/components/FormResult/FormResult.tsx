import { INVALID_FORM_CONFIGURATION_WARNING } from '../../constants/common';
import { FormItem } from '../../types/FormItem';
import { parseFormConfigToJSON } from '../../utils/common';
import FormElement from '../FormElement/FormElement';

type Props = {
	formConfig: string;
}

/* Renders form, based on provided form configuration */
export default function FormResult({formConfig}: Props) {
	const parsedFormsConfig = parseFormConfigToJSON(formConfig);
	const { items = [], buttons = [] } = parsedFormsConfig;

	const invalidFormConfiguration = <div className="tabcontent">{INVALID_FORM_CONFIGURATION_WARNING}</div>
	return parsedFormsConfig ? (
		<div id="result" className="tabcontent active">
			{items.map((element: FormItem) => <FormElement element={element} />)}

			<div className='form-result__buttons'>
				{buttons.map((button: React.ReactNode) => <button className='form-button'>{button}</button>)}
			</div>

		</div>
	) : invalidFormConfiguration
}
