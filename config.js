// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘
const CONFIG = {
	// ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
	// ├┴┐├─┤└─┐││  └─┐
	// └─┘┴ ┴└─┘┴└─┘└─┘

	// General
	name: 'Lorena',
	imageBackground: false,
	openInNewTab: true,
	twelveHourFormat: true,

	// Greetings
	greetingMorning: '¡Qué madrugador!',
	greetingAfternoon: 'Con calma...',
	greetingEvening: '¿Sobreviviendo?',
	greetingNight: '¡Vete a dormir ya!',

	// Layout
	bentoLayout: 'bento', // 'bento', 'lists', 'buttons'

	// Weather
	weatherKey: '19d735af9adcfd24068aa3accfebab11', // Write here your API Key
	weatherIcons: 'Nord', // 'Onedark', 'Nord', 'Dark', 'White'
	weatherUnit: 'C', // 'F', 'C'
	language: 'es', // More languages in https://openweathermap.org/current#multi

	trackLocation: true, // If false or an error occurs, the app will use the lat/lon below
	defaultLatitude: '37.775',
	defaultLongitude: '-122.419',

	// Autochange
	autoChangeTheme: false,

	// Autochange by OS
	changeThemeByOS: true,

	// Autochange by hour options (24hrs format, string must be in: hh:mm)
	changeThemeByHour: false,
	hourDarkThemeActive: '18:30',
	hourDarkThemeInactive: '07:00',

	// ┌┐ ┬ ┬┌┬┐┌┬┐┌─┐┌┐┌┌─┐
	// ├┴┐│ │ │  │ │ ││││└─┐
	// └─┘└─┘ ┴  ┴ └─┘┘└┘└─┘

	firstButtonsContainer: [
		{
			id: '1',
			name: 'pinterest',
			icon: 'pin',
			link: 'https://www.pinterest.com/',
		},
		{
			id: '2',
			name: 'gemini',
			icon: 'sparkles',
			link: 'https://gemini.google.com/',
		},
		{
			id: '3',
			name: 'Infoeduka',
			icon: 'graduation-cap',
			link: 'https://student.algebra.hr/digitalnareferada/',
		},
		{
			id: '4',
			name: 'Youtube',
			icon: 'youtube',
			link: 'https://www.youtube.com/',
		},
		{
			id: '5',
			name: 'Mail',
			icon: 'mail-warning',
			link: 'https://outlook.office.com/mail/',
		},
		{
			id: '6',
			name: 'Mail',
			icon: 'mail-question',
			link: 'https://mail.google.com/mail/u/0/#inbox',
		},
	],

	// secondButtonsContainer: [
	// 	{
	// 		id: '1',
	// 		name: 'Music',
	// 		icon: 'headphones',
	// 		link: 'https://open.spotify.com',
	// 	},
	// 	{
	// 		id: '2',
	// 		name: 'twitter',
	// 		icon: 'twitter',
	// 		link: 'https://twitter.com/',
	// 	},
	// 	{
	// 		id: '3',
	// 		name: 'bot',
	// 		icon: 'bot',
	// 		link: 'https://discord.com/app',
	// 	},
	// 	{
	// 		id: '4',
	// 		name: 'Amazon',
	// 		icon: 'shopping-bag',
	// 		link: 'https://amazon.com/',
	// 	},
	// 	{
	// 		id: '5',
	// 		name: 'Hashnode',
	// 		icon: 'pen-tool',
	// 		link: 'https://hashnode.com/',
	// 	},
	// 	{
	// 		id: '6',
	// 		name: 'Figma',
	// 		icon: 'figma',
	// 		link: 'https://figma.com/',
	// 	},
	// ],

	// ┬  ┬┌─┐┌┬┐┌─┐
	// │  │└─┐ │ └─┐
	// ┴─┘┴└─┘ ┴ └─┘

	// First Links Container
	firstlistsContainer: [
		{
			icon: 'popcorn',
			id: '1',
			links: [
				{
					name: 'peliculas',
					link: 'https://sflix.to/',
				},
				{
					name: 'anime',
					link: 'https://animesuge.to/home',
				},
				{
					name: 'series',
					link: 'https://soap2day.host/',
				},
			],
		},
		{
			icon: 'github',
			id: '2',
			links: [
				{
					name: 'inicio',
					link: 'https://github.com/Tiitmouse',
				},
				{
					name: 'repositorios',
					link: 'https://github.com/Tiitmouse?tab=repositories',
				},
				{
					name: 'aoc',
					link: 'https://adventofcode.com/',
				},
			],
		},
	],

	// Second Links Container
	// secondListsContainer: [
	// 	{
	// 		icon: 'binary',
	// 		id: '1',
	// 		links: [
	// 			{
	// 				name: 'Spotify',
	// 				link: 'https://www.spotify.com',
	// 			},
	// 			{
	// 				name: 'Reddit',
	// 				link: 'https://www.reddit.com',
	// 			},
	// 			{
	// 				name: 'Hashnode',
	// 				link: 'https://www.hashnode.com',
	// 			},
	// 			{
	// 				name: 'Pocket',
	// 				link: 'https://www.pocket.com',
	// 			},
	// 		],
	// 	},
	// 	{
	// 		icon: 'github',
	// 		id: '2',
	// 		links: [
	// 			{
	// 				name: 'Front',
	// 				link: 'https://www.reddit.com/r/Frontend/',
	// 			},
	// 			{
	// 				name: 'Rust',
	// 				link: 'https://www.reddit.com/r/rust/',
	// 			},
	// 			{
	// 				name: 'Go',
	// 				link: 'https://www.reddit.com/r/golang/',
	// 			},
	// 			{
	// 				name: 'Repos',
	// 				link: 'https://github.com/migueravila',
	// 			},
	// 		],
	// 	},
	// ],
};
