export default class Api {
  static token = JSON.parse(localStorage.getItem("@kenzie-habits:token"));

  static headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${this.token}`,
  };
  static async userLogin(data) {
   const response = await fetch("https://habits-kenzie.herokuapp.com/api/userLogin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .catch((err) => console.error(err));
      return response
  }

  static async uptadeProfile(data) {
    return fetch(`https://habits-kenzie.herokuapp.com/api/user/profile`, {
      method: "PATCH",
      headers: this.headers,
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((res) => res)
      .catch((err) => console.error(err));
  }

  static async createHabit(data) {
    return fetch("https://habits-kenzie.herokuapp.com/api/habits", {
      method: "POST",
      headers: this.headers,
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((res) => res)
      .catch((err) => console.error(err));
  }

  static async readAll() {
    return fetch("https://habits-kenzie.herokuapp.com/api/habits", {
      method: "GET",
      headers: this.headers,
    })
      .then((response) => response.json())
      .catch((err) => console.log(err));
  }

  static async readByCategory(habitId) {
    return fetch(
      `https://habits-kenzie.herokuapp.com/api/habits/category/${habitId}`,
      {
        method: "GET",
        headers: this.headers,
      }
    )
      .then((response) => response.json())
      .then((res) => res)
      .catch((err) => console.error(err));
  }

  static async uptadeHabit(data, habitId) {
    return fetch(`https://habits-kenzie.herokuapp.com/api/habits/${habitId}`, {
      method: "PATCH",
      headers: this.headers,
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((res) => res)
      .catch((err) => console.error(err));
  }

  static async completeHabit(habitId) {
    return fetch(
      `https://habits-kenzie.herokuapp.com/api/habits/complete/${habitId}`,
      {
        method: "PATCH",
        headers: this.headers,
      }
    )
      .then((response) => response.json())
      .then((res) => res)
      .catch((err) => console.error(err));
  }

  static async deleteHabit(habitId) {
    fetch(`https://habits-kenzie.herokuapp.com/api/habits/${habitId}`, {
      method: "DELETE",
      headers: this.headers,
    })
      .then((response) => console.log(response))
      .then((res) => res)
      .catch((err) => console.error(err));
  }
}
