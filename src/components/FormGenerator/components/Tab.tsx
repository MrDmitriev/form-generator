import React, { MouseEvent } from 'react'

type Props = {
	tabName: string,
	isActive: boolean,
	onTabClick: (e: MouseEvent<HTMLButtonElement>) => void
}

/*
Every tab is a button. Its purpose: to open a particular tab content after a click on a tab.
Switching between tabs is resolved by a callback that is provided in props. 
*/
const Tab: React.FC<Props> = ({tabName, isActive, onTabClick}) => {
	return (
		<button
			className={`tablinks ${isActive && 'active'}`}
			id={tabName}
			onClick={onTabClick}
		>
			{tabName}
		</button>
	)
}

export default Tab;