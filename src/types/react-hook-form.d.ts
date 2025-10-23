declare module "react-hook-form" {
    import * as React from "react";

    export type FieldValues = Record<string, any>;
    export type FieldPath<TFieldValues extends FieldValues> = string;
    export type FieldPathValue<
        TFieldValues extends FieldValues,
        TFieldPath extends FieldPath<TFieldValues>
    > = any;

    export interface FieldError {
        type: string;
        message?: string;
    }

    export interface ControllerRenderProps<
        TFieldValues extends FieldValues = FieldValues,
        TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
    > {
        onChange: (...event: any[]) => void;
        onBlur: () => void;
        value: FieldPathValue<TFieldValues, TName>;
        name: TName;
        ref: React.Ref<any>;
    }

    export interface ControllerFieldState {
        invalid: boolean;
        isTouched: boolean;
        isDirty: boolean;
        error?: FieldError;
    }

    export interface ControllerProps<
        TFieldValues extends FieldValues = FieldValues,
        TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
    > {
        name: TName;
        control?: any;
        defaultValue?: FieldPathValue<TFieldValues, TName>;
        rules?: any;
        shouldUnregister?: boolean;
        render: (props: {
            field: ControllerRenderProps<TFieldValues, TName>;
            fieldState: ControllerFieldState;
            formState: any;
        }) => React.ReactElement;
    }

    export function Controller<
        TFieldValues extends FieldValues = FieldValues,
        TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
    >(props: ControllerProps<TFieldValues, TName>): React.ReactElement;

    export interface UseFormContextReturn<
        TFieldValues extends FieldValues = FieldValues
    > {
        getFieldState: (name: FieldPath<TFieldValues>, formState?: any) => ControllerFieldState;
        [key: string]: any;
    }

    export function useFormContext<
        TFieldValues extends FieldValues = FieldValues
    >(): UseFormContextReturn<TFieldValues>;

    export function useFormState<TFieldValues extends FieldValues = FieldValues>(props?: {
        name?: FieldPath<TFieldValues>;
        control?: any;
        disabled?: boolean;
        exact?: boolean;
    }): any;

    export interface FormProviderProps<TFieldValues extends FieldValues = FieldValues> {
        children: React.ReactNode;
        [key: string]: any;
    }

    export const FormProvider: <TFieldValues extends FieldValues = FieldValues>(
        props: FormProviderProps<TFieldValues>
    ) => React.ReactElement;
}

