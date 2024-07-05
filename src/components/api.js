
const token = import.meta.env.VITE_API_KEY;

export const fetchApi = () => {
    const fetchData = async (ipAddress) => {
        try {
            const response  = await fetch(`ipinfo.io/${ipAddress}?token=${token}`);
            const data = await response.json();
            return data;
        } catch(err) {
            console.error("Error fetching data", error);
        }
    }
}
