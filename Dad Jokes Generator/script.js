const btnEl = document.getElementById("btn");
const jokeEl = document.getElementById("joke");

const apiKey = "hGsj+mhkR0jGKrf0uklAoQ==Y7rbKpqpvi1LYemH";

const options = {
  method: "GET",
  headers: {
    "X-Api-Key": apiKey,
  },
};

const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";

async function getJoke() {
  try {
    jokeEl.innerText = "Updating...";
    btnEl.disable = true;
    btnEl.innerText = "Loading...";
    const response = await fetch(apiURL, options);
    const data = await response.json();

    btnEl.disable = false;
    btnEl.innerText = "Tell me a Joke";

    jokeEl.innerText = data[0].joke;
  } catch (error) {
    jokeEl.innerText = "An Error has occurred, please try again";
    btnEl.disable = false;
    btnEl.innerText = "Tell me a Joke";
    console.log(error.message);
  }
}

btnEl.addEventListener("click", getJoke);
