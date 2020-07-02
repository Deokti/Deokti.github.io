const httpService = () => ({
  async get(url) {
    try {
      const request = new Request(url);
      const response = await fetch(request);
      return await response.json();
    } catch (error) {
      console.log(error);
      return Promise.reject(error);
    }
  },
});
const http = httpService();

export default http;
