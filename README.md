# My Reading List

A simple full-stack reading list app built using **Nuxt 3**, **Nuxt UI**, and **SQLite**. This app allows users to add, view, mark as read/unread, and delete books from their personal reading list.

---

## Features

- View all books with title, author, and read/unread status
- Add a new book to the list
- Toggle a book’s read/unread status
- Delete a book from the list
- Lightweight UI with Nuxt UI components
- Data stored in **SQLite**

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
  is_read INTEGER NOT NULL DEFAULT 0
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

---

### Notes
- Used Next UI + Tailwind to make the styling work easy.

---