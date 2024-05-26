import React, { useState } from "react";
import { Container, VStack, HStack, Box, Text, Button, Image, IconButton, Input } from "@chakra-ui/react";
import { FaCamera, FaUpload } from "react-icons/fa";

const Index = () => {
  const [frontImage, setFrontImage] = useState(null);
  const [backImage, setBackImage] = useState(null);
  const [caption, setCaption] = useState("");

  const handleImageUpload = (event, setImage) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Container centerContent maxW="container.sm" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%">
        <Text fontSize="2xl" fontWeight="bold">
          BeReal Clone
        </Text>
        <HStack spacing={4} width="100%">
          <Box width="50%">
            <Text textAlign="center">Front Camera</Text>
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden" height="200px" display="flex" justifyContent="center" alignItems="center">
              {frontImage ? <Image src={frontImage} alt="Front Camera" objectFit="cover" height="100%" width="100%" /> : <Text>No Image</Text>}
            </Box>
            <Input type="file" accept="image/*" onChange={(e) => handleImageUpload(e, setFrontImage)} display="none" id="front-upload" />
            <IconButton as="label" htmlFor="front-upload" aria-label="Upload Front Image" icon={<FaCamera />} size="lg" mt={2} />
          </Box>
          <Box width="50%">
            <Text textAlign="center">Back Camera</Text>
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden" height="200px" display="flex" justifyContent="center" alignItems="center">
              {backImage ? <Image src={backImage} alt="Back Camera" objectFit="cover" height="100%" width="100%" /> : <Text>No Image</Text>}
            </Box>
            <Input type="file" accept="image/*" onChange={(e) => handleImageUpload(e, setBackImage)} display="none" id="back-upload" />
            <IconButton as="label" htmlFor="back-upload" aria-label="Upload Back Image" icon={<FaCamera />} size="lg" mt={2} />
          </Box>
        </HStack>
        <Input placeholder="Add a caption..." value={caption} onChange={(e) => setCaption(e.target.value)} />
        <Button leftIcon={<FaUpload />} colorScheme="blue" width="100%">
          Post
        </Button>
      </VStack>
    </Container>
  );
};

export default Index;
