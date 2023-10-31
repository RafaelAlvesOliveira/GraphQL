const users = () => {
  return [
    {
      id: '1',
      userName: 'Rafael 1',
    },
    {
      id: '2',
      userName: 'Rafael 2',
    },
    {
      id: '3',
      userName: 'Rafael 3',
    },
  ];
};

const user = () => {
  return {
    id: '1',
    userName: 'Rafael',
  };
};

export const userResolvers = {
  Query: {
    users,
    user,
  },
};
