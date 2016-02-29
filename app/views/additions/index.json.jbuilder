json.array!(@additions) do |addition|
  json.extract! addition, :id
  json.url addition_url(addition, format: :json)
end
