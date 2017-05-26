const uuidV4 = require('uuid/v4');

const MOCKED_STORE = {
  filterView: 'all',
  todos: [
    {
      id: uuidV4(),
      title: 'Task 1',
      isDone: true,
    },
    {
      id: uuidV4(),
      title: 'Task 2',
      isDone: true,
    },
    {
      id: uuidV4(),
      title: 'Task 3',
      isDone: false,
    },
    {
      id: uuidV4(),
      title: 'Task 4',
      isDone: false,
    },
    {
      id: uuidV4(),
      title: 'Task 5',
      isDone: false,
    },
  ],
};

export default MOCKED_STORE;
