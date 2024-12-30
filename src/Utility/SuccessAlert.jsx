import React, { useState } from 'react';
import { Alert } from 'reactstrap';

function SuccessAlert(props) {
  const [visible, setVisible] = useState(true);

  const onDismiss = () => setVisible(false);

  return (
    <Alert color= {props.color} isOpen={visible} toggle={onDismiss}>
    {props.message}
    </Alert>
  );
}

export default SuccessAlert;