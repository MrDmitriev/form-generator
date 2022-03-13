import { FormItem } from '../types/FormItem'
import { Checkbox, DateField, NumberField, RadioButton, TextArea, TextField } from './formElements'

type Props = {
	element: FormItem
}

const test = { "items": [
		{
			"type": "number",
			"label": "Count"
		},
		{
			"type": "text",
			"label": "Caption"
		},
		{
			"type": "textarea",
			"label": "Long text"
		},
		{
			"type": "checkbox",
			"label": "Is Editable"
		},
		{
			"type": "date",
			"label": "Date"
		},
		{
			"type": "radio",
			"label": "Radio"
		}
	],
	"buttons": ["Ok", "Cancel"]
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
