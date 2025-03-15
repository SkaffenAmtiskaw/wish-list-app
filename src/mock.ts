const data = {
  users: {
    'foo@example.com': {
      name: 'Foo Example',
      lists: ['foo-1', 'foo-2'],
      bookmarks: ['bar-1', 'bar-2'],
    },
    'bar@example.com': {
      name: 'Bar Example',
      lists: ['foo-1'],
      bookmarks: ['foo-2'],
    },
    madams: {
      lists: ['bar-1'],
      bookmarks: ['foo-2', 'bar-2'],
    },
  },
  lists: {
    'foo-1': {
      name: 'Foo 1',
      items: [],
    },
    'foo-2': {
      name: 'Foo 2',
      items: [],
    },
    'bar-1': {
      name: 'Bar 1',
      items: [],
    },
    'bar-2': {
      name: 'Bar 2',
      items: [],
    },
  },
}

export default data
