import { FormItem } from "../../../types/FormItem"

type Props = {
	element: FormItem
}

const NumberField: React.FC<Props> = ({ element }) => {
	const { label } = element;
	return (
		<div className='form-element'>
			<label htmlFor="numberfield" className='form-element__label'>{label}</label>
			<input type="number" id='numberfield' className='form-element__input' />
		</div>
	)
}

export default NumberField;