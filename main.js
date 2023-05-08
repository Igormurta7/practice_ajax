const user = "igormurta7";
const endpoint = `https://api.github.com/users/${user}`;

fetch(endpoint)
  .then(function (resposta) {
    return resposta.json();
  })
  .then(function (json) {
    const repositories = json.public_repos;
    const followers = json.followers;
    const following = json.following;

    document.getElementById("repositories").innerHTML = repositories;
    document.getElementById("followers").innerHTML = followers;
    document.getElementById("following").innerHTML = following;
  })
  .catch(function (erro) {
    alert(
      "Ocorreu um erro ao buscar as informações, tente novamente mais tarde."
    );
  });
