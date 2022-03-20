import { FormItem } from "../../../types/FormItem"

type Props = {
	element: FormItem
}

export default function TextField({ element }: Props) {
	const { label } = element;

	return (
		<div className='form-element'>
			<label htmlFor="textfield" className='form-element__label'>{label}</label>
			<input type="text" id='textfield' className='form-element__input' />
		</div>
	)
}
