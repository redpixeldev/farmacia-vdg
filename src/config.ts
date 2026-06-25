// Central site configuration for Farmacia VDG.
// Edit phones, hours, links and copy here — components read from this file.

const WHATSAPP_NUMBER = '18097928882'; // 809-792-8882 (confirmado)
const WHATSAPP_TEXT = 'Hola Farmacia VDG, quisiera hacer un pedido';

export const site = {
	name: 'Farmacia VDG',
	tagline: 'Tu salud, nuestra prioridad',
	city: 'Santo Domingo, República Dominicana',
	address: 'Av. República de Colombia 68, Santo Domingo 10507, RD',
	email: 'info@farmaciavdg.com',
	instagram: {
		handle: '@farmaciavdg',
		url: 'https://www.instagram.com/farmaciavdg/',
	},
	whatsapp: {
		number: WHATSAPP_NUMBER,
		display: '809-792-8882',
		link: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_TEXT)}`,
	},
	phones: [
		{ display: '809-792-8880', tel: '+18097928880' },
		{ display: '809-792-8881', tel: '+18097928881' },
		{ display: '809-792-8882', tel: '+18097928882', whatsapp: true },
	],
	hours: [
		{ label: 'Lunes a Sábado', value: '8:00am – 10:00pm' },
		{ label: 'Domingos', value: '8:00am – 4:00pm' },
	],
	hoursShort: { weekday: 'Lun–Sáb 8am–10pm', sunday: 'Dom 8am–4pm' },
	mapEmbed:
		'https://www.google.com/maps?q=Av.+Rep%C3%BAblica+de+Colombia+68,+Santo+Domingo&output=embed',
	mapLink:
		'https://www.google.com/maps/search/?api=1&query=Av.+Rep%C3%BAblica+de+Colombia+68,+Santo+Domingo',
	nav: [
		{ label: 'Servicios', href: '#servicios' },
		{ label: 'Cómo pedir', href: '#como-pedir' },
		{ label: 'Horarios', href: '#contacto' },
		{ label: 'Contacto', href: '#contacto' },
	],
};

export type Site = typeof site;
