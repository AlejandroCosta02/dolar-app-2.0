import ReactLoading from "react-loading";

function LoadingComponent() {
  return (
    <ReactLoading
      type="bubbles"
      color="black"
      height={28}
      width={28}
      className="mx-auto"
    />
  );
}

export default LoadingComponent;
