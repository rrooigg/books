import uvicorn
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI()

class Book(BaseModel):
  name: str
  author: str
  year: int

class Books(BaseModel):
  books: list[Book]

origins = [
  "http://localhost:5173",

]
app.add_middleware(
  CORSMiddleware,
  allow_origins=origins,
  allow_credentials=True,
  allow_methods=["*"],
  allow_headers=["*"],

)

memory_db = {
  "books": []
}

@app.post("/books")
def add_book(book: Book):
  memory_db["books"].append(book)
  return book

@app.get("/books", response_model=Books)
def get_books():
  return {"books": memory_db["books"]}