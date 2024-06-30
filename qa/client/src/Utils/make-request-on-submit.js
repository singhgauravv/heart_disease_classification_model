import axios from "axios";

const handleFormSubmit = async (attributes, method, path) => {
  const response = await axios[method](
    `http://localhost:3050/api/${path}`,
    { attributes: attributes },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  return response.data;
};

export default handleFormSubmit;
