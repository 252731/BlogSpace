
let postsArray = []
const titleInput = document.getElementById("post-title")
const bodyInput = document.getElementById("post-body")
const form =document.getElementById("blog-list")

function renderPosts() {
    let html = " "
    for (let post of postsArray) {
        html += `
        <h3>${post.title}</h3>
        <p>${post.body}</p>
        <hr />
         `
        document.getElementById("existing-posts").innerHTML = html
    }
}


fetch("https://apis.scrimba.com/jsonplaceholder/posts")
        .then(response => response.json())
        .then(data => {
            postsArray = data.slice(0, 5)
            renderPosts()
        })
        

document.getElementById("blog-list").addEventListener('submit', function (event) {
    event.preventDefault()

    const postTitle = titleInput.value
    const postBody = bodyInput.value
    const data = {
        title: postTitle,
        body: postBody
    }
    const options = {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        }
    }
    fetch("https://apis.scrimba.com/jsonplaceholder/posts", options)
        .then(res => res.json())
        .then(data => {
           postsArray.unshift(data)
           renderPosts()

        })
       form.reset()

})
