// non-functional example of chaining

function fetchUserData() {
  fetch("/api/user/123") //1
    .then((response) => response.json()) //2
    .then((user) => {
      return fetch(`/api/posts/${user.id}`); //3
    })
    .then((response) => response.json()) //4
    .then((posts) => {
      console.log("User posts:", posts); //5
    })
    .catch((error) => {
      //6
      console.error("Error:", error);
    });
}

//async await - syntactic sugar (replaces .then and .catch )

// functions vs arrow function

// i = i + 1 -> i++
// async / await replaces .then / and new Promise()
async function fetchUserData() {
  //try/catch replaces .catch
  try {
    const response = await fetch("/api/user/123"); //1
    const user = await response.json(); //2

    const postsResponse = await fetch(`/api/posts/${user.id}`); //3
    const posts = await postsResponse.json(); //4

    console.log("User posts:", posts); //5
  } catch (error) {
    //6
    console.error("Error:", error);
  }
}
