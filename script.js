const reposDiv = document.getElementById("gitrepos");
const repoList = document.getElementById("repolist");

getRepos();

async function getRepos(){
    const url = "https://api.github.com/users/simonjcode/repos";
    const response = await fetch(url);
    const result = await response.json();

    result.sort(function(a, b){
        return b.id - a.id;
    })

    for(i = 0; i < 5; i++){
        let a = document.createElement("a");
        a.href = result[i].html_url;
        a.innerHTML = result[i].name + "<br>";
        reposDiv.appendChild(a);
    }

    console.log(result);
}