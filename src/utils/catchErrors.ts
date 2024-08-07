type ErrorRes = {
  message: string
  success: boolean
}

type Data = {
  data: ErrorRes
}

type TResponse = {
  response: Data
  message: string
  name: string
}

function isResponse(arg: any): arg is TResponse {
  return arg && typeof arg === 'object' && 'response' in arg
}

const catchErrors = (e: unknown) => {
  if (isResponse(e)) {
    return { success: e.response.data.success, message: e.response.data.message }
  }

  return { success: false, message: 'error, something happened...' }
}

export default catchErrors
