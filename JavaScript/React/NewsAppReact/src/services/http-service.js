const httpService = {
  async get(url) {
    try {
      const request = new Request(url);
      const response = await fetch(request);
      return response.json();
    } catch(error) {
      throw new Error(`
        An error has occurred: ${error}
        Произошла ошибка: ${error}`);
    }
  }
}

export { httpService };