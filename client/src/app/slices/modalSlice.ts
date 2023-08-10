import { createSlice } from '@reduxjs/toolkit';

export const MODAL_TYPE = {
  LOGIN: 'login',
  REGISTER: 'register',
  FROGOT_PASSWORD: 'forgotPassword',
  RESET_PASSWORD: 'resetPassword',
  SEND_CONFIRMATION_EMAIL: 'sendConfirmationEmail',
  VERIFY_EMAIL: 'verifyEmail',
};

type initialStateType = {
  content: string;
  isOpen: boolean;
};

type payloadType = {
  content: string;
};

type actionType = {
  payload: payloadType;
  type: string;
};

const initialState: initialStateType = {
  content: '',
  isOpen: false,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    closeModal: (state) => {
      state.isOpen = false;
      state.content = '';
    },
    showModal: (state, action: actionType) => {
      state.content = action.payload.content;
      state.isOpen = true;
    },
  },
});

export const { closeModal, showModal } = modalSlice.actions;

export default modalSlice.reducer;