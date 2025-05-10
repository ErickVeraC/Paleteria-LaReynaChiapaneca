import { initCarousel } from "./mobileCards";

document.addEventListener("DOMContentLoaded", () => {
  initCarousel();
});

function fetchRecentPosts() {
  const accessToken =
    "EAANZAfhJOkUkBOzQfZB7i0MjxAoVzMCLudI6pa0OjdYem1N8AOJs9PcUs1ZA73OBFGfAuzdhw3ZCkblZAVMDdTKH7EMQ8VQCc1ZCs5iwwffbmQK6OcUcNWqhUZA5KOZAgHvctWHZA179PEPn1h6aFnZAgc2L09VrAZBvAcGExuUmG6YjlZBIVIDuV5UVSZAcJdqZBkze3PC0zvFXz4Wx22gtba6CiJDucHH8wZD";
  if (!accessToken) {
    console.error("Access token not found");
    return;
  }

  console.log("Fetching posts with access token:", accessToken);

  FB.api(
    "/me/posts",
    "GET",
    { access_token: accessToken, fields: "id,message,created_time", limit: 10 },
    function (response) {
      console.log("API response:", response);
      if (response && !response.error) {
        renderPosts(response.data);
      } else {
        console.error("Error fetching posts:", response.error);
      }
    }
  );
}

function renderPosts(posts) {
  console.log("Rendering posts:", posts);
  const postsContainer = document.getElementById("facebook-posts");
  postsContainer.innerHTML = "";

  posts.forEach((post) => {
    const postElement = document.createElement("div");
    postElement.className = "facebook-post";
    postElement.innerHTML = `
      <p>${post.message}</p>
      <a href="https://www.facebook.com/${post.id}" target="_blank">Ver en Facebook</a>
    `;
    postsContainer.appendChild(postElement);
  });
}
