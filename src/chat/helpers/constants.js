const uuidV4 = require('uuid/v4');

const MOCKED_STORE = {
  jobs: [
    {
      id: uuidV4(),
      title: 'Full Stack Engineer',
      description: 'Can tell jokes',
      timestamp: new Date(), // change to unix timestamp later
    },
    {
      id: uuidV4(),
      title: 'Job 1',
      description: 'asdf',
      timestamp: new Date(), // change to unix timestamp later
    },
    {
      id: uuidV4(),
      title: 'Job 2',
      description: 'awefa',
      timestamp: new Date(), // change to unix timestamp later
    },
    {
      id: uuidV4(),
      title: 'Job 3',
      description: 'awefsdf',
      timestamp: new Date(), // change to unix timestamp later
    },
  ],
};

export default MOCKED_STORE;
