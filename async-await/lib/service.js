import axios from "axios";

const getData = async (id) => {
  const user = await axios.get(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  const post = await axios.get(
    `https://jsonplaceholder.typicode.com/posts?userId=${id}`
  );

  console.log(user.data);
  console.log(post.data);
};

export default getData;
