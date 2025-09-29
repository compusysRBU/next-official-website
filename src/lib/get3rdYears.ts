

export async function get3rdYears() {
    try {
        const response = await fetch("https://script.googleusercontent.com/macros/echo?user_content_key=AehSKLhjLaX0BXiP9g5FJiTO2uKtK_4T8pmxD_y3ZoAayi93dHvebgBGE02bsj87wyndKSdp8hRkuLBkCWe8YLaRl3bhIuYjYXGYGRtKIUD_z-VzX01RAdL18MAaaljA1VzqUxebAMPbZeDqnEii6DjpOtGOj_kP0_mogtbBAjy6uyZUV7L4tYR-6yU7DfwPJ_-0mtpzP9xvlVoeCymVBlaJ5-4_YGsRqmMxZdvUQgv_VJBpV_L72v9KRNq0lz-zDzp30TLK3whqHxiE8PBsvv84TJTSWuWeLQ&lib=M6gvry7PBNUdiyzf-B_FHGxyeNKfa_QZS", { cache: "no-store" });
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

