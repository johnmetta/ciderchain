Unit.create!({name: "Liter", dimensions: 3, factor: 1.0, base_id: nil, short_name: "L"})
Unit.create!([
  {name: "Gallon", dimensions: 3, factor: 3.78541178, base_id: Unit.find_by_name('Liter').id, short_name: "gal"},
  {name: "Barrel", dimensions: 3, factor: 225.0, base_id: Unit.find_by_name('Liter').id, short_name: "BBL"}
])
Batch.create!([
  {code: "2016C0001", volume: 50, name: "Emperium", unit_id: Unit.find_by_name('Gallon').id}
])
Source.create!([
  {name: "Hood River Juice Company", notes: nil},
  {name: "Eddie Salminen", notes: nil}
])
State.create!([
  {name: "ordered"},
  {name: "preparation"},
  {name: "primary"},
  {name: "secondary"},
  {name: "aging"},
  {name: "carbonation"},
  {name: "packaged"}
])
VesselType.create!([
  {name: "FlexTank", abbreviation: "FT"},
  {name: "Brite Tank", abbreviation: "Brite"},
  {name: "Barrel", abbreviation: "BBL"}
])
Vessel.create!([
  {vessel_type_id: VesselType.barrel.id, code: "BBL101_wine", volume: 225, unit_id: Unit.find_by_name('Liter').id},
  {vessel_type_id: VesselType.barrel.id, code: "BBL102_wine", volume: 225, unit_id: Unit.find_by_name('Liter').id},
  {vessel_type_id: VesselType.barrel.id, code: "BBL103_wine", volume: 225, unit_id: Unit.find_by_name('Liter').id},
  {vessel_type_id: VesselType.barrel.id, code: "BBL104_wine", volume: 225, unit_id: Unit.find_by_name('Liter').id},
  {vessel_type_id: VesselType.barrel.id, code: "BBL105_wine", volume: 225, unit_id: Unit.find_by_name('Liter').id},
  {vessel_type_id: VesselType.barrel.id, code: "BBL106_wine", volume: 225, unit_id: Unit.find_by_name('Liter').id},
  {vessel_type_id: VesselType.barrel.id, code: "BBL107_wine", volume: 225, unit_id: Unit.find_by_name('Liter').id},
  {vessel_type_id: VesselType.barrel.id, code: "BBL108_wine", volume: 225, unit_id: Unit.find_by_name('Liter').id},
  {vessel_type_id: VesselType.barrel.id, code: "BBL109_wine", volume: 225, unit_id: Unit.find_by_name('Liter').id},
  {vessel_type_id: VesselType.barrel.id, code: "BBL110_wine", volume: 225, unit_id: Unit.find_by_name('Liter').id},
  {vessel_type_id: VesselType.barrel.id, code: "BBL111_wine", volume: 225, unit_id: Unit.find_by_name('Liter').id},
  {vessel_type_id: VesselType.barrel.id, code: "BBL112_wine", volume: 225, unit_id: Unit.find_by_name('Liter').id},
  {vessel_type_id: VesselType.barrel.id, code: "BBL113_bourbon", volume: 195, unit_id: Unit.find_by_name('Liter').id},
  {vessel_type_id: VesselType.barrel.id, code: "BBL114_bourbon", volume: 195, unit_id: Unit.find_by_name('Liter').id},
  {vessel_type_id: VesselType.barrel.id, code: "BBL115_bourbon", volume: 195, unit_id: Unit.find_by_name('Liter').id},
  {vessel_type_id: VesselType.barrel.id, code: "BBL116_bourbon", volume: 195, unit_id: Unit.find_by_name('Liter').id},
  {vessel_type_id: VesselType.flex_tank.id, code: "FT50_1", volume: 50, unit_id: Unit.find_by_name('Gallon').id},
  {vessel_type_id: VesselType.flex_tank.id, code: "FT50_2", volume: 50, unit_id: Unit.find_by_name('Gallon').id},
  {vessel_type_id: VesselType.flex_tank.id, code: "FT70_1", volume: 70, unit_id: Unit.find_by_name('Gallon').id},
  {vessel_type_id: VesselType.flex_tank.id, code: "FT70_2", volume: 70, unit_id: Unit.find_by_name('Gallon').id},
  {vessel_type_id: VesselType.flex_tank.id, code: "FT80_1", volume: 80, unit_id: Unit.find_by_name('Gallon').id},
  {vessel_type_id: VesselType.flex_tank.id, code: "FT80_2", volume: 80, unit_id: Unit.find_by_name('Gallon').id},
  {vessel_type_id: VesselType.flex_tank.id, code: "FT80_3", volume: 80, unit_id: Unit.find_by_name('Gallon').id},
  {vessel_type_id: VesselType.flex_tank.id, code: "FT80_4", volume: 80, unit_id: Unit.find_by_name('Gallon').id},
  {vessel_type_id: VesselType.flex_tank.id, code: "FT80_5", volume: 80, unit_id: Unit.find_by_name('Gallon').id},
  {vessel_type_id: VesselType.flex_tank.id, code: "FT80_6", volume: 80, unit_id: Unit.find_by_name('Gallon').id},
  {vessel_type_id: VesselType.flex_tank.id, code: "FT200_1", volume: 200, unit_id: Unit.find_by_name('Gallon').id},
  {vessel_type_id: VesselType.flex_tank.id, code: "FT300_1", volume: 300, unit_id: Unit.find_by_name('Gallon').id},
  {vessel_type_id: VesselType.flex_tank.id, code: "FT300_2", volume: 300, unit_id: Unit.find_by_name('Gallon').id}
])
Status.create!([
  {volume: 50, batch_id: 1, unit_id: Unit.find_by_name('Gallon').id, vessel_id: Vessel.find_by_code('FT50_1').id, state_id: 6, closed: nil}
])
User.create!([
  {email: "john@spokeandsail.com", password: 'et48ID', password_confirmation: 'et48ID', remember_me_token: nil, remember_me_token_expires_at: nil, reset_password_token: nil, reset_password_token_expires_at: nil, reset_password_email_sent_at: nil}
])
