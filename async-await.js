const github = async () => {
    try {
        let response = await fetch(
            `https://api.github.com/users/respatik`
        );
        let id = await response.json();
        console.log(id);
        document.getElementById("profile-picture").src = `${id.avatar_url}`
        document.getElementById("username").innerHTML = `${id.login}`
        document.getElementById("name").innerHTML = `${id.name}`
        document.getElementById("bio").innerHTML = `${id.bio}`
        document.getElementById("followers").innerHTML = `${id.followers}`
        document.getElementById("following").innerHTML = `${id.following}`
        document.getElementById("public-repo").innerHTML = `${id.public_repos}`
        document.getElementById("last-updated").innerHTML =`${id.updated_at}`
    } catch {
        console.log("waduh error");
    }
};
github();