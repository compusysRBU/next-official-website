export interface EventItem {
	id: string;
	title: string;
	image: string;
	description: string;
	date: string;
}

export const eventItems: EventItem[] = [
	{
		id: "teachers-day",
		title: "Teachers' Day celebration",
		image:
			"https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?w=900&h=600&fit=crop&crop=entropy",
		description:
			"A wholesome celebration to thank our faculty with games, performances and surprises planned by the student committee.",
		date: "September 5, 2025",
	},
	{
		id: "manzar",
		title: "Manzar",
		image: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=600&h=400&fit=crop&crop=entropy",
		description: "A celebration to welcome juniors into the CSE department.",
		date: "March 15, 2025",
	},
	{
		id: "polaris",
		title: "Polaris",
		image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=600&h=400&fit=crop&crop=entropy",
		description: "Annual techno-cultural event of CSE department.",
		date: "April 5, 2025",
	},
	{
		id: "cspl",
		title: "CSPL",
		image: "https://images.unsplash.com/photo-1607494628003-613b464734e7?w=600&h=400&fit=crop&crop=entropy",
		description: "CSE Department's official cricket league.",
		date: "May 10, 2025",
	},

];
