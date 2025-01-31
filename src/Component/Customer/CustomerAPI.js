import axiosInstance from "../../axios/axios";

export const fetchItemAPI = async () => {
  try {
    const res = await axiosInstance({
      url: `${process.env.REACT_APP_BASE_URL}/customer/list`,
      method: "get",
    });
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const addItemAPI = async (item) => {
  try {
    const res = await axiosInstance({
      url: `${process.env.REACT_APP_BASE_URL}/customer/add`,
      method: "post",
      data: item,
    });
    return res.data;
  } catch (error) {
    // console.log("psdfheifewf", error?.response?.data);
    throw error;
  }
};

export const viewItemAPI = async (id) => {
  try {
    const res = await axiosInstance({
      url: `${process.env.REACT_APP_BASE_URL}/customer/${id}`,
      method: "get",
    });
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const updateItemAPI = async (item) => {
  try {
    const res = await axiosInstance({
      url: `${process.env.REACT_APP_BASE_URL}/customer/update/${item?.id}`,
      method: "post",
      data: { name: item?.name, age: item?.age, address: item?.address },
    });
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const deleteItemAPI = async (id) => {
  try {
    const res = await axiosInstance({
      url: `${process.env.REACT_APP_BASE_URL}/customer/${id}`,
      method: "delete",
    });
    return res.data;
  } catch (error) {
    throw error;
  }
};
