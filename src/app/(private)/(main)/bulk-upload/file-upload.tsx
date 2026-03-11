"use client";

import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { CloudUpload } from "lucide-react";
import { cn } from "@/lib/utils";
import { Typography } from "@/components/ui/typography";
import { FILE_ERROR_MESSAGE, INVALID_TYPE_MESSAGE, MAX_FILE_SIZE } from "@/lib/constant";

function fileValidator(file: any) {
    if (file.size > MAX_FILE_SIZE) {
        return {
            code: "file-too-large",
            message: FILE_ERROR_MESSAGE,
        };
    }
    return null;
}

export default function CsvExcelUpload() {
    const [errors, setErrors] = useState<any[] | null>([]);
    const [fileName, setFileName] = useState<string | null>(null);
    const [msgError] = errors as any;

    const onDrop = useCallback((acceptedFiles: File[], rejectedFiles: any[]) => {
        if (rejectedFiles.length) {
            const mapped = rejectedFiles.map((rejected) => ({
                ...rejected,
                errors: rejected.errors.map((err: any) =>
                    err.code === "file-invalid-type"
                        ? { ...err, message: INVALID_TYPE_MESSAGE }
                        : err
                ),
            }));
            setErrors(mapped);
            setFileName(null);
            return;
        }
        const file = acceptedFiles[0];
        setErrors(null);
        setFileName(file.name);
        console.log("Uploaded:", file);
    }, []);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        multiple: false,
        validator: fileValidator,
        accept: {
            "text/csv": [".csv"],
            "application/vnd.ms-excel": [".xls"],
            "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": [
                ".xlsx",
            ],
        },
    });

    return (
        <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <Typography weight="medium" size="h3" className="mb-4">
                Step 3: Upload Populated CSV
            </Typography>
            <div
                {...getRootProps()}
                className={cn(
                    "cursor-pointer rounded-xl border border-dashed p-10 text-center transition-all",
                    isDragActive
                        ? "border-blue-600 bg-blue-50"
                        : "border-gray-300 bg-gray-50 hover:bg-gray-100"
                    // error && "border-red-500 bg-red-50"
                )}
            >
                <input {...getInputProps()} />

                <div className="flex flex-col items-center justify-center">
                    <CloudUpload className="mb-4 h-10 w-10 text-gray-500" />

                    <p className="font-medium text-gray-800">
                        {isDragActive
                            ? "Drop your file here"
                            : "Click here to upload your CSV Slip"}
                    </p>

                    <p className="mt-1 text-sm text-gray-500">or drag and drop it here</p>

                    <button
                        type="button"
                        className="mt-6 rounded-md border bg-white px-6 py-2 shadow-sm hover:bg-gray-50"
                    >
                        Browse File
                    </button>

                    <p className="mt-4 text-xs text-gray-400">
                        CSV, XLS, XLSX • Max 10MB
                    </p>

                    {fileName && (
                        <p className="mt-3 text-sm font-medium text-green-600">
                            Uploaded: {fileName}
                        </p>
                    )}

                    {/* {error && (
                        <p className="mt-3 text-sm font-medium text-red-600">{error}</p>
                    )} */}
                </div>
            </div>
            <div className="mt-3 pl-5">
                <ul className="list-disc space-y-2">
                    {msgError?.errors &&
                        msgError?.errors?.map((item: any, index: number) => {
                            return (
                                <li key={item + index} className="text-base text-red-600">
                                    {item.message}
                                </li>
                            );
                        })}
                </ul>
            </div>
        </div>
    );
}
