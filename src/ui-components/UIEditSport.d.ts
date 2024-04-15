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
export declare type UIEditSportOverridesProps = {
    UIEditSport?: PrimitiveOverrideProps<ViewProps>;
    Content?: PrimitiveOverrideProps<FlexProps>;
    "Edit Profile"?: PrimitiveOverrideProps<FlexProps>;
    Icon?: PrimitiveOverrideProps<ViewProps>;
    Vector?: PrimitiveOverrideProps<IconProps>;
    "Edit Sports Profile"?: PrimitiveOverrideProps<TextProps>;
    Divider42611455?: PrimitiveOverrideProps<DividerProps>;
    Forms?: PrimitiveOverrideProps<ViewProps>;
    TextField42611457?: PrimitiveOverrideProps<TextFieldProps>;
    TextField42611458?: PrimitiveOverrideProps<TextFieldProps>;
    TextField42611459?: PrimitiveOverrideProps<TextFieldProps>;
    TextField42611460?: PrimitiveOverrideProps<TextFieldProps>;
    TextField42611461?: PrimitiveOverrideProps<TextFieldProps>;
    TextField42611462?: PrimitiveOverrideProps<TextFieldProps>;
    TextField42611463?: PrimitiveOverrideProps<TextFieldProps>;
    TextField42611464?: PrimitiveOverrideProps<TextFieldProps>;
    TextField42611465?: PrimitiveOverrideProps<TextFieldProps>;
    TextField42611466?: PrimitiveOverrideProps<TextFieldProps>;
    TextField42611467?: PrimitiveOverrideProps<TextFieldProps>;
    TextField42611468?: PrimitiveOverrideProps<TextFieldProps>;
    TextField42611469?: PrimitiveOverrideProps<TextFieldProps>;
    TextField42611470?: PrimitiveOverrideProps<TextFieldProps>;
    TextField42611471?: PrimitiveOverrideProps<TextFieldProps>;
    TextField42611472?: PrimitiveOverrideProps<TextFieldProps>;
    TextField42611473?: PrimitiveOverrideProps<TextFieldProps>;
    TextField42611474?: PrimitiveOverrideProps<TextFieldProps>;
    TextField42611475?: PrimitiveOverrideProps<TextFieldProps>;
    TextField42611476?: PrimitiveOverrideProps<TextFieldProps>;
    TextField42611477?: PrimitiveOverrideProps<TextFieldProps>;
    TextField42611478?: PrimitiveOverrideProps<TextFieldProps>;
    TextField42611479?: PrimitiveOverrideProps<TextFieldProps>;
    TextField42611480?: PrimitiveOverrideProps<TextFieldProps>;
    TextField42611481?: PrimitiveOverrideProps<TextFieldProps>;
    TextField42611482?: PrimitiveOverrideProps<TextFieldProps>;
    TextField42611483?: PrimitiveOverrideProps<TextFieldProps>;
    TextField42611484?: PrimitiveOverrideProps<TextFieldProps>;
    TextField42611485?: PrimitiveOverrideProps<TextFieldProps>;
    TextField42611486?: PrimitiveOverrideProps<TextFieldProps>;
    TextField42611487?: PrimitiveOverrideProps<TextFieldProps>;
    TextField42611488?: PrimitiveOverrideProps<TextFieldProps>;
    TextField42611489?: PrimitiveOverrideProps<TextFieldProps>;
    Divider42611490?: PrimitiveOverrideProps<DividerProps>;
    "Frame 322"?: PrimitiveOverrideProps<ViewProps>;
    Button?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type UIEditSportProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: UIEditSportOverridesProps | undefined | null;
}>;
export default function UIEditSport(props: UIEditSportProps): React.ReactElement;
