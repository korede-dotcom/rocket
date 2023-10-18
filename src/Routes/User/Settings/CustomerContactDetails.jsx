import React from 'react'
import Userlayout from '../../../reuseables/Userlayout'
import styled from 'styled-components';
import Centeredbox from '../../../reuseables/Centeredbox';
import Box from '../../../reuseables/Box';
import TextInput from '../../../styles/TextInput';

const CustomerContactDetails = () => {
  return (
    <Userlayout useBack={true}>
        <Centeredbox>
            <Box radius="15px" width="100%" flexDirection="column">
                <TextInput label="Email Address" placehlder="teting" />
            </Box>
        </Centeredbox>
    </Userlayout>
  )
}

export default CustomerContactDetails;

