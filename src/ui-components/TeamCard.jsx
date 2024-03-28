/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Button, Flex, Image, Text, View } from "@aws-amplify/ui-react";
import MyIcon from "./MyIcon";
export default function TeamCard(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="0"
      direction="column"
      width="320px"
      height="426px"
      justifyContent="center"
      alignItems="flex-start"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "TeamCard")}
      {...rest}
    >
      <Image
        width="unset"
        height="254px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        {...getOverrideProps(overrides, "image")}
      ></Image>
      <View
        width="320px"
        height="34px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "Frame 324")}
      >
        <MyIcon
          width="24px"
          height="24px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          overflow="hidden"
          position="absolute"
          top="5px"
          left="9px"
          padding="0px 0px 0px 0px"
          type="edit"
          {...getOverrideProps(overrides, "MyIcon4224714")}
        ></MyIcon>
        <MyIcon
          width="24px"
          height="24px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          overflow="hidden"
          position="absolute"
          top="5px"
          left="287px"
          padding="0px 0px 0px 0px"
          type="delete"
          {...getOverrideProps(overrides, "MyIcon4224715")}
        ></MyIcon>
        <Button
          width="42px"
          height="34px"
          position="absolute"
          borderRadius="4px"
          top="0px"
          left="0px"
          size="default"
          isDisabled={false}
          variation="default"
          {...getOverrideProps(overrides, "Button4224716")}
        ></Button>
        <Button
          width="42px"
          height="34px"
          position="absolute"
          borderRadius="4px"
          top="0px"
          left="278px"
          size="default"
          isDisabled={false}
          variation="default"
          {...getOverrideProps(overrides, "Button4224717")}
        ></Button>
      </View>
      <Flex
        gap="0"
        direction="column"
        width="unset"
        height="106px"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="16px 16px 16px 16px"
        {...getOverrideProps(overrides, "Card Area")}
      >
        <Flex
          gap="14px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Text Group")}
        >
          <Text
            fontFamily="Inter"
            fontSize="24px"
            fontWeight="700"
            color="rgba(13,26,38,1)"
            lineHeight="20px"
            textAlign="center"
            display="block"
            direction="column"
            justifyContent="unset"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Team Name"
            {...getOverrideProps(overrides, "Team Name")}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="22px"
            fontWeight="400"
            color="rgba(13,26,38,1)"
            lineHeight="24px"
            textAlign="center"
            display="block"
            direction="column"
            justifyContent="unset"
            letterSpacing="0.07px"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Coach Name"
            {...getOverrideProps(overrides, "Coach Name")}
          ></Text>
        </Flex>
      </Flex>
    </Flex>
  );
}
