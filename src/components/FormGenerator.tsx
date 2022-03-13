import { useState, MouseEvent, ChangeEvent } from "react"
import { FORM_CONFIG_TAB, FORM_RESULT_TAB, TAB_LIST } from "../constants/tabs";
import FormConfig from "./FormConfig";
import FormResult from "./FormResult";
import Tab from "./Tab";



export default function FormGenerator() {
	// TODO USE CALLBACK
	const [activeTab, setActiveTab] = useState(FORM_CONFIG_TAB);
	const [formConfig, setFormConfig] = useState('');

	const handleTabClick = (e: MouseEvent<HTMLButtonElement>) => {
		const tabName = e.currentTarget.id;
		setActiveTab(tabName);
	}

	const handleConfigChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
		const value = e.currentTarget.value;
		setFormConfig(value);
	}

	const handleConfigSubmit = () => {
		setActiveTab(FORM_RESULT_TAB);
	}

	return (
		<div className='form-generator'>
			<div className="tab">
				{TAB_LIST.map(tab => <Tab key={tab} tab={tab} isActive={tab === activeTab} onTabClick={handleTabClick} /> )}
			</div>

			{activeTab === FORM_CONFIG_TAB && <FormConfig onConfigChange={handleConfigChange} onConfigSubmit={handleConfigSubmit} value={formConfig} />}
			{activeTab === FORM_RESULT_TAB && <FormResult formConfig={formConfig} />}

		</div>
	)
}
