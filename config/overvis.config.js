module.exports = {
    key: '138e8102-116b-4728-98b0-4d09dcdebf15',
    host: ' https://city-farmer.overvis.com/api/v1'
  }

  /*
  Чтобы начать вам нужно получить токен:
curl -s -S -H "Content-Type: application/json" \
        -d '{"apiKey": "138e8102-116b-4728-98b0-4d09dcdebf15" }' \
        "https://city-farmer.overvis.com/api/v1/authenticate/"

Результат:
{"token":"206cf682-912f-4a4d-bf25-c90428cb5f67","expiresOn":"2020-12-26T22:45:52.435Z"}

После этого нужно получить ID организации:
curl -s -S -H "Content-Type: application/json" -H "Authorization: token 206cf682-912f-4a4d-bf25-c90428cb5f67" \
    "https://city-farmer.overvis.com/api/v1/user/orgs/"

Результат:
[{"orgId":459,"orgName":"Игорь Шенаев","userRole":"manager"}]

Этот ID (459) можно использовать в следующих запросах. Например, запрос /org/459/nets/device-param-tree/ выдаст вам список всех сетей/устройств/параметров в этой организации.

*/


