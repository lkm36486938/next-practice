export const API = {
    PEOPLE: "/api/people",
};

export async function Fetcher(url: string, options?: RequestInit) {
    try {
        let result = await fetch(url, { ...options });
        return await result.json();
    } catch (error) {
        throw error;
    }
}

export async function getPeopleList() {
    return await Fetcher(API.PEOPLE, { method: "get" });
}
