
    const loaderElement = document.querySelector("#loader");
    const errorElement = document.querySelector("#error");
    const jokeElement = document.querySelector("#joke-text");

    let jokeText = "";

    const fetchParams = {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
      },
      mode: 'cors',
    }

    function getJoke() {
      loaderElement.classList.remove("hidden");
      errorElement.classList.add("hidden");

      fetch("https://api.chucknorris.io/jokes/random", fetchParams)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          const { value } = data;

          jokeElement.textContent = "";
          jokeText = document.createTextNode(value);
          jokeElement.appendChild(jokeText);

          loaderElement.classList.add("hidden");
        })
        .catch((error) => {
          loaderElement.classList.add("hidden");
          errorElement.classList.remove("hidden");
        })
    }
