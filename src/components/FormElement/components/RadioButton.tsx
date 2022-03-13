import { FormItem } from "../../../types/FormItem"

type Props = {
	element: FormItem
}

export default function RadioButton({ element }: Props) {
	const { label } = element;

	return (
		<div className='form-element'>
			<label htmlFor="radiobutton" className='form-element__label'>{label}</label>
			<input type="radio" id='radiobutton' />
		</div>
	)
}
