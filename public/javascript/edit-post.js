async function editFormHandler(event) {
  event.preventDefault();

  // const image = document.querySelector('').value.trim();
  const title = document.querySelector('input[name="post-title"]').value.trim();
  const description = document
    .querySelector('textarea[name="post-description"]')
    .value.trim();
  const price = document.querySelector('input[name="post-price"]').value.trim();
  const id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];
  const category_id = document.getElementById("post-category").value;
  const response = await fetch(`/api/posts/${id}`, {
    method: "PUT",
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

document.getElementById("edit-btn").addEventListener("click", editFormHandler);
