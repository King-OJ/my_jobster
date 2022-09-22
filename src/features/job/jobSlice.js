import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { getUserFromLocalStorage } from '../../utils/localStorage';
import { createJobThunk, deleteJobThunk, editJobThunk } from './jobThunk';


const initialState = {
  isEditing: false,
  editJobId: '',
  isLoading: false,
  position: '',
  company: '',
  jobLocation: '',
  jobType: 'full-time',
  jobTypeOptions: ['full-time', 'part-time', 'remote', 'internship'],
  status: 'pending',
  statusOptions: ['interview', 'declined', 'pending']
}

export const createJob = createAsyncThunk(
  'job/createJob',
    createJobThunk
  )

  export const deleteJob = createAsyncThunk(
    'job/deleteJob', 
    deleteJobThunk
  )

  export const editJob = createAsyncThunk(
    'job/editJob',
    editJobThunk
  )

const jobSlice = createSlice({
  name: 'job',
  initialState,

  reducers: {
    handleChange: (state, { payload }) =>{
      const { name, value } = payload;
      state[name] = value;
    },
    clearInputs: () => {
      return {...initialState, jobLocation: getUserFromLocalStorage()?.location || '' }
    },

    setEditJob: (state, {payload}) => {
      return {...state, isEditing: true, ...payload}
    }
  },

  extraReducers: {
    [createJob.pending]: (state)=> {
      state.isLoading = true;
    },

    [createJob.fulfilled]: (state, action) => {
      state.isLoading = false;
      toast.success("Job successfully added!")
      return initialState;
    },

    [createJob.rejected]: (state, {payload}) => {
      state.isLoading = false
      toast.error(payload);

    },

    [deleteJob.fulfilled]: (state, {payload}) => {
      
      toast.success(payload)
    },

    [deleteJob.rejected]: (state, {payload}) => {
      toast.error(payload);

    },

    [editJob.pending]: (state)=> {
      state.isLoading = true;
    },

    [editJob.fulfilled]: (state, action) => {
      state.isLoading = false;
      toast.success("Job successfully edited...")
      return initialState;
    },

    [editJob.rejected]: (state, {payload}) => {
      state.isLoading = false
      toast.error(payload);

    },

  }

})

export const { handleChange, clearInputs, setEditJob }= jobSlice.actions

export default jobSlice.reducer
