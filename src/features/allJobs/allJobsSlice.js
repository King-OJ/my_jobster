import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { getAllJobsThunk, showStatsThunk } from "./allJobsThunk";

const initialFiltersState = {
  search: '',
  searchStatus: 'all',
  searchType: 'all',
  sort: 'latest',
  sortOptions: ['latest', 'oldest', 'a-z', 'z-a']
}

const initialState = {
  isLoading: false,
  jobs: [],
  stats: {},
  monthlyApplications: [],
  page: 1,
  numOfPages: 1,
  totalJobs: 0,
  ...initialFiltersState
}

export const getAllJobs = createAsyncThunk('allJobs/getJobs',
  getAllJobsThunk,
)

export const showStats = createAsyncThunk('allJobs/showStats', 
  showStatsThunk
)

const allJobsSlice = createSlice({
  name: 'allJobs',
  initialState,

  reducers: {
    showLoading: (state)=> {state.isLoading = true},
    hideLoading: (state)=> {state.isLoading = false},

    handleChange: (state, {payload})=> {
      const { name, value } = payload;
      state.page = 1;
      state[name] = value;
    },

    clearFilters: (state)=>{ return {...state, ...initialFiltersState }},

    changePage: (state, {payload})=>{
      state.page = payload;
    },

    clearAllJobsState: ()=>initialState
  },

  extraReducers: {
    [getAllJobs.pending]: (state) => {
      state.isLoading = true;
    },
    [getAllJobs.fulfilled]: (state, {payload})=> {
      state.isLoading = false;
      state.totalJobs = payload.totalJobs;
      state.numOfPages = payload.numOfPages;
      state.jobs = payload.jobs;
    },
    [getAllJobs.rejected]: (state, {payload}) => {
      state.isLoading = false;
      toast.error(payload);

    },

    [showStats.pending]: (state) => {
      state.isLoading = true
    },
    [showStats.fulfilled]: (state, {payload}) => {
      state.isLoading = false
      state.stats = payload.defaultStats
      state.monthlyApplications = payload.monthlyApplications
    },
    [showStats.rejected]: (state, {payload}) => {
      state.isLoading = false;
      toast.error(payload);

    },
  }
});

export const { showLoading, hideLoading, handleChange, clearFilters, changePage, clearAllJobsState } = allJobsSlice.actions

export default allJobsSlice.reducer