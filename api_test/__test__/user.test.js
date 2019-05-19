/**
 * @jest-environment node
 */

const axios = require('axios');
const baseURI = 'http://127.0.0.1:8000';
const {matchers} = require('jest-json-schema');

expect.extend(matchers);

it('fetch api/users/1 schema', async () => {
    const schema = {
        'type': 'object',
        'required': [
            'id', 'name', 'email', 'email_verified_at', 'created_at', 'updated_at'
        ],
        'properties': {
            'id': {'type': 'integer',},
            'name': {'type': 'string',},
            'email': {'type': 'string',},
            'email_verified_at': {'type': 'string',},
            'created_at': {'type': 'string',},
            'updated_at': {'type': 'string',}
        }
    };
    expect((await fetchUsersByID(1)).data).toMatchSchema(schema);
});

test('fetch api/users/1 snapshot', async () => {
    expect((await fetchUsersByID(1)).data).toMatchSnapshot();
});

it('fetch api/users schema', async () => {
    const schema = {
        'type': 'array',
        'items': {
            'type': 'object',
            'required': [
                'id', 'name', 'email', 'email_verified_at', 'created_at', 'updated_at'
            ],
            'properties': {
                'id': {'type': 'integer',},
                'name': {'type': 'string',},
                'email': {'type': 'string',},
                'email_verified_at': {'type': 'string',},
                'created_at': {'type': 'string',},
                'updated_at': {'type': 'string',}
            }
        }
    };
    expect((await fetchUsers()).data).toMatchSchema(schema);
});

test('fetch api/users snapshot', async () => {
    expect((await fetchUsers()).data).toMatchSnapshot();
});

function fetchUsersByID(id) {
    return axios.get(`${baseURI}/api/users/${id}`);
}

function fetchUsers() {
    return axios.get(`${baseURI}/api/users`);
}
