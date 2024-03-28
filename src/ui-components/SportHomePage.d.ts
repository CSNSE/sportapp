/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { ButtonProps, DividerProps, FlexProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type SportHomePageOverridesProps = {
    SportHomePage?: PrimitiveOverrideProps<ViewProps>;
    Content?: PrimitiveOverrideProps<ViewProps>;
    "Edit Profile"?: PrimitiveOverrideProps<FlexProps>;
    "CSN Sports Info"?: PrimitiveOverrideProps<TextProps>;
    Divider42221304?: PrimitiveOverrideProps<DividerProps>;
    Button42221305?: PrimitiveOverrideProps<ButtonProps>;
    Button42221306?: PrimitiveOverrideProps<ButtonProps>;
    Button42221311?: PrimitiveOverrideProps<ButtonProps>;
    Divider42221312?: PrimitiveOverrideProps<DividerProps>;
} & EscapeHatchProps;
export declare type SportHomePageProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: SportHomePageOverridesProps | undefined | null;
}>;
export default function SportHomePage(props: SportHomePageProps): React.ReactElement;
