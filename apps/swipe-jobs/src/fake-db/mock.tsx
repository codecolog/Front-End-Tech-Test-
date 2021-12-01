import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

export const axiosAPI = axios.create();
const mock = new MockAdapter(axiosAPI, { delayResponse: 300 });
export default mock;
