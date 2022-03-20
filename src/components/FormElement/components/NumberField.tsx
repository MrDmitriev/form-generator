import { FormItem } from "../../../types/FormItem"

type Props = {
	element: FormItem
}

export default function NumberField({ element }: Props) {
	const { label } = element;
	return (
		<div className='form-element'>
			<label htmlFor="numberfield" className='form-element__label'>{label}</label>
			<input type="number" id='numberfield' className='form-element__input' />
		</div>
	)
}
