export async function get4thYears(){
    try {
        const res = await fetch("https://script.google.com/macros/s/AKfycbx2_xNoP_bNng1WTrHvwfOFNI2P2cukfaoz-tYafUJYU_udRJdMdzbLP03CFlwimMoF/exec",{
            cache: "no-store"
        });

        if (!res.ok) {
            console.error(`Error in response: ${res.status}`);
            return [];
        }

            const data = await res.json();
            return Array.isArray(data) ? data : [];
    } catch (error) {
        console.error("Error fetching 4th years data:", error);
        return [];
    }
}