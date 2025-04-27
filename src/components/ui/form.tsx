import * as React from 'react';
import { useFormContext, FormProvider, Controller } from 'react-hook-form';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';

import type {
  UseFormReturn,
  FieldValues,
  ControllerRenderProps,
  ControllerFieldState,
  UseFormStateReturn,
} from 'react-hook-form';

interface FormProps<T extends FieldValues = FieldValues>
  extends React.FormHTMLAttributes<HTMLFormElement> {
  form: UseFormReturn<T>;
}

export function Form<T extends FieldValues = FieldValues>({
  form,
  children,
  ...props
}: FormProps<T>) {
  return (
    <FormProvider {...form}>
      <form {...props}>{children}</form>
    </FormProvider>
  );
}

import type { Path } from 'react-hook-form';

export function FormField<TFieldValues extends FieldValues = FieldValues>({
  name,
  render,
}: {
  name: Path<TFieldValues>;
  render: (props: {
    field: ControllerRenderProps<TFieldValues, Path<TFieldValues>>;
    fieldState: ControllerFieldState;
    formState: UseFormStateReturn<TFieldValues>;
  }) => React.ReactElement;
}) {
  const { control } = useFormContext<TFieldValues>();
  return <Controller name={name} control={control} render={render} />;
}

export function FormItem({ children, className }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('space-y-2', className)}>{children}</div>;
}

export function FormLabel({
  children,
  htmlFor,
  className,
}: React.LabelHTMLAttributes<HTMLLabelElement>) {
  return (
    <Label htmlFor={htmlFor} className={cn('font-medium', className)}>
      {children}
    </Label>
  );
}

export function FormControl({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}

export function FormMessage({ children }: { children?: React.ReactNode }) {
  return children ? <p className="text-sm text-destructive">{children}</p> : null;
}
