import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

interface FormFields {
  name: string
  email: string
  message: string
}

interface ContactState {
  status: 'idle' | 'submitting' | 'success' | 'error'
  error: string | null
}

const initialState: ContactState = {
  status: 'idle',
  error: null,
}

// Swap the body of this thunk for a real service (EmailJS, Formspree, etc.)
export const submitContact = createAsyncThunk(
  'contact/submit',
  async (fields: FormFields) => {
    await new Promise<void>((resolve) => setTimeout(resolve, 1500))
    return fields
  }
)

const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    resetContact(state) {
      state.status = 'idle'
      state.error = null
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(submitContact.pending, (state) => {
        state.status = 'submitting'
        state.error = null
      })
      .addCase(submitContact.fulfilled, (state) => {
        state.status = 'success'
      })
      .addCase(submitContact.rejected, (state, action) => {
        state.status = 'error'
        state.error = action.error.message ?? 'Submission failed'
      })
  },
})

export const { resetContact } = contactSlice.actions
export default contactSlice.reducer
