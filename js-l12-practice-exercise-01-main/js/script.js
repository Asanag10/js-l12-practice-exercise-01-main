const randomFolks = document.querySelector(".random-peeps");

const getData = async function () {
  const usersRequest = await fetch("https://randomuser.me/api?results=5");
  const data = await usersRequest.json();
  //console.log(data);

   //map the variable "userResults" to the property name, "results", for the array of objects.
  const userResults = data.results;
  
  console.log(userResults);

  // Call displayUsers and pass userResults
  displayUsers(userResults); 
};

getData();

//#7 of exercise 1 - create a new function expression...
const displayUsers = function (userResults) {
  randomFolks.innerHTML = ""; //emptying/clear the randomFolks element’s contents

  //#8 of exercise 1 - loop over userResults...
  for (const user of userResults) {
    const country = user.location.country;
    const name = user.name.first;
    const imageUrl = user.picture.medium;
    const userDiv = document.createElement("div");
    
    //#9 of exercise 1 - create a div element...
    userDiv.innerHTML = ` 
        <h3>${name}</h3>
        <p>${country}</p>
        <img src=${imageUrl} alt="User avatar" />
    `; 

    //#10 of exercise 1 Append userDiv to the randomFolks element.
    randomFolks.append(userDiv); 
  }
};





