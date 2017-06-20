
## Goals

* Create a Portfolio Page to display
The application should have a portfolio page which is used to describe my background and any ties to travelling.
* Create a Blog Page - where you will write about anything related to places visited in the past
The Blog page should have appropriate database table and models associated with blog posts and should have a form where you will enter your blog posts. The page should use the Sequelize module, not the pg module.



## Data Models

### 'posts'

| Column                | Type                |
|-----------------------|---------------------|
|`id`                   | SERIAL (PRIMARY KEY)|
|`user`                 | VARCHAR (NOT NULL)  |
|`password`             | VARCHAR (NOT NULL)  |
|`place`                | VARCHAR (NOT NULL)  |
|`description`          | VARCHAR (NOT NULL)  |
|`from`                 | DATE                |
|`to`                   | DATE                |
|`href`                 | VARCHAR (NOT NULL)  |
|`image`                | VARCHAR (NOT NULL)  |

```json
{
  "id": 12345,
  "user": BrianO,
  "password: Hello1234,
  "place": Budapest,
  "description": During this visit this happened,
  "from": April 4, 2017,
  "to": April 15, 2017,
  "href": http://graphicdesignjunction.com/2017/06/free-fonts-18-new-fonts/,
  "image": "/images/themoon.jpg",
}
```

## Routes

### GET `/`

No argument

* The main page with a brief description of who you are

### GET `/about`

No argument

* Displays a more robust description of yourself and what you do

### GET `/form`

No arguments

* Displays a form for creating a post of a new place visited
* Inputs for travel post fields such as place, description and when visited, but does not show id, which is auto-generated
* Upon submitting, POSTs to `/travel` with data from the form


### POST `/form`

| Argument              | Description                                                                                 |
|-----------------------|---------------------------------------------------------------------------------------------|
| `id`                  | Primary key for the site visited, if one exists. A new id will be made                      |
| `place`               | Name of the site visited                                                                    |
| `description`         | Description of the site visited for the post created.                                       |
| `from`                | Start date of the site visited                                                              |
| `to`                  | End date of the site visited                                                                |
| `href`                | Href within an "a tag" to a flickr url                                                      |
| `img`                 | File of an image as a source within an "a tag" of a url                                     |

* Endpoint for submitting the travel post form
* Provides ability to create or delete a travel post
* Upon success, redirects back to `/travel`




### GET `/travel`

| Argument              | Description                                                                                 |
|-----------------------|---------------------------------------------------------------------------------------------|
| No Arguments          | No Arguments                                                                                |


* Displays each blog post
* In addition there will be an image as a hyperlink to a flickr url where more images can be viewed


* Heroku link: https://sheltered-escarpment-17094.herokuapp.com/
