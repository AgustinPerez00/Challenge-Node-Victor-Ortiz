# Challenge Backend Inprovein 2021

- Open console

- Clone repository - git clone https://github.com/ortizvictorw/ortizvictorw-ortizvictorw-Challenge-Backend-inprovein-2021.git

- Configure .ENV.EXAMPLE

- Delete .EXAMPLE

- Enter: ENV

- Set your environment variables
____
## Example variables 

- DB_USER = ortiz_user
- DB_NAME = challenge-base_v3
- DB_PASS = pia54841008
- SECRET = hard
- SECRET_2 = hard_2
- MP_CREDENTIALS = APP_USR-6623451607855904-111502-1f258ab308efb0fb26345a2912a3cfa5-672708410

____

- within the root path

- open termnal

- npm install

- npm run dev




# Create user
endpoint: POST - http: // localhost: 3000 / api / users

<pre>

body:
{
    "name": "Victor Ortiz",
    "email": "ortiz.victor.w@gmail.com",
    "password": "12345"
}

res: {
    "status": "saved User",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwNTBjOGMzNTk1OGZiM2NhOWRhMjFjMiIsImlhdCI6MTYxNTkwNzAxMNXBTXNTkwNzAxMXMXNiBTkwNzAxMXNifNTkwNzAxMXNif1BTkwNzAxMXNif
}
</pre>

____

# Create TvShoW
- Endpoint: POST - http: // localhost: 3000 / api / tvShow /
- header: x-access-token

<pre>
body:
{
    "title": "Game of Thrones",
    "description": "Game of Thrones - called Game of Thrones in Spain - is a medieval fantasy and drama television series created by David Benioff and D. B. Weiss and produced by HBO.",
    "season": 1,
    "episode": 1,
    "genre": "action",
    "actors": ["Sean Bean", "Mark Addy", "Nikolaj Coster-Waldau"]
    
}



res:
[
    {
        "director": [],
        "actors": [
            "Sean Bean",
            "Mark Addy",
            "Nikolaj Coster-Waldau"
        ],
        "_id": "6050be64b9499c33d8051184",
        "title": "Game of Thrones",
        "season": 1,
        "description": "Game of Thrones - called Game of Thrones in Spain - is a medieval fantasy and drama television series created by David Benioff and D. B. Weiss and produced by HBO.",
        "genre": "action",
        "episode": 1,
        "__v": 0
    }
]
</pre>
____

# Create Director

- Endpoint: POST - http: // localhost: 3000 / api / director

<pre>
body:
    {
        "name": "B. Weiss"
    }

answer:
    {
        "_id": "60509840ad8be01bfb1ae775",
        "name": "David Benioff",
        "__v": 0
    },

</pre>
____

# Assign director to tv show

- Endpoint: PUT - http: // localhost: 3000 / api / tvShow / assigndirector /: id => _id of the movie

<pre>

body:
{

    "director": "6050aad77016d72ac25ca27e" => _id of the director
}
</pre>

____

# Create Movie
- Endpoint: POST - http: // localhost: 3000 / api / movies /
- headers: x-access-token

<pre>
body:
{
    "title": "X-MEN",
    "description": "The X-Men, also known as Patrulla-X in Spain1, are a team of fictional superheroes that appear in American comics published by Marvel Comics",
    "actors": [
"Michael Fassbender"
"Jennifer Lawrence"
"Nicholas Hoult"
"January Jones"
"Rose Byrne"
"Kevin Bacon"
"Zoe Kravitz"
]
    
}



res:
[
    {
        "director": [],
        "actors": [
            "Michael Fassbender"
            "Jennifer Lawrence"
            "Nicholas Hoult"
            "January Jones"
            "Rose Byrne"
            "Kevin Bacon"
            "Zoe Kravitz"
            ],
        "_id": "6050be64b9499c33d8051184",
        "title": "X-MEN",
       "description": "The X-Men, also known as Patrulla-X in Spain1, are a team of fictional superheroes that appear in American comics published by Marvel Comics",
        "__v": 0
    }
]

</pre>
____
# Create Director

- Endpoint: POST - http: // localhost: 3000 / api / director
<pre>
body:
    {
        "name": "Matthew Vaughn"
    }

res:
    {
        "_id": "60509840ad8be01bfb1a5451",
        "name": "Matthew Vaughn",
        "__v": 0
    },


</pre>
____
# Assign director to movie

- Endpoint: PUT - http: // localhost: 3000 / api / movies / assigndirector /: id => _id of the movie
<pre>

body:
{
    "director": "60509840ad8be01bfb1a5451" => _id of the director
}
</pre>

____

# Search TV show by actor

- endpoint: GET - http: // localhost: 3000 / api / tvShow / searchByActor /: actor => actor name ej: Sean Bean

<pre>
res:
[
    {
        "director": [],
        "actors": [
            "Sean Bean",
            "Mark Addy",
            "Nikolaj Coster-Waldau"
        ],
        "_id": "6050d9f8531dde48ad16e3cb",
        "title": "Game of Thrones",
        "season": 1,
        "description": "Game of Thrones - called Game of Thrones in Spain - is a medieval fantasy and drama television series created by David Benioff and D. B. Weiss and produced by HBO.",
        "genre": "action",
        "episode": 1,
        "__v": 0
    }
]

</pre>
____

# Search movie by title

- endpoint: GET - http: // localhost: 3000 / api / movies / searchByTitle /: title => ej: X-MEN

<pre>
res:
[
    {
        "director": [
            {
                "_id": "6050cc1f989e473f70b6619a",
                "name": "Matthew Vaughn",
                "__v": 0
            }
        ],
        "actors": [
            "Michael Fassbender",
            "Jennifer Lawrence",
            "Nicholas Hoult",
            "January Jones",
            "Rose Byrne",
            "Kevin Bacon",
            "Zoe Kravitz"
        ],
        "_id": "6050cbd6989e473f70b66198",
        "title": "X-MEN",
        "description": "The X-Men, also known as Patrulla-X in Spain1, are a team of fictional superheroes that appear in American comics published by Marvel Comics",
        "__v": 0
    }
]
</pre>
