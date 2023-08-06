import React from 'react';
import { Document } from 'react-pdf'; 

import samplePDF from '../../assets/JennyNaorojiWebDeveloperCV.pdf';

export default function Resume() {
  return (
    <div>
      <Document file={samplePDF} />
    </div>
  );
}
