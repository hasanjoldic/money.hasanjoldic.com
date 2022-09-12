import { useDropzone } from "react-dropzone";

interface Props {
  label: string;
}

export const FileUpload: React.FC<Props> = ({ label }) => {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();

  return (
    <div {...getRootProps({ className: "dropzone" })}>
      <input {...getInputProps()} />
      <p>{label}</p>
    </div>
  );
};
