/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type SportUpdateFormInputValues = {
    name?: string;
    grad?: string;
    height?: string;
    weight?: string;
    email?: string;
    phone?: string;
    gpa?: string;
    rank?: string;
    sat?: string;
    act?: string;
    aps?: string;
    coachname?: string;
    coachphone?: string;
    coachemail?: string;
    parentname?: string;
    parentphone?: string;
    parentemail?: string;
    address?: string;
    sport?: string;
    team?: string;
    position?: string;
    jersey?: string;
    stat1?: string;
    stat2?: string;
    stat3?: string;
    stat4?: string;
    stat5?: string;
    stat6?: string;
    volunteer?: string;
    hobbies?: string;
    othersport?: string;
};
export declare type SportUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    grad?: ValidationFunction<string>;
    height?: ValidationFunction<string>;
    weight?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
    phone?: ValidationFunction<string>;
    gpa?: ValidationFunction<string>;
    rank?: ValidationFunction<string>;
    sat?: ValidationFunction<string>;
    act?: ValidationFunction<string>;
    aps?: ValidationFunction<string>;
    coachname?: ValidationFunction<string>;
    coachphone?: ValidationFunction<string>;
    coachemail?: ValidationFunction<string>;
    parentname?: ValidationFunction<string>;
    parentphone?: ValidationFunction<string>;
    parentemail?: ValidationFunction<string>;
    address?: ValidationFunction<string>;
    sport?: ValidationFunction<string>;
    team?: ValidationFunction<string>;
    position?: ValidationFunction<string>;
    jersey?: ValidationFunction<string>;
    stat1?: ValidationFunction<string>;
    stat2?: ValidationFunction<string>;
    stat3?: ValidationFunction<string>;
    stat4?: ValidationFunction<string>;
    stat5?: ValidationFunction<string>;
    stat6?: ValidationFunction<string>;
    volunteer?: ValidationFunction<string>;
    hobbies?: ValidationFunction<string>;
    othersport?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SportUpdateFormOverridesProps = {
    SportUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    grad?: PrimitiveOverrideProps<TextFieldProps>;
    height?: PrimitiveOverrideProps<TextFieldProps>;
    weight?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    phone?: PrimitiveOverrideProps<TextFieldProps>;
    gpa?: PrimitiveOverrideProps<TextFieldProps>;
    rank?: PrimitiveOverrideProps<TextFieldProps>;
    sat?: PrimitiveOverrideProps<TextFieldProps>;
    act?: PrimitiveOverrideProps<TextFieldProps>;
    aps?: PrimitiveOverrideProps<TextFieldProps>;
    coachname?: PrimitiveOverrideProps<TextFieldProps>;
    coachphone?: PrimitiveOverrideProps<TextFieldProps>;
    coachemail?: PrimitiveOverrideProps<TextFieldProps>;
    parentname?: PrimitiveOverrideProps<TextFieldProps>;
    parentphone?: PrimitiveOverrideProps<TextFieldProps>;
    parentemail?: PrimitiveOverrideProps<TextFieldProps>;
    address?: PrimitiveOverrideProps<TextFieldProps>;
    sport?: PrimitiveOverrideProps<TextFieldProps>;
    team?: PrimitiveOverrideProps<TextFieldProps>;
    position?: PrimitiveOverrideProps<TextFieldProps>;
    jersey?: PrimitiveOverrideProps<TextFieldProps>;
    stat1?: PrimitiveOverrideProps<TextFieldProps>;
    stat2?: PrimitiveOverrideProps<TextFieldProps>;
    stat3?: PrimitiveOverrideProps<TextFieldProps>;
    stat4?: PrimitiveOverrideProps<TextFieldProps>;
    stat5?: PrimitiveOverrideProps<TextFieldProps>;
    stat6?: PrimitiveOverrideProps<TextFieldProps>;
    volunteer?: PrimitiveOverrideProps<TextFieldProps>;
    hobbies?: PrimitiveOverrideProps<TextFieldProps>;
    othersport?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type SportUpdateFormProps = React.PropsWithChildren<{
    overrides?: SportUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    sport?: any;
    onSubmit?: (fields: SportUpdateFormInputValues) => SportUpdateFormInputValues;
    onSuccess?: (fields: SportUpdateFormInputValues) => void;
    onError?: (fields: SportUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: SportUpdateFormInputValues) => SportUpdateFormInputValues;
    onValidate?: SportUpdateFormValidationValues;
} & React.CSSProperties>;
export default function SportUpdateForm(props: SportUpdateFormProps): React.ReactElement;
