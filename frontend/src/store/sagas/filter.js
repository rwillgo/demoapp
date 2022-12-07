export const filterError = (errorToProcess: any) => {
  if (errorToProcess.response?.data) {
    return { message: errorToProcess.response?.data.error };
  } else {
    return errorToProcess;
  }
};
