const token = process.env.NEXT_PUBLIC_TOKEN;

const getPost = async (page, perpage) => {
  try {
    const response = await fetch(
      `https://gorest.co.in/public/v2/posts?page=${page}&per_page=${perpage}`
    );
    const result = await response.json();
    return result;
  } catch (error) {
    return error;
  }
};

const getPostById = async (id) => {
  try {
    const response = await fetch(`https://gorest.co.in/public/v2/posts/${id}`);
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

const getUsers = async (page, perPage) => {
  try {
    const response = await fetch(
      `https://gorest.co.in/public/v2/users?page=${page}&per_page=${perPage}`
    );
    const result = await response.json();
    return result;
  } catch (error) {
    return error;
  }
};

const deleteUserById = async (idUser) => {
  try {
    const response = await fetch(
      `https://gorest.co.in/public/v2/users/${idUser}`,
      {
        method: "DELETE",
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      }
    );
    return response;
  } catch (error) {
    return error;
  }
};

const getCommentsByPostId = async (id) => {
  try {
    const response = await fetch(
      `https://gorest.co.in/public/v2/posts/${id}/comments`
    );
    const result = await response.json();
    return result;
  } catch (error) {
    return error;
  }
};

export { getPost, getPostById, getUserById, getCommentsByPostId, getUsers, deleteUserById };
