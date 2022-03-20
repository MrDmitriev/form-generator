import { MouseEvent } from 'react'

type Props = {
	tab: string,
	isActive: boolean,
	onTabClick: (e: MouseEvent<HTMLButtonElement>) => void
}

/*
Every tab is a button. Its purpose: to open a particular tab content after a click on a tab.
Switching between tabs is resolved by a callback that is provided in props. 
*/
export default function Tab({tab, isActive, onTabClick}: Props) {
	return (
		<button
			className={`tablinks ${isActive && 'active'}`}
			id={tab}
			onClick={onTabClick}
		>
			{tab}
		</button>
	)
}
