json.array!(@rackings) do |racking|
  json.extract! racking, :id
  json.url racking_url(racking, format: :json)
end
