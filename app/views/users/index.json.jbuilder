json.array!(@users) do |user|
  json.extract! user, :id, :new
  json.url user_url(user, format: :json)
end
