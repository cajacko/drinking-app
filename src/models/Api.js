class Api {
  getGames() {
    return Promise.resolve([
      '{person1} must drink whilst {person2} does nothing',
      'Everyone drinks',
      '{person1}, {person2} and {person3} drinks',
    ]);
  }
}

export default Api;
