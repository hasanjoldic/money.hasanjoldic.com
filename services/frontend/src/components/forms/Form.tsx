import { useForm, SubmitHandler } from "react-hook-form";
import { DefaultService } from "../../openapi";

type Inputs = {
  total: string;
  file: File;
};

export const Form: React.FC = () => {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    DefaultService.postReceipts({
      scanFile: data.file,
      total: Number.parseFloat(data.total),
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="number" {...register("total", { required: true })} />
      <input type="file" {...register("file", { required: true })} />

      <input type="submit" />
    </form>
  );
};
