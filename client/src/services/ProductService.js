import Client from '.';

export const GetProducts = async () => {
  try {
    const res = await Client.get('/products/');
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const GetProductBySlug = async (id) => {
  try {
    const res = await Client.get(`/products/${id}`);
    return res.data;
  } catch (error) {
    throw error;
  }
};
