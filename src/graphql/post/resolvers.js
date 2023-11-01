const post = () => {
  return {
    id: '1',
    title: 'Post Title 1',
  };
};

const posts = () => {
  return [
    {
      id: '1',
      title: 'Post title 1',
    },
    {
      id: '2',
      title: 'Post title 2',
    },
    {
      id: '3',
      title: 'Post title 3',
    }
  ];
  // return null;
  // {
  //   id: '1',
  //   title: 'Posts Title 1',
  // };
};

export const postResolvers = () => {
  Query: {
    post,
      posts
  }
};
