const getPost = async (page, perpage) => {
  try {
    const response = await fetch(`https://gorest.co.in/public/v2/posts?page=${page}&per_page=${perpage}`);
    const result = await response.json();
    return result;
  } catch (error) {
    return error;
  }
};

const getPostById = async (id) => {
  try {
    const response = await fetch(
      `https://gorest.co.in/public/v2/posts/${id}`
    );
    const result = await response.json();
    return result;
  } catch (error) {
    return error;
  }
};

const getUserById = async (id) => {
  try {
    const response = await fetch(`https://gorest.co.in/public/v2/users/${id}`);
    const result = await response.json();
    return result;
  } catch (error) {
    return error;
  }
};

export { getPost, getPostById, getUserById };
