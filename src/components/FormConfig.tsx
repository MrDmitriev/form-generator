import { ChangeEvent } from 'react'

type Props = {
	onConfigChange: (e: ChangeEvent<HTMLTextAreaElement>) => void,
	onConfigSubmit: () => void,
	value: string
}
export default function FormConfig({onConfigChange, onConfigSubmit, value}: Props) {
	return (
		<div id="config" className="tabcontent active">
			<form className='form-configurator'>
				<textarea className='form-configurator__input' value={value} onChange={onConfigChange} placeholder="{items: []}" />
			</form>
			<button className='form-configurator__submit' onClick={onConfigSubmit}>Apply</button>
		</div>
	)
}
