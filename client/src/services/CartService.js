import Client from '.';

export const CreateNewCart = async () => {
  try {
    const res = await Client.post('orders/', {});
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const GetCartById = async (id) => {
  try {
    const res = await Client.get(`/orders/${id}`);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const AddOrderItem = async (newItem) => {
  try {
    const res = await Client.post('/orderitem/', newItem);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const UpdateOrderItem = async (id) => {
  try {
    const res = await Client.put(`/orderitem/${id}`);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const UpdateOrder = async (id) => {
  try {
    const res = await Client.put(`/orders/${id}`);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const DeleteOrderItem = async (id) => {
  try {
    const res = await Client.delete(`/orderitem/${id}`);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const EmptyCart = async (id) => {
  try {
    const res = await Client.delete(`/orders/${id}`);
  } catch (error) {
    throw error;
  }
};
