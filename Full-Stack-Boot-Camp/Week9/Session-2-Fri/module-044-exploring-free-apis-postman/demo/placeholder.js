// const myHeaders = new Headers();
// myHeaders.append("Content-Type", "application/json");

// const raw = JSON.stringify({
//   title: "foo",
//   body: "bar",
//   userId: 1,
// });

// const requestOptions = {
//   method: "POST",
//   headers: myHeaders,
//   body: raw,
//   redirect: "follow",
// };

console.log("It'ss Alive");

async function addNewPost() {
  //POST https://jsonplaceholder.typicode.com/posts add a new post
  // put the url in a variable

  const url = "https://jsonplaceholder.typicode.com/posts";

  //try

  //setup options

  try {
    // fetch("https://jsonplaceholder.typicode.com/posts", requestOptions)
    //   .then((response) => response.text())
    //   .then((result) => console.log(result))
    //   .catch((error) => console.error(error));
    const response = await fetch(url, {
      method: "POST",
      // with the body reference from postman
      body: JSON.stringify({
        title: "foo",
        body: "bar",
        userId: 1,
      }),
    });

    console.log("Response Object", response);
    //await to wait for the data to come back
    // convert it from json to an object
    const data = await response.json();

    // log out the data
    console.log("body", data);
    console.log("id", data.id);
  } catch (error) {
    console.error("addNewPost threw", error);
  } finally {
    console.log("done with try and catch");
  }
}

//call addNewPost
// doesn't need await here
//addNewPost();

async function main() {
  await addNewPost();
  console.log("done making new post call");
}

main();
