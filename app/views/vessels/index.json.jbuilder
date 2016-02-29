json.array!(@vessels) do |vessel|
  json.extract! vessel, :id
  json.url vessel_url(vessel, format: :json)
end
