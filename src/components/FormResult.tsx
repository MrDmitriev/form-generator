import { FormItem } from '../types/FormItem';
import { parseFormConfigToJSON } from '../utils/common';
import FormElement from './FormElement';

type Props = {
	formConfig: string;
}

export default function FormResult({formConfig}: Props) {
	const parsedFormsConfig = parseFormConfigToJSON(formConfig)	;
	const { items = [], buttons = [] } = parsedFormsConfig;
	return (
		<div id="result" className="tabcontent active">
			{items.map((element: FormItem) => <FormElement element={element} />)}

			<div className='form-result__buttons'>
				{buttons.map((button: React.ReactNode) => <button className='form-button'>{button}</button>)}
			</div>

		</div>
	)
}
