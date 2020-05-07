const httpService = () => ({
    async get(url) {
        try {
            const response = await fetch(url);
            return await response.json();
        } catch (error) {
            console.log(error);
            return Promise.reject(error);
        }
    },
});
const http = httpService();

export default http;
