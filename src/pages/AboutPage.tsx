export const AboutPage = () => {
	return (
		<div className='space-y-5'>
			<h1 className='text-center text-4xl font-semibold tracking-tight mb-5'>
				Nuestra empresa
			</h1>

			<img
				src='./public/img/EmpresaPuerta.PNG'
				alt='Imagen de fondo'
				className='h-[500px] w-full object-cover'
			/>

			<div className='flex flex-col gap-4 tracking-tighter leading-7 text-sm font-medium text-slate-800'>
				<p>
				Bienvenidos a Aliaga Motors, una empresa familiar con más de 40 años de experiencia en el sector de las bicicletas, motos y agricola. Desde nuestros inicios, hemos trabajado con pasión y dedicación para ofrecer el mejor servicio en reparación, mantenimiento y venta de estos productos, siempre comprometidos con la calidad y la satisfacción de nuestros clientes.
				</p>

				<p>
				Como taller especializado, contamos con un equipo de profesionales altamente capacitados que, junto con nuestra tienda, ofrecen soluciones a medida para todas tus necesidades. Ya sea que busques una moto de alta gama, una bicicleta de última tecnología o una motosierra de calidad, en Aliaga Motors encontrarás lo que necesitas, respaldado por una atención personalizada y el respaldo de una tradición familiar que ha sido transmitida a lo largo de las generaciones.
				</p>

				<p>
				Gracias a nuestra trayectoria, nos hemos ganado la confianza de nuestros clientes, quienes nos eligen por nuestra experiencia, honestidad y compromiso. Te invitamos a conocernos y descubrir por qué Aliaga Motors es tu mejor opción en el mundo de las bicicletas, motos y agricola.
				</p>
				

				<h2 className='text-3xl font-semibold tracking-tighh mt-8 mb-4'>
				Contacto
				</h2>

				<p>
					Para más información, no dudes en ponerte en contacto con
					nosotros, a través de nuestro correo electrónico:
					<a href='mailto:correo@celularesbaratos.com'>
						aliagamotors@gmail.com
					</a>{' '}
					o llama al <a href='tel:962380934'>962380934</a>
				</p>
			</div>
		</div>
	);
};
