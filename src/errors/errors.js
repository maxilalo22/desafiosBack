

export function newError(tipo, message) {
    const error = new Error(message)
    error.name = tipo
    return error
}

//------------------------------

export function newNotFoundError(message) {
    const error = new Error(message)
    error.name = ErrorType.NOT_FOUND
    return error
}

export function newInvalidDataError(message) {
    const error = new Error(message)
    error.name = ErrorType.INVALID_DATA
    return error
}

//------------------------------
export const ErrorType = {
    NOT_FOUND: 'NOT_FOUND',
    INVALID_DATA: 'INVALID_DATA',
}