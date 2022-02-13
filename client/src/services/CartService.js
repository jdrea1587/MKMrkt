import Client from '.';

export const GetCartById = async (id) => {
  try {
    const res = await Client.get(`/orders/${id}`);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const CreateNewCart = async () => {
  try {
    const res = await Client.post('/orders/');
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const AddOrderItem = async (newItem) => {
  try {
    //newItem {orderId: ##, productID: ##}
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
    console.log('delete res', res);
  } catch (error) {
    throw error;
  }
};
