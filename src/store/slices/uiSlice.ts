import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface UIState {
  activeSection: string
  isMobileMenuOpen: boolean
  isDark: boolean
}

const storedTheme = typeof localStorage !== 'undefined' ? localStorage.getItem('theme') : null
const initialIsDark = storedTheme !== null ? storedTheme === 'dark' : true

const initialState: UIState = {
  activeSection: 'hero',
  isMobileMenuOpen: false,
  isDark: initialIsDark,
}

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setActiveSection(state, action: PayloadAction<string>) {
      state.activeSection = action.payload
    },
    toggleMobileMenu(state) {
      state.isMobileMenuOpen = !state.isMobileMenuOpen
    },
    closeMobileMenu(state) {
      state.isMobileMenuOpen = false
    },
    toggleTheme(state) {
      state.isDark = !state.isDark
      localStorage.setItem('theme', state.isDark ? 'dark' : 'light')
    },
  },
})

export const { setActiveSection, toggleMobileMenu, closeMobileMenu, toggleTheme } = uiSlice.actions
export default uiSlice.reducer
