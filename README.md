## Installation

1. Clone the repository

```bash
git clone https://github.com/dwinarwastu/mern-stack-notes.git
cd mern-stack-notes/backend
```

2. Install dependencies backend

```bash
npm install
```

3. Create a `.env` file in the root directory with the following variables

```
# DATABASE
MONGO_URI="mongodb://localhost:27017/notes_database"

# PORT
PORT=

#UPSTASH
UPSTASH_REDIS_REST_URL=
UPSTASH_REDIS_REST_TOKEN=

```

4. Run the server backend

```bash
npm run dev
```

5. Install dependencies frontend

```bash
cd mern-stack-notes/frontend
npm install
```

6. Run the client frontend

```bash
npm run dev
```
