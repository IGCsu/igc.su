<p align="center">
    <a href="https://igc.su" target="_blank">
        <img src="https://igc.su/images/IGC.png" height="100">
    </a>
</p>

## О проекте

Это сайт небольшого интернет-сообщества IGC.\
Сайт используется для публикации Устава сообщества, проведения выборов и для вывода статистики. 

### API
Для использования API требуется авторизация через долгосрочный `Bearer`-токен. REST API.

GET `/api/members` - [Получение всех участников сообщества](#memberIndex)\
GET `/api/members/{id}` - [Получение участника сообщества](#memberShow)\
PUT `/api/members/{id}` - [Обновление участника сообщества](#memberUpdate)\
POST `/api/members` - Создание участника сообщества (не поддерживается)\
DELETE `/api/members/{id}` - Удаление участника сообщества (не поддерживается)


GET `/api/members` - [Получение всех ролей](#roleIndex)\
GET `/api/roles/{id}` - [Получение роли](#roleShow)\
PUT `/api/roles/{id}` - [Обновление роли](#roleUpdate)\
POST `/api/roles` - Создание роли (не поддерживается)\
DELETE `/api/roles/{id}` - [Удаление роли](#roleDelete)


GET `/api/channels` - [Получение всех каналов](#channelIndex)\
GET `/api/channels/{id}` - [Получение канала](#channelShow)\
PUT `/api/channels/{id}` - [Обновление канала](#channelUpdate)\
POST `/api/channels` - Создание канала (не поддерживается)\
DELETE `/api/channels/{id}` - [Удаление канала](#channelDelete)

---
<h5 name="memberIndex">GET <code>/api/members</code> Получение всех участников сообщества</h5>

Params:
- `page` - Страница (optional, default. 1)
- `count` - Кол-во элементов на одной странице (optional, default. 10000)
```json
{
    "current_page": 1,
    "data": [
        {
            "id": 256114365894230018,
            "name": "Русиш",
            "discriminator": "0197",
            "avatar": "avatars/256114365894230018/b09f871fbb4b2ec25883a72ae71eea03",
            "search": "256114365894230018русиш#0197",
            "roles": "['562545964708134912', '613412133715312641', '648762974277992448']",
            "headRole": "607650874097139733",
            "created_at": "2022-07-24T16:48:38.000000Z",
            "updated_at": "2022-07-24T16:48:38.000000Z"
        }
    ],
    "first_page_url": "https://igc.su/api/members?page=1",
    "from": 1,
    "last_page": 1,
    "last_page_url": "https://igc.su/api/members?page=1",
    "links": [
        {
            "url": null,
            "label": "&laquo; Previous",
            "active": false
        },
        {
            "url": "https://igc.su/api/members?page=1",
            "label": "1",
            "active": true
        },
        {
            "url": null,
            "label": "Next &raquo;",
            "active": false
        }
    ],
    "next_page_url": null,
    "path": "https://igc.su/api/members",
    "per_page": 10000,
    "prev_page_url": null,
    "to": 1,
    "total": 1
}
```
---
<h5 name="memberShow">GET <code>/api/members/{id}</code> Получение участника сообщества</h5>

```json
{
    "id": 256114365894230018,
    "name": "Русиш",
    "discriminator": "0197",
    "avatar": "avatars/256114365894230018/b09f871fbb4b2ec25883a72ae71eea03",
    "search": "256114365894230018русиш#0197",
    "roles": "['562545964708134912', '613412133715312641', '648762974277992448']",
    "headRole": "607650874097139733",
    "created_at": "2022-07-24T16:48:38.000000Z",
    "updated_at": "2022-07-24T16:48:38.000000Z"
}
```
---
<h5 name="memberUpdate">PUT <code>/api/members/{id}</code> Обновление участника сообщества</h5>

Params:
- `name` - Имя участника в сообществе (required, string, max:1000)
- `discriminator` - Дискриминатор участника (required, string, size:4)
- `avatar` - Кол-во элементов на одной странице (required, string, nullable)
- `roles` - Кол-во элементов на одной странице (required, json)
```json
{
    "id": 256114365894230018,
    "name": "Русиш",
    "discriminator": "0197",
    "avatar": "avatars/256114365894230018/b09f871fbb4b2ec25883a72ae71eea03",
    "search": "256114365894230018русиш#0197",
    "roles": "['562545964708134912', '613412133715312641', '648762974277992448']",
    "headRole": "607650874097139733",
    "created_at": "2022-07-24T16:48:38.000000Z",
    "updated_at": "2022-07-24T16:48:38.000000Z"
}
```
---
<h5 name="roleIndex">GET <code>/api/roles</code> Получение всех ролей</h5>

Params:
- `page` - Страница (optional, default. 1)
- `count` - Кол-во элементов на одной странице (optional, default. 10000)
```json
{
    "current_page": 1,
    "data": [
        {
            "id": 648762974277992448,
            "name": "alive",
            "color": "13565893",
            "position": "90",
            "created_at": "2022-07-24T18:19:38.000000Z",
            "updated_at": "2022-07-24T18:19:38.000000Z"
        }
    ],
    "first_page_url": "https://igc.su/api/roles?page=1",
    "from": 1,
    "last_page": 1,
    "last_page_url": "https://igc.su/api/roles?page=1",
    "links": [
        {
            "url": null,
            "label": "&laquo; Previous",
            "active": false
        },
        {
            "url": "https://igc.su/api/roles?page=1",
            "label": "1",
            "active": true
        },
        {
            "url": null,
            "label": "Next &raquo;",
            "active": false
        }
    ],
    "next_page_url": null,
    "path": "https://igc.su/api/roles",
    "per_page": 10000,
    "prev_page_url": null,
    "to": 1,
    "total": 1
}
```
---
<h5 name="roleShow">GET <code>/api/roles/{id}</code> Получение роли</h5>

```json
{
    "id": 648762974277992448,
    "name": "alive",
    "color": "13565893",
    "position": "90",
    "created_at": "2022-07-24T18:19:38.000000Z",
    "updated_at": "2022-07-24T18:19:38.000000Z"
}
```
---
<h5 name="roleUpdate">PUT <code>/api/roles/{id}</code> Обновление роли</h5>

Params:
- `name` - Название роли (required, string, max:1000)
- `color` - Цвет роли (required, string)
- `position` - Позиция роли (required, integer)
```json
{
    "id": 648762974277992448,
    "name": "alive",
    "color": "13565893",
    "position": "90",
    "created_at": "2022-07-24T18:19:38.000000Z",
    "updated_at": "2022-07-24T18:19:38.000000Z"
}
```
---
<h5 name="roleDelete">DELETE <code>/api/roles/{id}</code> Удаление роли</h5>

```json
{
    "id": 648762974277992448,
    "name": "alive",
    "color": "13565893",
    "position": "90",
    "created_at": "2022-07-24T18:19:38.000000Z",
    "updated_at": "2022-07-24T18:19:38.000000Z"
}
```
---
<h5 name="channelIndex">GET <code>/api/channels</code> Получение всех каналов</h5>

Params:
- `page` - Страница (optional, default. 1)
- `count` - Кол-во элементов на одной странице (optional, default. 10000)
```json
{
    "current_page": 1,
    "data": [
        {
            "id": 453272494724349963,
            "type": "0",
            "position": "12",
            "name": "основной",
            "topic": "Основной канал для общения",
            "nsfw": "0",
            "parent_id": "500034754406645760",
            "created_at": "2022-07-24T18:52:58.000000Z",
            "updated_at": "2022-07-24T18:52:58.000000Z"
        }
    ],
    "first_page_url": "https://igc.su/api/channels?page=1",
    "from": 1,
    "last_page": 1,
    "last_page_url": "https://igc.su/api/channels?page=1",
    "links": [
        {
            "url": null,
            "label": "&laquo; Previous",
            "active": false
        },
        {
            "url": "https://igc.su/api/channels?page=1",
            "label": "1",
            "active": true
        },
        {
            "url": null,
            "label": "Next &raquo;",
            "active": false
        }
    ],
    "next_page_url": null,
    "path": "https://igc.su/api/channels",
    "per_page": 10000,
    "prev_page_url": null,
    "to": 1,
    "total": 1
}
```
---
<h5 name="channelShow">GET <code>/api/channels/{id}</code> Получение канала</h5>

```json
{
    "id": 453272494724349963,
    "type": "0",
    "position": "12",
    "name": "основной",
    "topic": "Основной канал для общения",
    "nsfw": "0",
    "parent_id": "500034754406645760",
    "created_at": "2022-07-24T18:52:58.000000Z",
    "updated_at": "2022-07-24T18:52:58.000000Z"
}
```
---
<h5 name="channelUpdate">PUT <code>/api/channels/{id}</code> Обновление канала</h5>

Params:
- `type` - Тип канала (required, integer)
- `position` - Позиция канала (required, integer)
- `name` - Название канала (required, string, max:1000)
- `topic` - Описание канала (required, string, max:1000)
- `nsfw` - NSFW-метка канала (required, boolean)
- `parent_id` - ID канала родителя (required, integer)
```json
{
    "id": 453272494724349963,
    "type": "0",
    "position": "12",
    "name": "основной",
    "topic": "Основной канал для общения",
    "nsfw": "0",
    "parent_id": "500034754406645760",
    "created_at": "2022-07-24T18:52:58.000000Z",
    "updated_at": "2022-07-24T18:52:58.000000Z"
}
```
---
<h5 name="channelDelete">DELETE <code>/api/channels/{id}</code> Удаление канала</h5>

```json
{
    "id": 453272494724349963,
    "type": "0",
    "position": "12",
    "name": "основной",
    "topic": "Основной канал для общения",
    "nsfw": "0",
    "parent_id": "500034754406645760",
    "created_at": "2022-07-24T18:52:58.000000Z",
    "updated_at": "2022-07-24T18:52:58.000000Z"
}
```
