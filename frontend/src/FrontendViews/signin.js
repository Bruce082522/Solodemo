const username = document.querySelector(".username");
const password = document.querySelector(".password");
const signBtn = document.querySelector("#signin-btn");
const URL = "http://localhost:3000";

signBtn.addEventListener("click", () => {
  // send post '/sign-in'
  fetch(`${URL}/sign-in`, {
    method: "POST",
    headers: new Headers({ "Content-Type": "application/json" }),
    body: JSON.stringify({
      email: username.value,
      password: password.value,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      // deal w/ data in front-end
      sessionStorage.user = JSON.stringify(data);
      const signinLink = document.querySelector("#signin-link");
      //   signinLink.innerHTML = "testuser"; // ${data.username}
      window.location = "http://localhost:8080/#/";
    })
    .catch((e) => console.log(e));
});
