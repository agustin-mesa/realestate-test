import IconChevronDown from '@/shared/components/ui/icons/chevron-down';
import UiButton from '@/shared/components/ui/UiButton';
import { ROUTES } from '@/shared/hooks/useNavigation';
import { useNavigation } from '@/shared/hooks/useNavigation';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
	const { navigationItems } = useNavigation();

	return (
		<header className="bg-v1-neutral-0/40 fixed top-0 right-0 left-0 z-50 px-4 backdrop-blur-md max-md:px-6">
			<nav className="py-6">
				<div className="mx-auto flex max-w-screen-2xl items-center justify-between">
					<div className="flex items-center justify-between gap-14">
						<Image
							src="/assets/logo/logo-estatery.svg"
							alt="Estatery"
							width={120}
							height={120}
							draggable={false}
						/>

						<ul className="flex items-center gap-10">
							{navigationItems.map((item, index) => (
								<li
									key={index}
									className={item.hasDropdown ? 'flex items-center gap-2' : ''}
								>
									<Link href={item.href}>{item.label}</Link>
									{item.hasDropdown && <IconChevronDown fill="#000929" />}
								</li>
							))}
						</ul>
					</div>

					<div className="flex items-center gap-4">
						<Link href={ROUTES.login}>
							<UiButton variant="outlined" label="Login" />
						</Link>
						<Link href={ROUTES.signup}>
							<UiButton variant="primary" label="Sign up" />
						</Link>
					</div>
				</div>
			</nav>
		</header>
	);
};

export default Header;
