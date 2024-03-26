/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { ReviewNavBarProps } from "./ReviewNavBar";
import { FlexProps } from "@aws-amplify/ui-react";
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
export declare type SportNavBarOverridesProps = {
    SportNavBar?: PrimitiveOverrideProps<FlexProps>;
    ReviewNavBar?: ReviewNavBarProps;
} & EscapeHatchProps;
export declare type SportNavBarProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: SportNavBarOverridesProps | undefined | null;
}>;
export default function SportNavBar(props: SportNavBarProps): React.ReactElement;
