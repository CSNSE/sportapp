/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { UIEditSportProps } from "./UIEditSport";
import { ViewProps } from "@aws-amplify/ui-react";
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
    UI_EditSport?: UIEditSportProps;
} & EscapeHatchProps;
export declare type UICreateSportProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: UICreateSportOverridesProps | undefined | null;
}>;
export default function UICreateSport(props: UICreateSportProps): React.ReactElement;
