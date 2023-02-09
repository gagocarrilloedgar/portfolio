import * as React from 'react'

function asyncReducer(_state, action) {
  switch (action.type) {
    case 'pending': {
      return { status: 'pending', data: null, error: null }
    }
    case 'resolved': {
      return { status: 'resolved', data: action.data, error: null }
    }
    case 'rejected': {
      return { status: 'rejected', data: null, error: action.error }
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}

export function useAsync(initialState) {
  const [state, dispatch] = React.useReducer(asyncReducer, {
    status: 'idle',
    data: null,
    error: null,
    ...initialState
  })

  const { data, error, status } = state

  const run = React.useCallback((promise) => {
    dispatch({ type: 'pending' })
    promise.then(
      (responseData) => {
        dispatch({ type: 'resolved', responseData })
      },
      (responseError) => {
        dispatch({ type: 'rejected', responseError })
      }
    )
  }, [])

  return {
    error,
    status,
    data,
    run
  }
}

// Usage:

const someNiceAsyncCall = (status) => status

export function MyComponent({ someStatus }) {
  const { run, status, data, error } = useAsync({ status: someStatus ? 'pending' : 'idle' })

  React.useEffect(() => {
    if (!someStatus) return

    run(someNiceAsyncCall(someStatus))
  }, [someStatus, run])

  switch (status) {
    case 'idle':
      return <span>Something to be done</span>
    case 'pending':
      return <div>Here youd fallback component</div>
    case 'rejected':
      throw error
    case 'resolved':
      return <div>Here youd render the data {data}</div>
    default:
      throw new Error('This should be impossible')
  }
}
