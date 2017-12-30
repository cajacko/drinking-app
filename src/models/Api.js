import { createClient } from 'contentful';

class Api {
  constructor() {
    this.url = `https://api.myjson.com/bins/${process.env.MYJSONID}`;

    this.getGames = this.getGames.bind(this);
    this.setGames = this.setGames.bind(this);
  }

  getGames() {
    return fetch(this.url)
      .then((response) => {
        const contentType = response.headers.get('content-type');

        if (contentType && contentType.includes('application/json')) {
          return response.json();
        }

        throw new TypeError("Oops, we haven't got JSON!");
      })
      .then((games) => {
        if (!Array.isArray(games)) {
          throw new TypeError('Response is not an array');
        }

        return games;
      });
  }

  setGames(games) {
    return fetch(this.url, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'PUT',
      body: JSON.stringify(games),
    }).then((response) => {
      if (response.status !== 200) {
        throw new Error('Failed to save data, non 200 response');
      }
    });
  }
}

export default Api;
