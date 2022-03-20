import { useState, MouseEvent, ChangeEvent, useCallback } from "react"
import { FORM_CONFIG_TAB, FORM_RESULT_TAB, TAB_LIST } from "../../constants/tabs";
import FormConfig from "../FormConfig/FormConfig";
import FormResult from "../FormResult/FormResult";
import Tab from "./components/Tab";

/*
	Main component, which resolves all functionality related to generating forms.
	This component renders main skeleton: two tabs (config tab: where you can input form configuration
	and result tab: where you can see a generated form) and tab content. 
*/
export default function FormGenerator() {
	const [activeTab, setActiveTab] = useState(FORM_CONFIG_TAB);
	const [formConfig, setFormConfig] = useState('');

	const handleTabClick = useCallback(
		(e: MouseEvent<HTMLButtonElement>) => {
			const tabName = e.currentTarget.id;
			setActiveTab(tabName);
		},
		[]
	)

	const handleConfigChange = useCallback(
		(e: ChangeEvent<HTMLTextAreaElement>) => {
			const value = e.currentTarget.value;
			setFormConfig(value);
		},
		[]
	)

	const handleConfigSubmit = useCallback(
		() => {
			setActiveTab(FORM_RESULT_TAB);
		},
		[]
	)

	return (
		<div className='form-generator'>
			<div className="tab">
				{TAB_LIST.map(tab => <Tab key={tab} tab={tab} isActive={tab === activeTab} onTabClick={handleTabClick} /> )}
			</div>

			{activeTab === FORM_CONFIG_TAB
				&& <FormConfig
					onConfigChange={handleConfigChange}
					onConfigSubmit={handleConfigSubmit}
					value={formConfig}
				/>}
				
			{activeTab === FORM_RESULT_TAB && <FormResult formConfig={formConfig} />}

		</div>
	)
}
