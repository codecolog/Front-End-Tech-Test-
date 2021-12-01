import mock from '../mock';

export interface IWorkerAddress {
  formattedAddress: string;
  zoneId: string;
}
export interface IWorker {
  address: IWorkerAddress;
  email: string;
  firstName: string;
  lastName: string;
  maxJobDistance: number;
  phoneNumber: string;
  workerId: string;
}

const workerDB = {
  workers: [
    {
      address: {
        formattedAddress: '1 Downing St, Chicago, IL 60654, USA',
        zoneId: 'America/Chicago',
      },
      email: 'jim.rose@gmail.com',
      firstName: 'Jim',
      lastName: 'Rose',
      maxJobDistance: 20,
      phoneNumber: '5096290220',
      workerId: '7f90df6e-b832-44e2-b624-3143d428001f',
    },
  ],
};

const workerRegex =
  /https:\/\/test.swipejobs.com\/api\/worker\/([a-z0-9-]*)\/profile/;
mock.onGet(workerRegex).reply((request) => {
  const url = request.url as string;
  const workerId = workerRegex.exec(url)![1];
  const matchedWorker = workerDB.workers.filter(
    (worker) => worker.workerId === workerId
  )[0];
  return [200, matchedWorker];
});
