const data = {
  users: {
    'seadams1400@gmail.com': {
      name: 'Sarah',
      lists: ['sarah', 'austin', 'lydia'],
      bookmarks: ['patrick', 'missy'],
    },
    'arthurbarnhouse@gmail.com': {
      name: 'Patrick',
      lists: ['patrick', 'austin', 'lydia'],
      bookmarks: ['sarah'],
    },
    'madams@gmail.com': {
      name: 'Missy',
      lists: ['missy'],
      bookmarks: ['austin', 'lydia'],
    },
  },
  lists: {
    'austin': {
      name: 'Austin',
      groups: [{
        name: 'Books',
        items: [{
          img: '',
          name: 'The BFG - Roald Dahl',
          url: 'https://app.thestorygraph.com/books/12cda909-ad4a-4f38-b86a-81ee1c232533'
        }]
      }],
    },
    'lydia': {
      name: 'Lydia',
      groups: [],
    },
    'sarah': {
      name: 'Sarah',
      groups: [],
    },
    'patrick': {
      name: 'Patrick',
      groups: [],
    },
    'missy':{
      name: 'Missy',
      groups: [],
    }
  },
};

export default data;
