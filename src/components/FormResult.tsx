import { parseFormConfigToJSON } from '../utils/common';

type Props = {
	formConfig: string;
}

export default function FormResult({formConfig}: Props) {
	const parsedFormConfig = parseFormConfigToJSON(formConfig);
	console.log('Parsed config', parsedFormConfig);
	return (
		<div id="Result" className="tabcontent active">
			<h3>Result</h3>
		</div>
	)
}
