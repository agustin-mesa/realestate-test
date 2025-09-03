import { TabPanel, TabView, type TabViewProps } from 'primereact/tabview';
import { ReactNode } from 'react';

interface TabItem {
	header: string;
	children: ReactNode;
}

interface UiTabViewProps extends Omit<TabViewProps, 'children'> {
	tabs: TabItem[];
}

const UiTabView = ({ tabs, ...props }: UiTabViewProps) => {
	return (
		<TabView
			className="shadow-v1-neutral-950/10 shadow-2xl"
			pt={{
				nav: {
					className: 'w-fit rounded-t-lg overflow-hidden'
				},
				panelContainer: {
					className: '!rounded-b-lg rounded-tr-lg'
				},
				inkbar: {
					className: '!bg-v1-primary-500'
				}
			}}
			{...props}
		>
			{tabs.map((tab, index) => (
				<TabPanel
					key={index}
					header={tab.header}
					pt={{
						headerAction: {
							className:
								'aria-[selected="true"]:!font-bold !py-4 !px-8 aria-[selected="true"]:!text-v1-primary-500 !text-v1-neutral-950'
						}
					}}
				>
					{tab.children}
				</TabPanel>
			))}
		</TabView>
	);
};

export default UiTabView;
