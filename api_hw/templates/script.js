// const apiUrl = "http://127.0.0.1:8000";

// async function loadPosts() {
//   const res = await fetch(`${apiUrl}/posts`);
//   const posts = await res.json();

//   const container = document.getElementById("postContainer");
//   container.innerHTML = "";

//   posts.forEach(post => {
//     const div = document.createElement("div");
//     div.className = "post";
//     div.innerHTML = `
//       <h3>${post.user}</h3>
//       <p>${post.content}</p>
//       <button class="btn" onclick="likePost(${post.id})">👍 ${post.likes}</button>
//       <button class="btn" onclick="showCommentBox(${post.id})">💬 留言</button>
//       <ul class="comment">
//         ${post.comments.map(c => `
//           <ol><b>${c.user}</b>：${c.text}</ol>`).join("")}
//       </ul>
//       <div id="commentBox-${post.id}"></div>
//     `;
//     container.appendChild(div);
//   });
// }

// async function likePost(id) {
//   await fetch(`${apiUrl}/like/${id}`, { method: "POST" });
//   loadPosts();
// }

// function showCommentBox(id) {
//   const box = document.getElementById(`commentBox-${id}`);
//   box.innerHTML = `
//     <input id="commentUser-${id}" placeholder="輸入你的名稱..." />
//     <input id="commentInput-${id}" placeholder="輸入留言..."/>
//     <button onclick="addComment(${id})">送出</button>
//   `;
// }

// async function addComment(id) {
//   const nameInput = document.getElementById(`commentUser-${id}`);
//   const commentInput = document.getElementById(`commentInput-${id}`);

//   const name = nameInput.value.trim();
//   const comment = commentInput.value.trim();

//   if (!name || !comment) {
//     alert("請輸入名稱和留言內容喔！");
//     return;
//   }

//   await fetch(`${apiUrl}/comment/${id}?name=${encodeURIComponent(name)}&comment=${encodeURIComponent(comment)}`, {
//     method: "POST"
//   });

//   loadPosts();
// }


// loadPosts();
