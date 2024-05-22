import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  total: 0,
  vouchers: [],
  status:{
    code: 200,
    message: ''
  }
};
const cartSlice = createSlice({
  name: 'cartSlice',
  initialState: initialState,
  reducers: {
    changeUserInfo: (state, actions) => {
      return actions.payload;
    },
    resetState: (state, actions) => initialState,
  },
  // extraReducers: (builder) =>
  //   builder
  //     .addCase(authenticate.fulfilled, (state, action) => {
  //       return {
  //         info: action.payload,
  //         role: CommonConstants.USER_ROLE.USER,
  //       };
  //     })
  //     .addCase(authenticate.rejected, (state, action) => {
  //       return {
  //         info: {},
  //         role: CommonConstants.USER_ROLE.GUEST,
  //       };
  //     }),
});

export default cartSlice;

