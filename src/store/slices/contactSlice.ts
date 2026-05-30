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

export const submitContact = createAsyncThunk(
  'contact/submit',
  async (fields: FormFields) => {
    const formId = import.meta.env.VITE_FORMSPREE_ID
    const res = await fetch(`https://formspree.io/f/${formId}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(fields),
    })
    if (!res.ok) {
      const data = await res.json().catch(() => ({}))
      throw new Error(data?.error ?? 'Submission failed')
    }
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
