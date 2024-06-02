/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { formatNameToTitle } from "@/utils/helper";
import { TFormData } from "@/utils/types";
import type { FieldApi } from "@tanstack/react-form";
import { useForm } from "@tanstack/react-form";
import { zodValidator } from "@tanstack/zod-form-adapter";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { z } from "zod";

const User = () => {
  const form = useForm<TFormData>({
    onSubmit: async ({ value }) => {
      // Do something with form data
      console.log(value);
    },
    defaultValues: {
      first_name: "",
      middle_name: "",
      last_name: "",
      business_name: "",
      business_category: "",
      business_website: "",
      business_description: "",
      phone_number: "",
      date_of_birth: "",
      gender: "",
      city: "",
      state: "",
      country: "",
      post_zip_code: "",
      image_url: "",
      address: "",
    },
  });

  const FieldInfo = ({ field }: { field: FieldApi<any, any, any, any> }) => {
    console.log(field, "field");
    return (
      <>
        {field.state.meta.touchedErrors ? (
          <small className="text-red-400 font-mono text-xs italic">
            {field.state.meta.touchedErrors}
          </small>
        ) : null}
        {field.state.meta.isValidating ? "Validating..." : null}
      </>
    );
  };

  return (
    <Card className="mx-auto w-2/3 my-16">
      <CardHeader>
        <CardTitle>Create Account</CardTitle>
        <CardDescription>Please provide your information below</CardDescription>
      </CardHeader>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
          form.handleSubmit();
        }}
      >
        <CardContent className="grid grid-cols-2 gap-x-6 gap-y-6">
          <form.Field
            name="first_name"
            validators={{
              onChange: z
                .string({
                  required_error: "First Name is required",
                  invalid_type_error: "First Name must be a string",
                })
                .trim()
                .regex(/^[A-Za-z]+$/, "First Name must contain only alphabets"),
              onChangeAsync: z.string().refine(async (value) => {
                await new Promise((resolve) => setTimeout(resolve, 1000));
                return !value.includes("error");
              }),
            }}
            mode="value"
            validatorAdapter={zodValidator}
            children={(field) => (
              <div className="flex flex-col space-y-2">
                <Label htmlFor={field.name}>
                  {formatNameToTitle(field.name)}
                </Label>
                <Input
                  id={field.name}
                  name={field.name}
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                  type="text"
                  placeholder={formatNameToTitle(field.name)}
                />
                <FieldInfo field={field} />
              </div>
            )}
          />

          <form.Field
            name="last_name"
            validators={{
              onChange: z
                .string({
                  required_error: "Last Name is required",
                  invalid_type_error: "Last Name must be a string",
                })
                .trim()
                .regex(/^[A-Za-z]+$/, "Last Name must contain only alphabets"),
              onChangeAsync: z.string().refine(async (value) => {
                await new Promise((resolve) => setTimeout(resolve, 1000));
                return !value.includes("error");
              }),
            }}
            mode="value"
            validatorAdapter={zodValidator}
            children={(field) => (
              <div className="flex flex-col space-y-2">
                <Label htmlFor={field.name}>
                  {formatNameToTitle(field.name)}
                </Label>
                <Input
                  id={field.name}
                  name={field.name}
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                  type="text"
                  placeholder={formatNameToTitle(field.name)}
                />
                <FieldInfo field={field} />
              </div>
            )}
          />

          <form.Field
            name="middle_name"
            validators={{
              onChange: z
                .string({
                  required_error: "Middle Name is required",
                  invalid_type_error: "Middle Name must be a string",
                })
                .trim()
                .regex(
                  /^[A-Za-z]+$/,
                  "Middle Name must contain only alphabets"
                ),
              onChangeAsync: z.string().refine(async (value) => {
                await new Promise((resolve) => setTimeout(resolve, 1000));
                return !value.includes("error");
              }),
            }}
            mode="value"
            validatorAdapter={zodValidator}
            children={(field) => (
              <div className="flex flex-col space-y-2">
                <Label htmlFor={field.name}>
                  {formatNameToTitle(field.name)}
                </Label>
                <Input
                  id={field.name}
                  name={field.name}
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                  type="text"
                  placeholder={formatNameToTitle(field.name)}
                />
                <FieldInfo field={field} />
              </div>
            )}
          />

          <form.Field
            name="phone_number"
            validators={{
              onChange: z
                .string({
                  required_error: "Phone number is required",
                  invalid_type_error: "Phone number must be a string",
                })
                .trim()
                .regex(
                  /^((\\+[1-11]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
                  "Phone number must be a valid number"
                ),
              onChangeAsync: z.string().refine(async (value) => {
                await new Promise((resolve) => setTimeout(resolve, 1000));
                return !value.includes("error");
              }),
            }}
            mode="value"
            validatorAdapter={zodValidator}
            children={(field) => (
              <div className="flex flex-col space-y-2">
                <Label htmlFor={field.name}>
                  {formatNameToTitle(field.name)}
                </Label>
                <PhoneInput
                  country={"ng"}
                  value={field.state.value}
                  onChange={(phone) => field.handleChange(phone)}
                  onBlur={field.handleBlur}
                />
                <FieldInfo field={field} />
              </div>
            )}
          />

          <form.Field
            name="gender"
            mode="value"
            validators={{
              onChange: z
                .string({
                  required_error: "Gender is required",
                  invalid_type_error: "Gender must be a string",
                  message: "Gender must be selected",
                })
                .regex(/^[A-Za-z]+$/, "Gender must be selected"),
              onChangeAsync: z.string().refine(
                async (value) => {
                  await new Promise((resolve) => setTimeout(resolve, 1000));
                  return !value.includes("error");
                },
                { message: "Gender must be selected" }
              ),
            }}
            validatorAdapter={zodValidator}
            children={(field) => (
              <div className="flex flex-col space-y-2">
                <Label htmlFor={field.name}>
                  {formatNameToTitle(field.name)}
                </Label>
                <Select
                  value={field.state.value}
                  onValueChange={(value: string) => field.handleChange(value)}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder={formatNameToTitle(field.name)} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Gender</SelectLabel>
                      <SelectItem value="male">Male</SelectItem>
                      <SelectItem value="female">Female</SelectItem>
                      <SelectItem value="others">Others</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <FieldInfo field={field} />
              </div>
            )}
          />

          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Country" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="NG">Nigeria</SelectItem>
                <SelectItem value="USA">USA</SelectItem>
                <SelectItem value="CAD">Canada</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="State" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="banana">Banana</SelectItem>
                <SelectItem value="blueberry">Blueberry</SelectItem>
                <SelectItem value="grapes">Grapes</SelectItem>
                <SelectItem value="pineapple">Pineapple</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>

          <Input type="text" placeholder="Address" />

          <Input type="text" placeholder="City" />

          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Business Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="apple">Registered</SelectItem>
                <SelectItem value="banana">Unregistered</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>

          <Input type="text" placeholder="Business Name" />
          <Input type="url" placeholder="Business Website" />
          <Textarea placeholder="Business Use Case" />
        </CardContent>
        <CardFooter className="flex">
          <form.Subscribe
            selector={(state) => [state.canSubmit, state.isSubmitting]}
            children={([canSubmit, isSubmitting]) => (
              <Button type="submit" disabled={!canSubmit}>
                {isSubmitting ? "..." : "Submit"}
              </Button>
            )}
          />
        </CardFooter>
      </form>
    </Card>
  );
};

export default User;
