# main.py
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
#from posts_data import posts
from fastapi import FastAPI, Query


app = FastAPI()

# 讓前端可連線（CORS 設定）
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # 實際開發中建議只允許特定網域
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# 取得所有貼文
@app.get("/posts")
def get_posts():
    return posts

# 新增按讚
@app.post("/like/{post_id}")
def add_like(post_id: int):
    for post in posts:
        if post["id"] == post_id:
            post["likes"] += 1
            return {"message": "Liked!", "likes": post["likes"]}
    return {"error": "Post not found"}

# 新增留言
@app.post("/comment/{post_id}")
def add_comment(post_id: int, name: str = Query(...), comment: str = Query(...)):
    for post in posts:
        if post["id"] == post_id:
            post["comments"].append({"user": name, "text": comment})
            return {"message": "Comment added!", "comments": post["comments"]}
    return {"error": "Post not found"}

posts = [
    {
        "id": 1,
        "user": "CouchPotato",
        "content": "有沒有記憶吐司，讓我馬上學會寫API🫠",
        "likes": 66,
        "comments": [ 
            { "user": "Tom", "text": "加油了兄弟！" }
            
            ]
    },
    {
        "id": 2,
        "user": "Tingisgood",
        "content": "希望下次連假我也可以去露營！",
        "likes": 87,
        "comments": [
            { "user": "Cry", "text": "你會習慣跟前端約會的" }
        ]
    }
    
 
]
