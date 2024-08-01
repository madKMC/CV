import React from 'react';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import cvPDF from '../pdf/KaylenCairnsCV.pdf';

function DownloadButton() {
  return (
    <Button
      variant="primary"
      href={cvPDF}
      target="_blank"
    >
      Download CV
    </Button>
  );
}

export default DownloadButton;

//Opens the CV pdf in a new tab.