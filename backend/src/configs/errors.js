export const NO_ARGUMENTS = { message: 'Required arguments not supplied', code: 500, status: 'NO_ARGUMENT_ERROR' };
export const NOT_FOUND = { message: 'Empty response, not found', status: 404, code: 'NOT_FOUND_ERROR' };
export const ACCESS = { message: 'Access denied', status: 403, code: 'ACCESS_ERROR' };
export const DB = { message: 'Database error', status: 500, code: 'DB_ERROR' };