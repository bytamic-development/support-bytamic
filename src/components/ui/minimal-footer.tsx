import {
	FacebookIcon,
	LinkedinIcon,
	YoutubeIcon,
} from 'lucide-react';

export function MinimalFooter() {
	const year = new Date().getFullYear();

	const company = [
		{
			title: 'Bytamic.ai',
			href: 'https://www.bytamic.ai/',
		},
		{
			title: 'Bytamic.com',
			href: 'https://www.bytamic.com/',
		},
		{
			title: 'About Us',
			href: '#about',
		},
		{
			title: 'Contact',
			href: '#contact',
		},
		{
			title: 'Privacy Policy',
			href: '#',
		},
	];

	const resources = [
		{
			title: 'Why Us',
			href: '#why',
		},
		{
			title: 'Capabilities',
			href: '#capabilities',
		},
		{
			title: 'Services',
			href: '#services',
		},
		{
			title: 'Process',
			href: '#process',
		},
		{
			title: 'FAQ',
			href: '#faq',
		},
	];

	const socialLinks = [
		{
			icon: <FacebookIcon className="size-4" />,
			link: 'https://www.facebook.com/bytamic/',
			label: 'Facebook',
		},
		{
			icon: <LinkedinIcon className="size-4" />,
			link: 'https://www.linkedin.com/company/bytamic/',
			label: 'LinkedIn',
		},
		{
			icon: <YoutubeIcon className="size-4" />,
			link: 'https://www.youtube.com/@bytamic',
			label: 'YouTube',
		},
	];

	return (
		<footer className="relative">
			<div className="bg-[radial-gradient(35%_80%_at_30%_0%,rgba(169,237,2,0.1),transparent)] mx-auto max-w-7xl md:border-x border-primary/20">
				<div className="bg-primary/20 absolute inset-x-0 h-px w-full" />
				<div className="grid max-w-7xl grid-cols-6 gap-6 p-4">
					<div className="col-span-6 flex flex-col gap-5 md:col-span-4">
						<a href="#hero" className="w-max">
							<img 
								src="/Guidebook/Branding/Logo 900x300.png" 
								alt="Bytamic Logo" 
								className="h-10 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity"
							/>
						</a>
						<p className="text-accent/80 max-w-sm font-mono text-sm text-balance">
							AI-powered nearshore IT support. Lower costs, faster resolutions, consistently high CSAT.
						</p>
						<div className="flex gap-2">
							{socialLinks.map((item, i) => (
								<a
									key={i}
									className="hover:bg-primary/20 rounded-md border border-primary/20 p-1.5 text-accent hover:text-primary transition-colors duration-200"
									target="_blank"
									rel="noopener noreferrer"
									href={item.link}
									aria-label={item.label}
								>
									{item.icon}
								</a>
							))}
						</div>
						<div className="text-accent/70 text-sm">
							<p className="font-mono">ALBERTGASSE 35</p>
							<p className="font-mono">VIENNA, A-1080</p>
							<p className="font-mono">AUSTRIA</p>
						</div>
					</div>
					<div className="col-span-3 w-full md:col-span-1">
						<span className="text-accent/60 mb-1 text-xs uppercase tracking-wider">
							Resources
						</span>
						<div className="flex flex-col gap-1">
							{resources.map(({ href, title }, i) => (
								<a
									key={i}
									className="text-accent/80 w-max py-1 text-sm duration-200 hover:text-primary hover:underline"
									href={href}
								>
									{title}
								</a>
							))}
						</div>
					</div>
					<div className="col-span-3 w-full md:col-span-1">
						<span className="text-accent/60 mb-1 text-xs uppercase tracking-wider">Company</span>
						<div className="flex flex-col gap-1">
							{company.map(({ href, title }, i) => (
								<a
									key={i}
									className="text-accent/80 w-max py-1 text-sm duration-200 hover:text-primary hover:underline"
									href={href}
									{...(href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
								>
									{title}
								</a>
							))}
						</div>
					</div>
				</div>
				<div className="bg-primary/20 absolute inset-x-0 h-px w-full" />
				<div className="flex max-w-7xl flex-col justify-between gap-2 pt-2 pb-5">
					<p className="text-accent/70 text-center font-mono text-sm">
						© {year} <a href="https://www.bytamic.ai/" className="hover:text-primary transition-colors" target="_blank" rel="noopener noreferrer">Bytamic</a>. All rights reserved.
					</p>
				</div>
			</div>
		</footer>
	);
}

