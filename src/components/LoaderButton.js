import React from "react";
import { Button, Spinner } from "reactstrap";
import "./LoaderButton.css";

export default ({
  isLoading,
  text,
  loadingText,
  className = "",
  color = "secondary",
  disabled = false,
  ...props
}) =>
  <Button
    className={`LoaderButton ${className}`}
    disabled={disabled || isLoading}
    color={color}
    size="lg"
    {...props}
  >
    {isLoading && <Spinner size="sm" color="light" />}
    {!isLoading ? text : <span>  {loadingText}</span>}
  </Button>;
