/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { ButtonProps, DividerProps, FlexProps, IconProps, TextFieldProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UICreateSportOverridesProps = {
    UICreateSport?: PrimitiveOverrideProps<ViewProps>;
    Content?: PrimitiveOverrideProps<FlexProps>;
    "Edit Profile"?: PrimitiveOverrideProps<FlexProps>;
    Icon?: PrimitiveOverrideProps<ViewProps>;
    Vector?: PrimitiveOverrideProps<IconProps>;
    "Create Sports Profile"?: PrimitiveOverrideProps<TextProps>;
    Divider4260953?: PrimitiveOverrideProps<DividerProps>;
    Forms?: PrimitiveOverrideProps<ViewProps>;
    TextField4260955?: PrimitiveOverrideProps<TextFieldProps>;
    TextField4260956?: PrimitiveOverrideProps<TextFieldProps>;
    TextField4260957?: PrimitiveOverrideProps<TextFieldProps>;
    TextField4260958?: PrimitiveOverrideProps<TextFieldProps>;
    TextField4260959?: PrimitiveOverrideProps<TextFieldProps>;
    TextField4260960?: PrimitiveOverrideProps<TextFieldProps>;
    TextField4260961?: PrimitiveOverrideProps<TextFieldProps>;
    TextField4260962?: PrimitiveOverrideProps<TextFieldProps>;
    TextField4260963?: PrimitiveOverrideProps<TextFieldProps>;
    TextField4260964?: PrimitiveOverrideProps<TextFieldProps>;
    TextField4260965?: PrimitiveOverrideProps<TextFieldProps>;
    TextField4260966?: PrimitiveOverrideProps<TextFieldProps>;
    TextField4260967?: PrimitiveOverrideProps<TextFieldProps>;
    TextField4260968?: PrimitiveOverrideProps<TextFieldProps>;
    TextField4260969?: PrimitiveOverrideProps<TextFieldProps>;
    TextField4260970?: PrimitiveOverrideProps<TextFieldProps>;
    TextField4260971?: PrimitiveOverrideProps<TextFieldProps>;
    TextField4260972?: PrimitiveOverrideProps<TextFieldProps>;
    TextField4260973?: PrimitiveOverrideProps<TextFieldProps>;
    TextField4260974?: PrimitiveOverrideProps<TextFieldProps>;
    TextField4260975?: PrimitiveOverrideProps<TextFieldProps>;
    TextField4260976?: PrimitiveOverrideProps<TextFieldProps>;
    TextField4260977?: PrimitiveOverrideProps<TextFieldProps>;
    TextField4260978?: PrimitiveOverrideProps<TextFieldProps>;
    TextField4260979?: PrimitiveOverrideProps<TextFieldProps>;
    TextField4260980?: PrimitiveOverrideProps<TextFieldProps>;
    TextField4260981?: PrimitiveOverrideProps<TextFieldProps>;
    TextField4260982?: PrimitiveOverrideProps<TextFieldProps>;
    TextField42611195?: PrimitiveOverrideProps<TextFieldProps>;
    TextField4260983?: PrimitiveOverrideProps<TextFieldProps>;
    TextField4260984?: PrimitiveOverrideProps<TextFieldProps>;
    TextField4260985?: PrimitiveOverrideProps<TextFieldProps>;
    TextField4260986?: PrimitiveOverrideProps<TextFieldProps>;
    Divider4260987?: PrimitiveOverrideProps<DividerProps>;
    "Frame 322"?: PrimitiveOverrideProps<ViewProps>;
    Button?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type UICreateSportProps = React.PropsWithChildren<Partial<ViewProps> & {
    s?: any;
} & {
    overrides?: UICreateSportOverridesProps | undefined | null;
}>;
export default function UICreateSport(props: UICreateSportProps): React.ReactElement;
