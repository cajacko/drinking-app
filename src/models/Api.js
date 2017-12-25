import { createClient } from 'contentful';

class Api {
  constructor() {
    this.client = createClient({
      space: process.env.CONTENTFUL_SPACE,
      accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
    });

    this.getGames = this.getGames.bind(this);
  }

  getGames() {
    return this.client.sync({ initial: true });
  }
}

export default Api;
