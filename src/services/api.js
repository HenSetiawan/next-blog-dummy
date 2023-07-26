const getPost = async (page, perpage) => {
  try {
    const response = await fetch(`https://gorest.co.in/public/v2/posts?page=${page}&per_page=${perpage}`);
    const result = await response.json();
    return result;
  } catch (error) {
    return error;
  }
};

export { getPost };
