# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

## JSON API

### Users

- `POST /api/users`
- `PATCH /api/users`

### Session

- `POST /api/session`
- `DELETE /api/session`

### Shows

- `GET /api/shows`
  - Shows index/search
  - accepts `tag_name` query param to list shows by tag
- `POST /api/shows`
- `GET /api/shows/:id`
- `PATCH /api/shows/:id`
- `DELETE /api/shows/:id`

### Comments

- `GET /api/comments`
- `POST /api/comments`
- `DELETE /api/comments/:id`

### Tags

- `GET /api/tags`
- `POST /api/comments`
