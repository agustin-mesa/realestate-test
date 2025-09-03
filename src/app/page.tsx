import IconCalendar from '@/components/ui/icons/calendar';
import IconChevronDown from '@/components/ui/icons/chevron-down';
import IconQuote from '@/components/ui/icons/quote';
import IconStar from '@/components/ui/icons/star';
import UiButton from '@/components/ui/UiButton';
import UiText from '@/components/ui/UiText';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar } from 'primereact/calendar';
import { InputText } from 'primereact/inputtext';
import { TabPanel, TabView } from 'primereact/tabview';

export default function Home() {
	return (
		<>
			<header className="bg-v1-neutral-0/40 fixed top-0 right-0 left-0 z-50 px-4 backdrop-blur-md max-md:px-6">
				<nav className="py-6">
					<div className="mx-auto flex max-w-screen-2xl items-center justify-between">
						<div className="flex items-center justify-between gap-14">
							<Image
								src="/assets/logo/logo-estatery.svg"
								alt="Logo"
								width={120}
								height={120}
								draggable={false}
							/>

							<ul className="flex items-center gap-10">
								<li>
									<Link href="/">Rent</Link>
								</li>
								<li>
									<Link href="/">Buy</Link>
								</li>
								<li>
									<Link href="/">Sell</Link>
								</li>
								<li className="flex items-center gap-2">
									<Link href="/">Manage Property</Link>
									<IconChevronDown fill="#000929" />
								</li>
								<li className="flex items-center gap-2">
									<Link href="/">Resources</Link>
									<IconChevronDown fill="#000929" />
								</li>
							</ul>
						</div>

						<div className="flex items-center gap-4">
							<Link href="/">
								<UiButton variant="outlined" label="Login" />
							</Link>
							<Link href="/">
								<UiButton variant="primary" label="Sign up" />
							</Link>
						</div>
					</div>
				</nav>
			</header>

			<main className="bg-v1-background h-dvh">
				<div className="from-v1-primary-50 to-v1-primary-50/0 mx-auto flex h-dvh bg-gradient-to-b pt-32">
					<div className="mx-auto flex max-w-screen-xl">
						<div className="z-10 flex max-w-xl flex-1 flex-col gap-10 pt-10 pl-10">
							<UiText type="display1" className="max-w-lg text-6xl">
								Buy, rent, or sell your property easily
							</UiText>
							<UiText type="h4" className="max-w-lg font-medium">
								A great platform to buy, sell, or even rent your properties without
								any commisions.
							</UiText>

							<div className="flex gap-4">
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
								>
									<TabPanel
										header="Rent"
										pt={{
											headerAction: {
												className:
													'aria-[selected="true"]:!font-bold !py-4 !px-8 aria-[selected="true"]:!text-v1-primary-500 !text-v1-neutral-950'
											}
										}}
									>
										<div className="flex min-w-3xl gap-8 p-2 pl-5">
											<div className="border-v1-neutral-950/10 flex flex-1 border-r pr-8">
												<div className="text-v1-neutral-25 relative flex flex-col">
													<UiText
														type="label5"
														id="location"
														className="text-v1-neutral-950/70 font-medium"
													>
														Location
													</UiText>
													<InputText
														id="location"
														defaultValue="Barcelona, Spain"
														className="text-v1-neutral-950 w-full !border-none !px-0 !py-1 !font-bold !ring-0"
														placeholder="Write location"
													/>
												</div>
											</div>
											<div className="border-v1-neutral-950/10 flex flex-1 border-r pr-8">
												<div className="text-v1-neutral-25 relative flex flex-col">
													<UiText
														type="label5"
														id="when"
														className="text-v1-neutral-950/70 font-medium"
													>
														When
													</UiText>
													<div className="flex items-center gap-2">
														<Calendar
															id="when"
															placeholder="Select Move-in Date"
															pt={{
																root: {
																	className: '!border-none'
																}
															}}
															inputClassName="!border-none !px-0 !py-1 !font-bold !ring-0 placeholder:!text-v1-neutral-950"
														/>
														<IconCalendar
															fill="#000929"
															height={20}
															width={20}
														/>
													</div>
												</div>
											</div>
											<div className="flex flex-1 flex-col">
												<UiButton
													variant="primary"
													label="Browse Properties"
													className="!px-6 !py-4"
												/>
											</div>
										</div>
									</TabPanel>
									<TabPanel
										header="Buy"
										pt={{
											headerAction: {
												className:
													'aria-[selected="true"]:!font-bold !py-4 !px-8 aria-[selected="true"]:!text-v1-primary-500 !text-v1-neutral-950'
											}
										}}
									>
										<div className="flex min-w-3xl gap-8 p-2 pl-5">
											<UiText
												type="h4"
												className="text-v1-neutral-600 max-w-lg font-medium"
											>
												Here another text for the buy tab
											</UiText>
										</div>
									</TabPanel>
									<TabPanel
										header="Sell"
										pt={{
											headerAction: {
												className:
													'aria-[selected="true"]:!font-bold !py-4 !px-8 aria-[selected="true"]:!text-v1-primary-500 !text-v1-neutral-950'
											}
										}}
									>
										<div className="flex min-w-3xl gap-8 p-2 pl-5">
											<UiText
												type="h4"
												className="text-v1-neutral-600 max-w-lg font-medium"
											>
												Here another text for the sell tab
											</UiText>
										</div>
									</TabPanel>
								</TabView>
							</div>

							<div className="flex max-w-lg gap-4">
								<div className="flex flex-1 flex-col gap-4">
									<Image
										src="/assets/images/resources/renters.svg"
										alt="Renters"
										width={64}
										height={64}
										draggable={false}
									/>
									<div className="flex flex-col">
										<UiText type="h4" className="text-v1-primary-500 font-bold">
											50k+ renters
										</UiText>
										<UiText type="body1" className="font-medium">
											believe in our service
										</UiText>
									</div>
								</div>
								<div className="flex flex-1 flex-col gap-4">
									<Image
										src="/assets/images/resources/properties.svg"
										alt="Properties"
										width={64}
										height={64}
										draggable={false}
									/>
									<div className="flex flex-col">
										<UiText type="h4" className="text-v1-primary-500 font-bold">
											10k+ properties
										</UiText>
										<UiText type="body1" className="font-medium">
											and house ready for occupancy
										</UiText>
									</div>
								</div>
							</div>
						</div>

						<div className="relative flex flex-1 justify-end overflow-hidden">
							<div className="bg-v1-neutral-0 absolute top-0 left-0 flex max-w-xs flex-col gap-6 rounded-lg p-6">
								<div className="flex gap-4">
									<div className="flex flex-col">
										<Image
											src="/assets/images/avatar.png"
											alt="User"
											width={68}
											height={68}
											draggable={false}
										/>
									</div>
									<div className="flex flex-col gap-2">
										<div className="flex flex-col">
											<UiText
												type="h4"
												className="text-v1-neutral-950 font-bold"
											>
												Manuel Villa
											</UiText>
											<UiText type="body2" className="text-v1-neutral-950/50">
												Renter
											</UiText>
										</div>
										<div className="flex gap-2">
											<UiText type="body2" className="text-v1-neutral-950/50">
												Moved with
											</UiText>
											<Image
												src="/assets/logo/logo-estatery.svg"
												alt="Home"
												width={80}
												height={80}
												draggable={false}
											/>
										</div>
									</div>
								</div>

								<div className="flex gap-4">
									<div className="bg-v1-neutral-950 flex size-10 items-center justify-center rounded-full">
										<IconQuote fill="#fff" />
									</div>
									<UiText type="body2" className="flex-1">
										I loved how smooth the move was, and finally got the house
										we wanted.
									</UiText>
								</div>

								<div className="border-v1-neutral-950/10 flex items-center justify-between border-t pt-4">
									<div className="flex flex-col items-center">
										<UiText type="h4" className="text-xl font-extrabold">
											$1,500
										</UiText>
										<UiText type="body2" className="text-v1-neutral-950/50">
											Saved up to
										</UiText>
									</div>
									<div className="flex flex-col items-center">
										<UiText type="h4" className="text-xl font-extrabold">
											-24hrs
										</UiText>
										<UiText type="body2" className="text-v1-neutral-950/50">
											Process time
										</UiText>
									</div>
								</div>
							</div>
							<Image
								src="/assets/images/hero-bg.png"
								alt="Hero"
								width={1000}
								height={1000}
								className="object-cover"
								draggable={false}
							/>
							<div className="absolute right-0 bottom-0 flex min-w-64 flex-col gap-4 overflow-hidden rounded-tl-lg bg-[url('/assets/images/mask-card.png')] bg-cover bg-center p-4 pb-6">
								<div className="flex items-center justify-between">
									<UiText
										type="body1"
										className="text-v1-neutral-0 text-lg font-bold"
									>
										Excellent
									</UiText>
									<Image
										src="/assets/logo/logo-trustpilot.png"
										alt="Home"
										width={80}
										height={80}
										draggable={false}
									/>
								</div>
								<div className="flex items-center gap-1">
									{Array.from({ length: 5 }).map((_, index) => (
										<IconStar key={index} fill="#FFB154" />
									))}
								</div>
								<UiText type="body1" className="text-v1-neutral-0">
									From 3,264 reviews
								</UiText>
							</div>
						</div>
					</div>
				</div>
			</main>

			<div className="mx-auto grid max-w-screen-xl grid-cols-3 gap-16 px-10 py-20">
				<div className="bg-v1-neutral-25 border-v1-primary-500/10 relative flex flex-1 flex-col gap-4 rounded-lg border-2 p-8">
					<div className="z-10 flex flex-col gap-4">
						<UiText type="h3" className="text-v1-secondary-900 text-3xl font-bold">
							The new way to find your new home
						</UiText>
						<UiText type="body1" className="text-v1-secondary-900/50 font-medium">
							Find your dream place to live in with more than 10k+ properties listed.
						</UiText>
						<UiButton
							variant="secondary"
							label="Browse Properties"
							className="w-fit"
							size="small"
						/>
					</div>
					<div className="absolute right-0 bottom-0 z-0">
						<Image
							src="/assets/images/resources/house.svg"
							alt="House"
							width={350}
							height={350}
							draggable={false}
						/>
					</div>
				</div>
				<div className="flex flex-col gap-20">
					<div className="flex flex-1 flex-col gap-4">
						<Image
							src="/assets/images/resources/insurance.svg"
							alt="Insurance"
							width={64}
							height={64}
							draggable={false}
						/>
						<UiText type="h4" className="text-2xl font-bold">
							Property Insurance
						</UiText>
						<UiText
							type="body1"
							className="text-v1-neutral-950/50 max-w-xs font-medium"
						>
							We offer our customer property protection of liability coverage and
							insurance for their better life.
						</UiText>
					</div>
					<div className="flex flex-1 flex-col gap-4">
						<Image
							src="/assets/images/resources/commission.svg"
							alt="Commission"
							width={64}
							height={64}
							draggable={false}
						/>
						<UiText type="h4" className="text-2xl font-bold">
							Lowest Commission
						</UiText>
						<UiText
							type="body1"
							className="text-v1-neutral-950/50 max-w-xs font-medium"
						>
							You no longer have to negotiate commissions and haggle with other agents
							it only cost 2%!
						</UiText>
					</div>
				</div>
				<div className="flex flex-col gap-20">
					<div className="flex flex-1 flex-col gap-4">
						<Image
							src="/assets/images/resources/price.svg"
							alt="Price"
							width={64}
							height={64}
							draggable={false}
						/>
						<UiText type="h4" className="text-2xl font-bold">
							Best Price
						</UiText>
						<UiText
							type="body1"
							className="text-v1-neutral-950/50 max-w-xs font-medium"
						>
							Not sure what you should be charging for your property? No need to
							worry, let us do the numbers for you.
						</UiText>
					</div>
					<div className="flex flex-1 flex-col gap-4">
						<Image
							src="/assets/images/resources/overall.svg"
							alt="Overall"
							width={64}
							height={64}
							draggable={false}
						/>
						<UiText type="h4" className="text-2xl font-bold">
							Overall Control
						</UiText>
						<UiText
							type="body1"
							className="text-v1-neutral-950/50 max-w-xs font-medium"
						>
							Get a virtual tour, and schedule visits before you rent or buy any
							properties. You get overall control.
						</UiText>
					</div>
				</div>
			</div>
		</>
	);
}
