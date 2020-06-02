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

const currentLocaiton = () => {
  const currentLocation = document.querySelector('.current-location');
  http.get('https://json.geoiplookup.io').then((currentIp) => {
    const city = currentIp.city ? currentIp.city : 'California';
    currentLocation.textContent = city;
  });
};

export default currentLocaiton;
