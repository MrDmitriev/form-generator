import { useState, MouseEvent, ChangeEvent } from "react"
import { FORM_CONFIG_TAB, FORM_RESULT_TAB, TAB_LIST } from "../constants/tabs";
import FormConfig from "./FormConfig";
import FormResult from "./FormResult";
import Tab from "./Tab";



export default function FormGenerator() {
	const [activeTab, setActiveTab] = useState(FORM_CONFIG_TAB);
	const [formConfig, setFormConfid] = useState('');

	const handleTabClick = (e: MouseEvent<HTMLButtonElement>) => {
		const tabName = e.currentTarget.id;
		setActiveTab(tabName);
		console.log('tab name', tabName);
	}

	const handleConfigChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
		const value = e.currentTarget.value;
		setFormConfid(value);
		console.log('cnahge value', value);
	}
	return (
		<div className='form-generator'>
			<div className="tab">
				{TAB_LIST.map(tab => <Tab key={tab} tab={tab} isActive={tab === activeTab} onTabClick={handleTabClick} /> )}
			</div>

			{activeTab === FORM_CONFIG_TAB && <FormConfig onConfigChange={handleConfigChange} value={formConfig} />}
			{activeTab === FORM_RESULT_TAB && <FormResult formConfig={formConfig} />}

		</div>
	)
}
