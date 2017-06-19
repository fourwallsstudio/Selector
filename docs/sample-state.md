## Sample State

```js
{
  session: {
    currentUser: {
      id: 1,
      playback_pool: [{
        show_id: 1,
        seek: 45
      }]
    }
  },

  errors: [],

  modal: {
    active: false
  }

  users: {
    1: {
      username: "user",
      email: "me@me.com",
      country: "USA",
      city: "NYC",
      bio: "about",
      avatar_url: "http://alsdkfj.aasdfh,jpg",
      background_img_url: "http://alsdkfj.aasdfh,jpg",
      shows: [1, 2, 3],
      followers: [1, 2, 3],
      following: [5, 6, 7]
    }
  },

  shows:
    entities: {
      1: {
        title: "PLUR",
        url: "/",
        author_id: 1,
        description: "about",
        date_ago: "1 day",
        comments: [1, 2, 3],
        tag_ids: [1, 2, 3],
        }
    },
    current_show: 1
  },

  comments: {
    1: {
      body: "this is good",
      author_id: 1,
      show_id: 1,
      parent_comment_id: 2,
      date_ago: "1 day",
    }
  },

  tags: {
    1: {
      id: 1
      name: "Genre"
    }
  }
}
```
