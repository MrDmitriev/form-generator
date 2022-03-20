import { FormItem } from "../../types/FormItem"

type Props = {
	element: FormItem
}

export default function Checkbox({ element }: Props) {
	const { label } = element;

	return (
		<div className='form-element'>
			<label htmlFor="checkbox" className='form-element__label'>{label}</label>
			<input type="checkbox" id='checkbox' />
		</div>
	)
}
