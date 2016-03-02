class InitialMigration < ActiveRecord::Migration
  def change
    create_table "additions", force: :cascade do |t|
      t.string   "name"
      t.float    "value"
      t.integer  "status_id"
      t.integer  "unit_id"
      t.integer  "batch_id"
      t.datetime "created_at", null: false
      t.datetime "updated_at", null: false
    end

    create_table "batches", force: :cascade do |t|
      t.string   "code"
      t.integer  "volume"
      t.string   "name"
      t.integer  "unit_id"
      t.datetime "created_at", null: false
      t.datetime "updated_at", null: false
    end

    create_table "measurements", force: :cascade do |t|
      t.string   "name"
      t.float    "value"
      t.integer  "status_id"
      t.integer  "unit_id"
      t.datetime "created_at", null: false
      t.datetime "updated_at", null: false
    end

    create_table "sources", force: :cascade do |t|
      t.string   "name"
      t.text     "notes"
      t.datetime "created_at", null: false
      t.datetime "updated_at", null: false
    end

    create_table "states", force: :cascade do |t|
      t.string   "name"
      t.datetime "created_at", null: false
      t.datetime "updated_at", null: false
    end

    create_table "statuses", force: :cascade do |t|
      t.integer  "volume"
      t.integer  "batch_id"
      t.integer  "unit_id"
      t.integer  "vessel_id"
      t.integer  "state_id"
      t.datetime "closed"
      t.datetime "created_at", null: false
      t.datetime "updated_at", null: false
    end

    create_table "units", force: :cascade do |t|
      t.string   "name"
      t.integer  "dimensions"
      t.float    "factor"
      t.integer  "base_id"
      t.datetime "created_at", null: false
      t.datetime "updated_at", null: false
      t.string   "short_name"
    end

    create_table "users", force: :cascade do |t|
      t.string   "email"
      t.string   "crypted_password"
      t.string   "salt"
      t.datetime "created_at"
      t.datetime "updated_at"
      t.string   "remember_me_token"
      t.datetime "remember_me_token_expires_at"
      t.string   "reset_password_token"
      t.datetime "reset_password_token_expires_at"
      t.datetime "reset_password_email_sent_at"
    end

    add_index "users", ["email"], name: "index_users_on_email", unique: true
    add_index "users", ["remember_me_token"], name: "index_users_on_remember_me_token"
    add_index "users", ["reset_password_token"], name: "index_users_on_reset_password_token"

    create_table "vessel_types", force: :cascade do |t|
      t.string   "name"
      t.string   "abbreviation"
      t.datetime "created_at",   null: false
      t.datetime "updated_at",   null: false
    end

    create_table "vessels", force: :cascade do |t|
      t.integer  "vessel_type_id"
      t.string   "code"
      t.integer  "volume"
      t.integer  "unit_id"
      t.datetime "created_at",  null: false
      t.datetime "updated_at",  null: false
    end
  end
end
