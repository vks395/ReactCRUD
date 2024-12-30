import React from "react";
import { Alert } from "reactstrap";

export default function ValidationAlert({ show, message, onClose }) {
    return (
        show && (
            <Alert color="danger" toggle={onClose}>
                {message}
            </Alert>
        )
    );
}
