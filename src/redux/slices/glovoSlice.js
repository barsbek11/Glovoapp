import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  activeCategory: 0,
	activeSort: { name: "popularity ⬆", sortProperty: "rating" },
  loading:true,
  opened:false,
}

export const glovoSlice = createSlice({
  name: 'glovo',
  initialState,

  reducers: {
    setCategoryId: (state, action) => {
      state.activeCategory = action.payload
    },
		setActiveSortId: (state, action) => {
			state.activeSort = action.payload
		},
    setLoading: (state, action) => {
      state.loading = action.payload
    },
    setOpened: (state, action) => {
      state.opened = action.payload
    }
  },
})

export const { setCategoryId, setActiveSortId, setLoading, setOpened } = glovoSlice.actions

export default glovoSlice.reducer