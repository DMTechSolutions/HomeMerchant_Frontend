import feathers from '@feathersjs/feathers';
import rest from '@feathersjs/rest-client';
import auth from '@feathersjs/authentication-client';

const app = feathers();

// Connect to a different URL
const restClient = rest(process.env.BASE_URL || 'http://bdev.race4x.com');

// Configure an AJAX library (see below) with that client
app.configure(restClient.fetch(fetch));

// Available options are listed in the "Options" section
app.configure(auth({ storage: window.localStorage }));

const fetchApi = app;

// Connect to the `http://feathers-api.com/messages` service
// const messages = app.service('messages');

export { app };
export default fetchApi;
