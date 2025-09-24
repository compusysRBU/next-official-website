export interface EventItem {
	id: string;
	title: string;
	image: string;
	description: string;
	date: string;
}

export const eventItems: EventItem[] = [
	{
		id: "manzar",
		title: "Manzar",
		image: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=600&h=400&fit=crop&crop=entropy",
		description: "A celebration to welcome juniors into the CSE department.",
		date: "March 15, 2024",
	},
	{
		id: "polaris",
		title: "Polaris",
		image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=600&h=400&fit=crop&crop=entropy",
		description: "Annual techno-cultural event of CSE department.",
		date: "April 5, 2024",
	},
	{
		id: "cspl",
		title: "Computer Science Premier League",
		image: "https://images.unsplash.com/photo-1607494628003-613b464734e7?w=600&h=400&fit=crop&crop=entropy",
		description: "CSE Department's official cricket league.",
		date: "May 10, 2024",
	},
	{
		id: "social-visit",
		title: "Annual Social Visit",
		image: "https://images.unsplash.com/photo-1657282920595-adc2c0736e27?w=600&h=400&fit=crop&crop=entropy",
		description: "A day of fun and bonding with the children.",
		date: "June 20, 2024",
	},
];
