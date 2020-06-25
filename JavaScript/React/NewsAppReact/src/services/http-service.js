const httpService = {
  async get(url) {
    try {
      const response = await fetch(url);
      return response.json();
    } catch(error) {
      throw new Error(`
        An error has occurred: ${error}
        Произошла ошибка: ${error}`);
    }
  }
}

export { httpService };