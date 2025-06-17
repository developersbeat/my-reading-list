# My Reading List

A simple full-stack reading list app built using **Nuxt 3**, **Nuxt UI**, and **SQLite**. This app allows users to add, view, mark as read/unread, and delete books from their personal reading list.

---

## Features

- View all books with title, author, and read/unread status
- Add a new book to the list
- Toggle a book’s read/unread status
- Delete a book from the list
- Lightweight UI with Nuxt UI components
- Data stored in **SQLite** using Nuxt server routes

---

## Technology Used

- **Nuxt 3** (Vue 3) - Frontend
- **Nuxt UI** (for UI components) - Frontend
- **Tailwind** (for css) - Frontend
- **SQLite** (lightweight SQL database) - Database
- **Nuxt Server API Routes** (`/server/api/`) - Backend APIs

---

## Installation

```bash
git clone https://github.com/developersbeat/my-reading-list.git
cd my-reading-list
npm install
```

---

## Development

```bash
npm run dev
```

Open your browser at: [http://localhost:3000](http://localhost:3000)

---

---

## Project Structure

```bash
├── components/
│   ├── BookForm.vue         # Displays the form to enter a new book card
│   └── BookCard.vue         # Displays each book card with toggle + delete
├── layouts/
│   └── default.vue          # App layout with navigation
├── pages/
│   ├── index.vue            # Lists all books
│   └── add-book.vue         # Add a new book form page
├── server/
│   ├── api/
│   │   └── books/
│   │     ├── index.get.ts   # GET and POST books
│   │     ├── index.post.ts
│   │     ├── [id].put.ts    # PUT and DELETE by ID 
│   │     └── [id].delete.ts      
│   ├── utils/
│         └── db.js          # SQLite DB connection and helper
├── app.vue                  # Root app entry
├── nuxt.config.ts           # Nuxt config with Nuxt UI and Tailwind
├── package.json             # All the packages
└── README.md
```

---

## SQLite Database

SQLite is used as a lightweight local database. Books are stored in a `books` table with the following fields:

| Field     | Type    | Description          |
|-----------|---------|----------------------|
| id        | INTEGER | Primary key          |
| title     | TEXT    | Book title           |
| author    | TEXT    | Book author          |
| is_read   | INTEGER | 1 = Read, 0 = Unread |

The database is automatically created at runtime if it doesn't exist.
If it doesn't: 

### Step 1: Open SQLite CLI

If you have SQLite installed, run the following command in your terminal:

```bash
sqlite3 books.db
```

### Step 2: Create the books Table

Paste the following SQL statment

```bash
CREATE TABLE IF NOT EXISTS books (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT NOT NULL,
  author TEXT NOT NULL,
  is_read INTEGER DEFAULT 0
);
```

This will create the table. 

### Step 3: To Verify

- This will list all the tables
```bash
.tables
```

- This will disclose the schema of the table (books)
```bash
.schema books
```

---

## Deploy

To build for production:

```bash
npm run build
npm run preview
```