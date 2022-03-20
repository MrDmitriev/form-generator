import { ChangeEvent } from 'react'

type Props = {
	onConfigChange: (e: ChangeEvent<HTMLTextAreaElement>) => void,
	onConfigSubmit: () => void,
	value: string
}

/* Enables to enter a valid json with form configuration */
const FormConfig:React.FC<Props> = ({onConfigChange, onConfigSubmit, value}) => {
	return (
		<div id="config" className="tabcontent active">
			<form className='form-configurator'>
				<textarea
					className='form-configurator__input'
					value={value}
					onChange={onConfigChange}
					placeholder="{'items': [], 'buttons': []}"
				/>
			</form>
			<button
				className='form-configurator__submit'
				onClick={onConfigSubmit}
			> Apply
			</button>
		</div>
	)
}

export default FormConfig;