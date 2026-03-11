export const MAX_FILE_SIZE = 1024 * 1000 * 5; // 5mb

export const FILE_ERROR_MESSAGE = "File size is larger than 5MB (megabytes) ";

export const INVALID_TYPE_MESSAGE =
    "Invalid file type. Accepted types are: .csv, .xls, .xlsx.";

export const VALID_TYPES = [
    "text/csv",
    "application/vnd.ms-excel",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
];
