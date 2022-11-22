import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  activeCategory: 0,
	activeSort: '',
  loading:true,
  landingAddressOpened:false,
  items: [],
  searchResultOpened: false,
  home: true

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
    setLandingAddressOpened: (state, action) => {
      state.landingAddressOpened = action.payload
    },
    setItems: (state, action) => {
      state.items = action.payload
    },
    setSearchResultOpened: (state, action) => {
      state.searchResultOpened = action.payload
    },
    setHome: (state, action) => {
      state.home = action.payload
    }
  },
})

export const { setCategoryId, setActiveSortId, setLoading, setLandingAddressOpened, setItems, setSearchResultOpened, setHome } = glovoSlice.actions

export default glovoSlice.reducer