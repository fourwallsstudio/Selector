# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
email           | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique
country         | string    |
city            | string    |
bio             | string    |
avatar_url      | string    |
background_img_url  | string    |

## shows
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null
url         | text      | not null
author_id   | integer   | not null, foreign key (references users), indexed
image_url   | string    |
length      | string    |
description | text      |

## comments
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
body        | text      | not null
author_id   | integer   | not null, foreign key (references users), indexed
show_id   | integer   | not null, foreign key (references shows), indexed

## tags
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null

## taggings
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
show_id     | integer   | not null, foreign key (references shows), indexed, unique [tag_id]
tag_id      | integer   | not null, foreign key (references tags), indexed
