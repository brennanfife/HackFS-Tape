import React, { useCallback } from 'react';
import { Button } from '@chakra-ui/core';
import Container from './RoutesContainer';
import { useHistory } from 'react-router-dom';
import { useDropzone } from 'react-dropzone';

export default function Upload() {
  let history = useHistory();
  const onDrop = useCallback((acceptedFiles) => {
    console.log('acceptedFiles:', acceptedFiles);
    // Do something with the files
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <>
      <Button onClick={() => history.goBack()}>Back</Button>
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the files here ...</p>
        ) : (
          <p>Drag 'n' drop some files here, or click to select files</p>
        )}
      </div>
    </>
  );
}
