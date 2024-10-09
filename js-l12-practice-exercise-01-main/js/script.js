const randomFolks = document.querySelector(".random-peeps");

const getData = async function () {
  const usersRequest = await fetch("https://randomuser.me/api?results=5");
  const data = await usersRequest.json();
  //console.log(data);

  const userResults = data.results;
  //map the variable "userResults" to the property name, "results", for the array of objects.

  console.log(userResults);

  displayUsers(userResults); // Call displayUsers and pass userResults
};

getData();

const displayUsers = function (userResults) {
  //#7 of exercise 1
  randomFolks.innerHTML = ""; //emptying/clear the randomFolks element’s contents

  for (const user of userResults) {
    const country = user.location.country;
    const name = user.name.first;
    const imageUrl = user.picture.medium;
    const userDiv = document.createElement("div");
    //#8 of exercise 1
    userDiv.innerHTML = ` 
        <h3>${name}</h3>
        <p>${country}</p>
        <img src=${imageUrl} alt="User avatar" />
    `; //#9 of exercise 1

    randomFolks.append(userDiv); //#10. Append userDiv to the randomFolks element.
  }
};





