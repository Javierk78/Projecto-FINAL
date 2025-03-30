const brands = [
	{
	image: '/img/brands/massi-logo.png',
		alt: 'Massi',
	},
	{
		image: '/img/brands/CONOR.jpg',
		alt: 'CONOR',
	},
	{
		image: '/img/brands/oleo-mac.webp',
		alt: 'OleoMAC',
	},
	{
		image: '/img/brands/kross-logo-pancraciobicis.jpg',
		alt: 'Kross',
	},
	{
		image: '/img/brands/vespa.webp',
		alt: 'Vespa',
	},

	{
		image: '/img/brands/derbi.png',
		alt: 'Derbi',
	},
];

export const Brands = () => {
	return (
		<div className='flex flex-col items-center gap-3 pt-16 pb-12'>
			<h2 className='font-bold text-4xl'>Nuestras marcas</h2>
			<div className='grid grid-cols-3 gap-6 mt-8 items-center md:grid-cols-6'>
				{brands.map((brand, index) => (
					<div key={index}>
						<img src={brand.image} alt={brand.alt} />
					</div>
				))}
			</div>
		</div>
	);
};
