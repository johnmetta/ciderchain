@amountFormat = (amount) ->
  '$ ' + Number(amount).toLocaleString()

@dateFormat = (date) ->
  Date(date).toString().slice(3,10)


