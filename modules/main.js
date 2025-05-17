import { initCarousel } from "./mobileCards";

document.addEventListener("DOMContentLoaded", () => {
  initCarousel();
});

function fetchRecentPosts() {
  const accessToken = "";
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
