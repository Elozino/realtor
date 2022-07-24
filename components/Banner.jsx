import React from 'react'
import Link from "next/link";
import Image from "next/image";
import { Box, Flex, Text, Button } from "@chakra-ui/react";

const Banner = ({ purpose, imageUrl, title1, title2, desc1, linkName, buttonText, }) => {
  return (
    <Flex flexWrap="wrap" justifyContent="center" alignItems="center" m="10">
      <Image src={imageUrl} alt="banner" width={500} height={300} />
      <Box p="5">
        <Text color="gray.500" fontSize="sm" fontWeight="medium">
          {purpose}
        </Text>
        <Text fontSize="3xl" fontWeight="bold">
          {title1} <br /> {title2}
        </Text>
        <Text fontSize="lg" paddingTop="3" paddingBottom="3" color="gray.700">
          {desc1}
        </Text>
        <Button fontSize="xl">
          <Link href={linkName}>{buttonText}</Link>
        </Button>
      </Box>
    </Flex>
  )
}

export default Banner