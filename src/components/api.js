
const VITE_API_KEY = import.meta.env.VITE_IPINFO_KEY;

export const fetchApi = async (ipAddress) => {
    try {
        const response  = await fetch(`https://ipinfo.io/${ipAddress}?token=e6cf44ad07d4b9`);
        const data = await response.json();
        return data;
    } catch(err) {
        console.error("Error fetching data", err);
    }
    
}
