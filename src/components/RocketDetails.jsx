import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box, Flex, Spacer, Tag, Text } from '@chakra-ui/react';
import * as API from '../services/launches';

export function RocketDetails(){
    const [rocket, setrocket] = useState({});

    const {rocketId} = useParams();    

    useEffect(() => {
        API.getRocketById(rocketId)
            .then(setrocket)
            .catch(console.log);
    }, [rocketId]);

    return (
        <Box>
            <Text fontSize="2xl">
                Rocket <strong>{rocket.rocket_name}</strong> [{rocket.country}]
            </Text>
            <Text>
                {rocket.description}
            </Text>
        </Box>
    );
}