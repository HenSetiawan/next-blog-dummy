const getPost = async (perpage, page) => {
  try {
    const response = await fetch(`https://gorest.co.in/public/v2/posts`);
    const result = await response.json();
    return result;
  } catch (error) {
    return error;
  }
};

export { getPost };
