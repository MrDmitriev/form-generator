import { FormItem } from "../../../types/FormItem"

type Props = {
	element: FormItem
}

const Checkbox: React.FC<Props> = ({ element }) => {
	const { label } = element;

	return (
		<div className='form-element'>
			<label htmlFor="checkbox" className='form-element__label'>{label}</label>
			<input type="checkbox" id='checkbox' />
		</div>
	)
}

export default Checkbox;