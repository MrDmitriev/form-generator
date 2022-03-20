import { FormItem } from "../../../types/FormItem"

type Props = {
	element: FormItem
}

export default function TextArea({ element }: Props) {
	const { label } = element;
	return (
		<div className='form-element'>
			<label htmlFor="textarea" className='form-element__label'>{label}</label>
			<textarea className='form-element__input' id="textarea" rows={5} ></textarea>
		</div>
	)
}
