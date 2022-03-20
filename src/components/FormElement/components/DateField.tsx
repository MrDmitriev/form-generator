import { FormItem } from "../../../types/FormItem"

type Props = {
	element: FormItem
}

const DateField: React.FC<Props> = ({ element }) => {
	const { label } = element;

	return (
		<div className='form-element'>
		<label htmlFor="datefield" className='form-element__label'>{label}</label>
		<input type="date" id='datefield' className='form-element__input'/>
	</div>
	)
}

export default DateField;