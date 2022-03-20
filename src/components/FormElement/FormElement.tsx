import { FormItem } from '../../types/FormItem'
import { Checkbox, DateField, NumberField, RadioButton, TextArea, TextField } from './components'

type Props = {
	element: FormItem
}

export default function FormElement({ element }: Props) {
	let formElement = <div>Unknown form element</div>
	switch (element.type) {
		case 'number':
			formElement = <NumberField element={element} />
			break;
		case 'text':
			formElement = <TextField element={element} />
			break;
		case 'textarea':
			formElement = <TextArea element={element} />
			break;
		case 'checkbox':
			formElement = <Checkbox element={element} />
			break;
		case 'date':
			formElement = <DateField element={element} />
			break;
		case 'radio':
			formElement = <RadioButton element={element} />
	}
	return formElement;
}
