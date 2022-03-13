import { ChangeEvent } from 'react'

type Props = {
	onConfigChange: (e: ChangeEvent<HTMLTextAreaElement>) => void,
	value: string
}
export default function FormConfig({onConfigChange, value}: Props) {
	return (
		<div id="config" className="tabcontent active">
			<h3>Config</h3>
			<form action="">
				<label htmlFor="">
					<textarea value={value} onChange={onConfigChange} rows={4} placeholder="{items: []}" />	
				</label>
			</form>
		</div>
	)
}
