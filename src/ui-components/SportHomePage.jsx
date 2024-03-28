/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Button, Divider, Flex, Text, View } from "@aws-amplify/ui-react";
export default function SportHomePage(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="320px"
      height="380px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "SportHomePage")}
      {...rest}
    >
      <View
        width="320px"
        height="380px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0px"
        left="0px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Content")}
      >
        <Flex
          gap="16px"
          direction="row"
          width="272px"
          height="unset"
          justifyContent="center"
          alignItems="center"
          position="absolute"
          top="41px"
          left="24px"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Edit Profile42321011")}
        >
          <Text
            fontFamily="Inter"
            fontSize="36px"
            fontWeight="800"
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
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="CSN Sports"
            {...getOverrideProps(overrides, "CSN Sports")}
          ></Text>
        </Flex>
        <Divider
          width="272px"
          height="1px"
          position="absolute"
          top="129px"
          left="24px"
          size="small"
          orientation="horizontal"
          {...getOverrideProps(overrides, "Divider42321013")}
        ></Divider>
        <Button
          width="200px"
          height="50px"
          position="absolute"
          border="5px SOLID rgba(13,26,38,1)"
          borderRadius="4px"
          padding="3px 11px 3px 11px"
          top="220px"
          left="60px"
          size="default"
          isDisabled={false}
          variation="default"
          children="All Players"
          {...getOverrideProps(overrides, "Button42321014")}
        ></Button>
        <Button
          width="200px"
          height="50px"
          position="absolute"
          border="5px SOLID rgba(13,26,38,1)"
          borderRadius="4px"
          padding="3px 11px 3px 11px"
          top="150px"
          left="57px"
          size="default"
          isDisabled={false}
          variation="default"
          children="Teams"
          {...getOverrideProps(overrides, "Button42321015")}
        ></Button>
        <Button
          width="200px"
          height="50px"
          position="absolute"
          border="5px SOLID rgba(13,26,38,1)"
          borderRadius="4px"
          padding="3px 11px 3px 11px"
          top="290px"
          left="60px"
          size="default"
          isDisabled={false}
          variation="default"
          children="Profile"
          {...getOverrideProps(overrides, "Button42321020")}
        ></Button>
        <Divider
          width="272px"
          height="7px"
          position="absolute"
          top="360px"
          left="24px"
          size="small"
          orientation="horizontal"
          {...getOverrideProps(overrides, "Divider42321021")}
        ></Divider>
        <Flex
          gap="16px"
          direction="row"
          width="272px"
          height="47px"
          justifyContent="center"
          alignItems="center"
          position="absolute"
          top="82px"
          left="24px"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Edit Profile42321052")}
        >
          <Text
            fontFamily="Inter"
            fontSize="36px"
            fontWeight="800"
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
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Information"
            {...getOverrideProps(overrides, "Information")}
          ></Text>
        </Flex>
      </View>
    </View>
  );
}
