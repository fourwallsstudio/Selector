# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170627204105) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "comments", force: :cascade do |t|
    t.text     "body",                              null: false
    t.integer  "show_id",                           null: false
    t.integer  "user_id",                           null: false
    t.boolean  "flagged",           default: false
    t.datetime "created_at",                        null: false
    t.datetime "updated_at",                        null: false
    t.integer  "parent_comment_id"
  end

  add_index "comments", ["parent_comment_id"], name: "index_comments_on_parent_comment_id", using: :btree
  add_index "comments", ["show_id"], name: "index_comments_on_show_id", using: :btree
  add_index "comments", ["user_id"], name: "index_comments_on_user_id", using: :btree

  create_table "queue_items", force: :cascade do |t|
    t.integer  "show_id",    null: false
    t.integer  "user_id",    null: false
    t.float    "seek"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "shows", force: :cascade do |t|
    t.string   "title",              null: false
    t.string   "description"
    t.datetime "created_at",         null: false
    t.datetime "updated_at",         null: false
    t.integer  "author_id",          null: false
    t.string   "audio_file_name",    null: false
    t.string   "audio_content_type", null: false
    t.integer  "audio_file_size",    null: false
    t.datetime "audio_updated_at",   null: false
    t.string   "image_file_name"
    t.string   "image_content_type"
    t.integer  "image_file_size"
    t.datetime "image_updated_at"
  end

  create_table "users", force: :cascade do |t|
    t.string   "username",            null: false
    t.string   "email",               null: false
    t.string   "session_token",       null: false
    t.string   "password_digest",     null: false
    t.datetime "created_at",          null: false
    t.datetime "updated_at",          null: false
    t.string   "avatar_file_name"
    t.string   "avatar_content_type"
    t.integer  "avatar_file_size"
    t.datetime "avatar_updated_at"
    t.text     "bio"
    t.string   "city"
    t.string   "country"
  end

  add_index "users", ["email"], name: "index_users_on_email", unique: true, using: :btree
  add_index "users", ["username"], name: "index_users_on_username", unique: true, using: :btree

end
