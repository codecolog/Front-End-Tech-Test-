import mock from '../mock';

export interface IJobTitle {
  name: string;
  imageUrl: string;
}

export interface IJobCompany {
  name: string;
  address: { formattedAddress: string; zoneId: string };
  reportTo: { name: string; phone: string };
}

export interface IJobShifts {
  startDate: string;
  endDate: string;
}

export interface IJob {
  jobId: string;
  jobTitle: IJobTitle;
  company: IJobCompany;
  wagePerHourInCents: number;
  milesToTravel: number;
  shifts: Array<IJobShifts>;
  branch: string;
  branchPhoneNumber: string;
  requirements?: Array<string>;
}

const jobsDB = {
  jobs: [
    {
      jobId: '5775d8e18a488e6c5bb08333',
      jobTitle: {
        name: 'Construction General Helper',
        imageUrl:
          'https://imgs.swipejobs.com/js/job-category/construction-1.jpg',
      },
      company: {
        name: 'Steve Smith Construction',
        address: {
          formattedAddress: '430 Smith St, Chicago, IL 60654, USA',
          zoneId: 'America/Chicago',
        },
        reportTo: {
          name: 'Judy Smith',
          phone: '2130010012',
        },
      },
      wagePerHourInCents: 950,
      milesToTravel: 3.4,
      shifts: [
        {
          startDate: '2019-09-04T21:00:00Z',
          endDate: '2019-09-05T05:00:00Z',
        },
      ],
      branch: 'Downtown',
      branchPhoneNumber: '2531233322',
    },
    {
      jobId: '5775d8e18a488e6c5bb08c13',
      jobTitle: {
        name: 'Driver',
        imageUrl:
          'https://imgs.swipejobs.com/js/job-category/driver-service-3.jpg',
      },
      company: {
        name: 'C.D. Barnes and Associates',
        address: {
          formattedAddress: '123 Main Street, Chicago, IL 60654',
          zoneId: 'America/Chicago',
        },
        reportTo: {
          name: 'Steve Rogers',
        },
      },
      wagePerHourInCents: 1081.7,
      milesToTravel: 11.666,

      shifts: [
        {
          startDate: '2019-09-04T21:00:00Z',
          endDate: '2019-09-05T05:00:00Z',
        },
        {
          startDate: '2019-09-05T21:00:00Z',
          endDate: '2019-09-06T05:00:00Z',
        },
        {
          startDate: '2019-09-06T21:00:00Z',
          endDate: '2019-09-07T05:00:00Z',
        },
        {
          startDate: '2019-09-07T21:00:00Z',
          endDate: '2019-09-08T05:00:00Z',
        },
        {
          startDate: '2019-09-08T21:00:00Z',
          endDate: '2019-09-09T05:00:00Z',
        },
        {
          startDate: '2019-09-11T21:00:00Z',
          endDate: '2019-09-12T05:00:00Z',
        },
        {
          startDate: '2019-09-12T21:00:00Z',
          endDate: '2019-09-13T05:00:00Z',
        },
        {
          startDate: '2019-09-13T21:00:00Z',
          endDate: '2019-09-14T05:00:00Z',
        },
        {
          startDate: '2019-09-14T21:00:00Z',
          endDate: '2019-09-15T05:00:00Z',
        },
        {
          startDate: '2019-09-15T21:00:00Z',
          endDate: '2019-09-16T05:00:00Z',
        },
      ],
      branch: 'Chicago',
      branchPhoneNumber: '2531233311',
      requirements: ['Safety Vest', 'Hart Hat'],
    },
  ],
};

// const jobsRegex = /\/worker\/([a-z0-9-]*)\/matches/;
const jobsRegex =
  /https:\/\/test.swipejobs.com\/api\/worker\/([a-z0-9-]*)\/matches/;
mock.onGet(jobsRegex).reply((request) => {
  return [200, jobsDB.jobs];
});

const jobsResponseRegex =
  /https:\/\/test.swipejobs.com\/api\/worker\/([a-z0-9-]*)\/job\/([a-z0-9]*)\/(accept|reject)/;
mock.onGet(jobsResponseRegex).reply((request) => {
  const fail = {
    success: false,
    message: 'Sorry, this role was no longer available',
    errorCode: 'FAIL-101',
  };
  const success = {
    success: true,
  };

  return [200, Math.random() > 0.5 ? success : fail];
});
