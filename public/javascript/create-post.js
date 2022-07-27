//TODO: test category element to creating a post.
async function newFormHandler(event) {
  event.preventDefault();
  // const imageEl = document.getElementById("imageFile");
  // //console.log(imageEl.files[0]);
  // //const imageData = new FormData();
  // //imageData.append("image", imageEl.files[0]);
  // const imageResponse = await fetch(`https://api.imgur.com/3/upload`, {
  //   method: "POST",
  //   headers: {
  //     authorization: "Client-ID dd79415948c05e6",
  //   },
  //   body: imageEl.files[0],
  // });
  // if (imageResponse.ok) {
  //   alert("image uploaded successfully");
  //   const imageJSON = imageResponse.json();
  //   alert(imageJSON);
  // } else {
  //   alert(imageResponse.statusText);
  // }

  const title = document.querySelector('input[name="post-title"]').value;
  const description = document.querySelector(
    'textarea[name="post-description"]'
  ).value;
  const price = document.querySelector('input[name="post-price"]').value;
  const category_id = document.getElementById("post-category").value;
  const response = await fetch(`/api/posts`, {
    method: "POST",
    body: JSON.stringify({
      title,
      description,
      price,
      category_id,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    document.location.replace("/dashboard");
  } else {
    alert(response.statusText);
  }
}
document
  .querySelector(".new-post-form")
  .addEventListener("submit", newFormHandler);
