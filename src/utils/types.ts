/* eslint-disable @typescript-eslint/no-explicit-any */
import { z } from "zod";

export type TFormData = {
  first_name: string;
  middle_name: string;
  last_name: string;
  business_name: string;
  business_category: string;
  business_website: string;
  business_description: string;
  phone_number: string;
  date_of_birth: Date | any;
  gender: string;
  city: string;
  state: string;
  country: string;
  post_zip_code: string;
  image_url: string;
  address: string;
};

export const TFormDataSchema = z.object({
  first_name: z.string(),
  middle_name: z.string(),
  last_name: z.string(),
  business_name: z.string(),
  business_category: z.string(),
  business_website: z.string(),
  business_description: z.string(),
  phone_number: z.string(),
  date_of_birth: z.string(),
  gender: z.string(),
  city: z.string(),
  state: z.string(),
  country: z.string(),
  post_zip_code: z.string(),
  image_url: z.string(),
  address: z.string(),
});

export type TFormDataSchemaType = z.infer<typeof TFormDataSchema>;
