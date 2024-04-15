/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps, useNavigateAction } from "./utils";
import { Divider, Flex, Icon, Image, Text, View } from "@aws-amplify/ui-react";
export default function SportCard(props) {
  const { sport, overrides, ...rest } = props;
  const vectorOnClick = useNavigateAction({ type: "url", url: "/person" });
  return (
    <View
      width="640px"
      height="1010px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "SportCard")}
      {...rest}
    >
      <Flex
        gap="24px"
        direction="column"
        width="640px"
        height="1010px"
        justifyContent="flex-start"
        alignItems="flex-start"
        position="absolute"
        top="0px"
        left="0px"
        padding="24px 24px 24px 24px"
        {...getOverrideProps(overrides, "Content")}
      >
        <Flex
          gap="16px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Edit Profile")}
        >
          <View
            width="24px"
            height="24px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            overflow="hidden"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Icon")}
          >
            <Icon
              width="14px"
              height="14px"
              viewBox={{ minX: 0, minY: 0, width: 14, height: 14 }}
              paths={[
                {
                  d: "M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z",
                  fill: "rgba(13,26,38,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="20.83%"
              bottom="20.83%"
              left="20.83%"
              right="20.83%"
              onClick={() => {
                vectorOnClick();
              }}
              {...getOverrideProps(overrides, "Vector")}
            ></Icon>
          </View>
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="700"
            color="rgba(13,26,38,1)"
            lineHeight="20px"
            textAlign="left"
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
            children={sport?.name}
            {...getOverrideProps(overrides, "Name4178767")}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="700"
            color="rgba(13,26,38,1)"
            lineHeight="20px"
            textAlign="left"
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
            children="Sports Info"
            {...getOverrideProps(overrides, "Sports Info")}
          ></Text>
        </Flex>
        <Divider
          width="unset"
          height="1px"
          shrink="0"
          alignSelf="stretch"
          size="small"
          orientation="horizontal"
          {...getOverrideProps(overrides, "Divider")}
        ></Divider>
        <View
          width="592px"
          height="913px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          overflow="hidden"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 325")}
        >
          <Image
            width="296px"
            height="239px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="0px"
            left="0px"
            padding="0px 0px 0px 0px"
            objectFit="cover"
            src={sport?.picture}
            {...getOverrideProps(overrides, "image")}
          ></Image>
          <Flex
            gap="0"
            direction="column"
            width="296px"
            height="114px"
            justifyContent="flex-start"
            alignItems="flex-start"
            position="absolute"
            top="0px"
            left="296px"
            padding="16px 16px 16px 16px"
            {...getOverrideProps(overrides, "Card Area4178901")}
          >
            <Flex
              gap="8px"
              direction="column"
              width="unset"
              height="unset"
              justifyContent="flex-start"
              alignItems="flex-start"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Text Group4178902")}
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
                children="Personal Info"
                {...getOverrideProps(overrides, "Personal Info")}
              ></Text>
              <Text
                fontFamily="Inter"
                fontSize="20px"
                fontWeight="400"
                color="rgba(13,26,38,1)"
                lineHeight="24px"
                textAlign="center"
                display="block"
                direction="column"
                justifyContent="unset"
                letterSpacing="0.05px"
                width="unset"
                height="unset"
                gap="unset"
                alignItems="unset"
                shrink="0"
                alignSelf="stretch"
                position="relative"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children={sport?.name}
                {...getOverrideProps(overrides, "Name4178904")}
              ></Text>
              <Text
                fontFamily="Inter"
                fontSize="20px"
                fontWeight="400"
                color="rgba(13,26,38,1)"
                lineHeight="24px"
                textAlign="center"
                display="block"
                direction="column"
                justifyContent="unset"
                letterSpacing="0.05px"
                width="unset"
                height="unset"
                gap="unset"
                alignItems="unset"
                shrink="0"
                alignSelf="stretch"
                position="relative"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children={sport?.grad}
                {...getOverrideProps(overrides, "Graduation Year")}
              ></Text>
              <Text
                fontFamily="Inter"
                fontSize="20px"
                fontWeight="400"
                color="rgba(13,26,38,1)"
                lineHeight="24px"
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
                children={sport?.height}
                {...getOverrideProps(overrides, "Height")}
              ></Text>
              <Text
                fontFamily="Inter"
                fontSize="20px"
                fontWeight="400"
                color="rgba(13,26,38,1)"
                lineHeight="24px"
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
                children={sport?.weight}
                {...getOverrideProps(overrides, "Weight")}
              ></Text>
              <Text
                fontFamily="Inter"
                fontSize="20px"
                fontWeight="400"
                color="rgba(13,26,38,1)"
                lineHeight="24px"
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
                children={sport?.email}
                {...getOverrideProps(overrides, "Email4200401")}
              ></Text>
              <Text
                fontFamily="Inter"
                fontSize="20px"
                fontWeight="400"
                color="rgba(13,26,38,1)"
                lineHeight="24px"
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
                children={sport?.phone}
                {...getOverrideProps(overrides, "Phone Number4200402")}
              ></Text>
            </Flex>
          </Flex>
          <Flex
            gap="0"
            direction="column"
            width="296px"
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-start"
            position="absolute"
            top="254px"
            left="0px"
            padding="16px 16px 16px 16px"
            {...getOverrideProps(overrides, "Card Area4190424")}
          >
            <Flex
              gap="8px"
              direction="column"
              width="unset"
              height="unset"
              justifyContent="flex-start"
              alignItems="flex-start"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Text Group4190425")}
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
                children="Sport Info"
                {...getOverrideProps(overrides, "Sport Info")}
              ></Text>
              <Text
                fontFamily="Inter"
                fontSize="20px"
                fontWeight="400"
                color="rgba(13,26,38,1)"
                lineHeight="24px"
                textAlign="center"
                display="block"
                direction="column"
                justifyContent="unset"
                letterSpacing="0.05px"
                width="unset"
                height="unset"
                gap="unset"
                alignItems="unset"
                shrink="0"
                alignSelf="stretch"
                position="relative"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children={sport?.sport}
                {...getOverrideProps(overrides, "Sport")}
              ></Text>
              <Text
                fontFamily="Inter"
                fontSize="20px"
                fontWeight="400"
                color="rgba(13,26,38,1)"
                lineHeight="24px"
                textAlign="center"
                display="block"
                direction="column"
                justifyContent="unset"
                letterSpacing="0.05px"
                width="unset"
                height="unset"
                gap="unset"
                alignItems="unset"
                shrink="0"
                alignSelf="stretch"
                position="relative"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children={sport?.team}
                {...getOverrideProps(overrides, "Team")}
              ></Text>
              <Text
                fontFamily="Inter"
                fontSize="20px"
                fontWeight="400"
                color="rgba(13,26,38,1)"
                lineHeight="24px"
                textAlign="center"
                display="block"
                direction="column"
                justifyContent="unset"
                letterSpacing="0.05px"
                width="unset"
                height="unset"
                gap="unset"
                alignItems="unset"
                shrink="0"
                alignSelf="stretch"
                position="relative"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children={sport?.position}
                {...getOverrideProps(overrides, "Position")}
              ></Text>
              <Text
                fontFamily="Inter"
                fontSize="20px"
                fontWeight="400"
                color="rgba(13,26,38,1)"
                lineHeight="24px"
                textAlign="center"
                display="block"
                direction="column"
                justifyContent="unset"
                letterSpacing="0.05px"
                width="unset"
                height="unset"
                gap="unset"
                alignItems="unset"
                shrink="0"
                alignSelf="stretch"
                position="relative"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children={sport?.highlight}
                {...getOverrideProps(overrides, "Highlight Link")}
              ></Text>
              <Text
                fontFamily="Inter"
                fontSize="20px"
                fontWeight="400"
                color="rgba(13,26,38,1)"
                lineHeight="24px"
                textAlign="center"
                display="block"
                direction="column"
                justifyContent="unset"
                letterSpacing="0.05px"
                width="unset"
                height="unset"
                gap="unset"
                alignItems="unset"
                shrink="0"
                alignSelf="stretch"
                position="relative"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children={sport?.jersey}
                {...getOverrideProps(overrides, "Jersey")}
              ></Text>
            </Flex>
          </Flex>
          <Flex
            gap="0"
            direction="column"
            width="296px"
            height="114px"
            justifyContent="flex-start"
            alignItems="flex-start"
            position="absolute"
            top="466px"
            left="0px"
            padding="16px 16px 16px 16px"
            {...getOverrideProps(overrides, "Card Area4201411")}
          >
            <Flex
              gap="8px"
              direction="column"
              width="unset"
              height="unset"
              justifyContent="flex-start"
              alignItems="flex-start"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Text Group4201412")}
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
                children="Stats"
                {...getOverrideProps(overrides, "Stats")}
              ></Text>
              <Text
                fontFamily="Inter"
                fontSize="20px"
                fontWeight="400"
                color="rgba(13,26,38,1)"
                lineHeight="24px"
                textAlign="center"
                display="block"
                direction="column"
                justifyContent="unset"
                letterSpacing="0.05px"
                width="unset"
                height="unset"
                gap="unset"
                alignItems="unset"
                shrink="0"
                alignSelf="stretch"
                position="relative"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children={sport?.stat1}
                {...getOverrideProps(overrides, "Stat 1")}
              ></Text>
              <Text
                fontFamily="Inter"
                fontSize="20px"
                fontWeight="400"
                color="rgba(13,26,38,1)"
                lineHeight="24px"
                textAlign="center"
                display="block"
                direction="column"
                justifyContent="unset"
                letterSpacing="0.05px"
                width="unset"
                height="unset"
                gap="unset"
                alignItems="unset"
                shrink="0"
                alignSelf="stretch"
                position="relative"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children={sport?.stat2}
                {...getOverrideProps(overrides, "Stat 2")}
              ></Text>
              <Text
                fontFamily="Inter"
                fontSize="20px"
                fontWeight="400"
                color="rgba(13,26,38,1)"
                lineHeight="24px"
                textAlign="center"
                display="block"
                direction="column"
                justifyContent="unset"
                letterSpacing="0.05px"
                width="unset"
                height="unset"
                gap="unset"
                alignItems="unset"
                shrink="0"
                alignSelf="stretch"
                position="relative"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children={sport?.stat3}
                {...getOverrideProps(overrides, "Stat 3")}
              ></Text>
              <Text
                fontFamily="Inter"
                fontSize="20px"
                fontWeight="400"
                color="rgba(13,26,38,1)"
                lineHeight="24px"
                textAlign="center"
                display="block"
                direction="column"
                justifyContent="unset"
                letterSpacing="0.05px"
                width="unset"
                height="unset"
                gap="unset"
                alignItems="unset"
                shrink="0"
                alignSelf="stretch"
                position="relative"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children={sport?.stat4}
                {...getOverrideProps(overrides, "Stat 4")}
              ></Text>
              <Text
                fontFamily="Inter"
                fontSize="20px"
                fontWeight="400"
                color="rgba(13,26,38,1)"
                lineHeight="24px"
                textAlign="center"
                display="block"
                direction="column"
                justifyContent="unset"
                letterSpacing="0.05px"
                width="unset"
                height="unset"
                gap="unset"
                alignItems="unset"
                shrink="0"
                alignSelf="stretch"
                position="relative"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children={sport?.stat5}
                {...getOverrideProps(overrides, "Stat 5")}
              ></Text>
              <Text
                fontFamily="Inter"
                fontSize="20px"
                fontWeight="400"
                color="rgba(13,26,38,1)"
                lineHeight="24px"
                textAlign="center"
                display="block"
                direction="column"
                justifyContent="unset"
                letterSpacing="0.05px"
                width="unset"
                height="unset"
                gap="unset"
                alignItems="unset"
                shrink="0"
                alignSelf="stretch"
                position="relative"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children={sport?.stat6}
                {...getOverrideProps(overrides, "Stat 6")}
              ></Text>
            </Flex>
          </Flex>
          <Flex
            gap="0"
            direction="column"
            width="296px"
            height="114px"
            justifyContent="flex-start"
            alignItems="flex-start"
            position="absolute"
            top="719px"
            left="0px"
            padding="16px 16px 16px 16px"
            {...getOverrideProps(overrides, "Card Area4216482")}
          >
            <Flex
              gap="8px"
              direction="column"
              width="unset"
              height="unset"
              justifyContent="flex-start"
              alignItems="flex-start"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Text Group4216483")}
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
                children="Extracurriculars"
                {...getOverrideProps(overrides, "Extracurriculars")}
              ></Text>
              <Text
                fontFamily="Inter"
                fontSize="20px"
                fontWeight="400"
                color="rgba(13,26,38,1)"
                lineHeight="24px"
                textAlign="center"
                display="block"
                direction="column"
                justifyContent="unset"
                letterSpacing="0.05px"
                width="unset"
                height="unset"
                gap="unset"
                alignItems="unset"
                shrink="0"
                alignSelf="stretch"
                position="relative"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children={sport?.volunteer}
                {...getOverrideProps(overrides, "Volunteering")}
              ></Text>
              <Text
                fontFamily="Inter"
                fontSize="20px"
                fontWeight="400"
                color="rgba(13,26,38,1)"
                lineHeight="24px"
                textAlign="center"
                display="block"
                direction="column"
                justifyContent="unset"
                letterSpacing="0.05px"
                width="unset"
                height="unset"
                gap="unset"
                alignItems="unset"
                shrink="0"
                alignSelf="stretch"
                position="relative"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children={sport?.hobbies}
                {...getOverrideProps(overrides, "Hobbies")}
              ></Text>
              <Text
                fontFamily="Inter"
                fontSize="20px"
                fontWeight="400"
                color="rgba(13,26,38,1)"
                lineHeight="24px"
                textAlign="center"
                display="block"
                direction="column"
                justifyContent="unset"
                letterSpacing="0.05px"
                width="unset"
                height="unset"
                gap="unset"
                alignItems="unset"
                shrink="0"
                alignSelf="stretch"
                position="relative"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children={sport?.othersport}
                {...getOverrideProps(overrides, "Other Sports")}
              ></Text>
            </Flex>
          </Flex>
          <Flex
            gap="0"
            direction="column"
            width="296px"
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-start"
            position="absolute"
            top="256px"
            left="296px"
            padding="16px 16px 16px 16px"
            {...getOverrideProps(overrides, "Card Area4190429")}
          >
            <Flex
              gap="8px"
              direction="column"
              width="unset"
              height="unset"
              justifyContent="flex-start"
              alignItems="flex-start"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Text Group4190430")}
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
                children="Academic Info"
                {...getOverrideProps(overrides, "Academic Info")}
              ></Text>
              <Text
                fontFamily="Inter"
                fontSize="20px"
                fontWeight="400"
                color="rgba(13,26,38,1)"
                lineHeight="24px"
                textAlign="center"
                display="block"
                direction="column"
                justifyContent="unset"
                letterSpacing="0.05px"
                width="unset"
                height="unset"
                gap="unset"
                alignItems="unset"
                shrink="0"
                alignSelf="stretch"
                position="relative"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children={sport?.gpa}
                {...getOverrideProps(overrides, "GPA")}
              ></Text>
              <Text
                fontFamily="Inter"
                fontSize="20px"
                fontWeight="400"
                color="rgba(13,26,38,1)"
                lineHeight="24px"
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
                children={sport?.rank}
                {...getOverrideProps(overrides, "Class Rank")}
              ></Text>
              <Text
                fontFamily="Inter"
                fontSize="20px"
                fontWeight="400"
                color="rgba(13,26,38,1)"
                lineHeight="24px"
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
                children={sport?.sat}
                {...getOverrideProps(overrides, "SAT Score")}
              ></Text>
              <Text
                fontFamily="Inter"
                fontSize="20px"
                fontWeight="400"
                color="rgba(13,26,38,1)"
                lineHeight="24px"
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
                children={sport?.act}
                {...getOverrideProps(overrides, "ACT Score")}
              ></Text>
              <Text
                fontFamily="Inter"
                fontSize="20px"
                fontWeight="400"
                color="rgba(13,26,38,1)"
                lineHeight="24px"
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
                children={sport?.aps}
                {...getOverrideProps(overrides, "AP Classes")}
              ></Text>
            </Flex>
          </Flex>
          <Flex
            gap="0"
            direction="column"
            width="296px"
            height="114px"
            justifyContent="flex-start"
            alignItems="flex-start"
            position="absolute"
            top="651px"
            left="296px"
            padding="16px 16px 16px 16px"
            {...getOverrideProps(overrides, "Card Area4190444")}
          >
            <Flex
              gap="8px"
              direction="column"
              width="unset"
              height="unset"
              justifyContent="flex-start"
              alignItems="flex-start"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Text Group4190445")}
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
                children="Parent Info"
                {...getOverrideProps(overrides, "Parent Info")}
              ></Text>
              <Text
                fontFamily="Inter"
                fontSize="20px"
                fontWeight="400"
                color="rgba(13,26,38,1)"
                lineHeight="24px"
                textAlign="center"
                display="block"
                direction="column"
                justifyContent="unset"
                letterSpacing="0.05px"
                width="unset"
                height="unset"
                gap="unset"
                alignItems="unset"
                shrink="0"
                alignSelf="stretch"
                position="relative"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children={sport?.parentname}
                {...getOverrideProps(overrides, "Parents Name")}
              ></Text>
              <Text
                fontFamily="Inter"
                fontSize="20px"
                fontWeight="400"
                color="rgba(13,26,38,1)"
                lineHeight="24px"
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
                children={sport?.parentphone}
                {...getOverrideProps(overrides, "Phone Number4190448")}
              ></Text>
              <Text
                fontFamily="Inter"
                fontSize="20px"
                fontWeight="400"
                color="rgba(13,26,38,1)"
                lineHeight="24px"
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
                children={sport?.parentemail}
                {...getOverrideProps(overrides, "Email4215477")}
              ></Text>
              <Text
                fontFamily="Inter"
                fontSize="20px"
                fontWeight="400"
                color="rgba(13,26,38,1)"
                lineHeight="24px"
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
                children={sport?.address}
                {...getOverrideProps(overrides, "Address")}
              ></Text>
            </Flex>
          </Flex>
          <Flex
            gap="0"
            direction="column"
            width="296px"
            height="114px"
            justifyContent="flex-start"
            alignItems="flex-start"
            position="absolute"
            top="492px"
            left="296px"
            padding="16px 16px 16px 16px"
            {...getOverrideProps(overrides, "Card Area4190449")}
          >
            <Flex
              gap="8px"
              direction="column"
              width="unset"
              height="unset"
              justifyContent="flex-start"
              alignItems="flex-start"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Text Group4190450")}
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
                children="Coach Info"
                {...getOverrideProps(overrides, "Coach Info")}
              ></Text>
              <Text
                fontFamily="Inter"
                fontSize="20px"
                fontWeight="400"
                color="rgba(13,26,38,1)"
                lineHeight="24px"
                textAlign="center"
                display="block"
                direction="column"
                justifyContent="unset"
                letterSpacing="0.05px"
                width="unset"
                height="unset"
                gap="unset"
                alignItems="unset"
                shrink="0"
                alignSelf="stretch"
                position="relative"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children={sport?.coachname}
                {...getOverrideProps(overrides, "Coach Name")}
              ></Text>
              <Text
                fontFamily="Inter"
                fontSize="20px"
                fontWeight="400"
                color="rgba(13,26,38,1)"
                lineHeight="24px"
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
                children={sport?.coachphone}
                {...getOverrideProps(overrides, "Phone Number4190453")}
              ></Text>
              <Text
                fontFamily="Inter"
                fontSize="20px"
                fontWeight="400"
                color="rgba(13,26,38,1)"
                lineHeight="24px"
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
                children={sport?.coachemail}
                {...getOverrideProps(overrides, "Email4201410")}
              ></Text>
            </Flex>
          </Flex>
        </View>
      </Flex>
    </View>
  );
}
