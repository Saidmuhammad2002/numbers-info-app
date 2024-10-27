// src/components/InputForm.tsx

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useNavigate } from "react-router-dom";
import { FormData } from "../types/formTypes";

// Define Zod schema for validation
const formSchema = z.object({
  type: z.enum(["trivia", "math", "date"], { invalid_type_error: "Выберите тип информации" }),
  number: z
    .string()
    .optional()
    .refine((val) => !val || !isNaN(Number(val)), { message: "Число должно быть в виде цифры" }),
});

const InputForm: React.FC = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: { type: "trivia", number: "" },
  });

  const onSubmit = (data: FormData) => {
    navigate(`/result/${data.type}/${data.number || "random"}`);
  };

  return (
    <div className="container">
      <h2>Информация о числах</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="type">Тип информации</label>
          <select id="type" {...register("type")}>
            <option value="trivia">Trivia</option>
            <option value="math">Math</option>
            <option value="date">Date</option>
          </select>
          {errors.type && <p className="error">{errors.type.message}</p>}
        </div>

        <div>
          <label htmlFor="number">Число (оставьте пустым для случайного)</label>
          <input id="number" type="text" {...register("number")} />
          {errors.number && <p className="error">{errors.number.message}</p>}
        </div>

        <button type="submit">Показать информацию</button>
      </form>
    </div>
  );
};

export default InputForm;
