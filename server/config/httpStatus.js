module.exports = {
  OK: 200, // Standard response code.
  BAD_REQUEST: 400, // Client-side input fails validation.
  UNAUTHORIZED: 401, // User isn’t not authorized to access a resource. It usually returns when the user isn’t authenticated.
  FORBIDDEN: 403, // User is authenticated, but it’s not allowed to access a resource.
  NOT_FOUND: 404, // Resource is not found.
  INTERNAL_SERVER_ERROR: 500, // Generic server error.
  BAD_GATEWAY: 502, // Invalid response from an upstream server.
  SERVICE_UNAVAILABLE: 503, // Indicates that something unexpected happened on server side.
};
