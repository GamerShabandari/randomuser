let profileContainerDiv = document.getElementById("profileContainerDiv");
let buttonContainer = document.getElementById("buttonContainer");
let generateUserBtn = document.getElementById("generateUserBtn");


window.onload = generateUser;

// function som hämtar random user via API
function generateUser() {

    fetch("https://randomuser.me/api/")
        .then(response => response.json())
        .then(userObject => {
            renderUser(userObject);
        });

};


//funnction som visar skapad användare på sidan

function renderUser (userobject){
    console.log(userobject.results[0]);
    let newGeneratedUser = userobject.results[0];

    let userProfileDiv = document.createElement("div");
    
    let userProfilePicture = document.createElement("img");
    userProfilePicture.src = newGeneratedUser.picture.large;
    let userProfileName = document.createElement("h1");
    userProfileName.innerText = newGeneratedUser.name.title + " " + newGeneratedUser.name.first + " " + newGeneratedUser.name.last;
    let userProfileEmail = document.createElement("h2");
    userProfileEmail.innerText = newGeneratedUser.email;


    userProfileDiv.append(userProfilePicture, userProfileName, userProfileEmail);

    profileContainerDiv.innerHTML = "";
    profileContainerDiv.append(userProfileDiv);

};



// knapp som kallar på random user funktion 

generateUserBtn.addEventListener("click", function(){
    generateUser();
});