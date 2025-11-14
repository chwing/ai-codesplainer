"use server"

const VITE_API_BASE_URL = process.env.VITE_API_BASE_URL ;

export async function explain(prevState, formData) {
    const code = formData.get("code");
    const language = formData.get("language");

    try {
        const res = await fetch(`${VITE_API_BASE_URL}/api/explain-code`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ code, language }),
        });

        // wait for the full body to be loaded
        const text = await res.text();

        // try to parse JSON, fall back to raw text if it's not JSON
        let data;
        try {
            data = text ? JSON.parse(text) : null;
        } catch (e) {
            data = text;
        }

        if (!res.ok) {
            return {
                success: false,
                status: res.status,
                error: data || `${res.status} ${res.statusText}`,
            };
        }

        return {
            success: true,
            data,
        };
    } catch (error) {
        return {
            success: false,
            error: error.message,
        };
    }
}