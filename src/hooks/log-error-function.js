function LogError(error, errorInfo) {
  console.log("Logging Error:", error, "ErrorInfo:", errorInfo.componentStack);
}

export default LogError;
