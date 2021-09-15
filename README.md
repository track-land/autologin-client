
# AUTOLOGIN API

  Autologin for Track Land

# Simple documentation

Receive the email and return the url to autologin

### Header

| parameter | value                                            |
| --------- | ------------------------------------------------ |
| `Authorization` | `Bearer {{appToken}}` |

### Parameters

| parameter | type    | description                                      |
| --------- | ------- | ------------------------------------------------ |
| `email`     | String | email associated with user account |

### Request

```bash
curl --location -g --request POST 'https://api.trackland.srv.br/v1/autologin' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer {{appToken}}' \
--data-raw '{ "email": "teste@example.com" }'
```

### Example Response - 201

Returns a json with token, username, email and url

```json
{
  "token": "2b73b6fccea4928",
  "url": "https://tauruscard.iterwelkom.com/login-by-token/2b73b6fccea4928",
  "username": "usertest",
  "email": "teste@example.com"
}
```

### Example Error Response - User not found - 404

Returns a error

```json
{
  "error": "Usuário não encontrado."
}
```

### Example Error Response - Invalid Token - 401

Returns a error

```json
{
  "error": "Token inválido."
}
```

### Example Error Response - Generic Error - 400

Returns a error

```json
{
  "error": "Erro genérico."
}
```
