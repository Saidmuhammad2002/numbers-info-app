// src/types/formTypes.ts

export type InfoType = "trivia" | "math" | "date";

export interface FormData {
  type: InfoType;
  number: string;
}
