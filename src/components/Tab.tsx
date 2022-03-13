import { MouseEvent } from 'react'

type Props = {
	tab: string,
	isActive: boolean,
	onTabClick: (e: MouseEvent<HTMLButtonElement>) => void
}

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
