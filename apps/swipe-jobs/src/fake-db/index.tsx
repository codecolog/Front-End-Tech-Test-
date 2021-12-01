import './db/jobs-db';
import './db/worker-db';
import mock from './mock';

// Set this to true to enable mock APIs
const enableMock = false;

if (enableMock) {
  mock.onAny().passThrough();
} else {
  mock.restore();
}
