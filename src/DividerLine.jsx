
import React from 'react';
import { Divider } from '@mui/material';

export default function DividerLine() {
    return (
        <>
            <Divider sx={{
            ml: 'auto',
            mr: 'auto',
            maxWidth: 1250,
          }}
            variant='inset'
          />
        </>
    )
}