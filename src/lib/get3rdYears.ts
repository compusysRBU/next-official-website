export async function get3rdYears() {
	try {
		const response = await fetch(
			"https://script.google.com/macros/s/AKfycbyltonB2H1F9bm0SIMe9aWqvE6ClqS8KgtAAP4i0Q7XjG4BeznyuAfcIrA7EVLREpL-/exec",
			{ cache: "no-store" }
		);
		if (!response.ok) {
			console.error(`Error in response: ${response.status}`);
			return [];
		}
		const data = await response.json();
		return Array.isArray(data) ? data : [];
	} catch (error) {
		console.error("Error fetching 3rd years data:", error);
		return [];
	}
}
