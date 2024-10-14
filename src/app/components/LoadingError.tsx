import Spinner from "../utils/spinner";

interface LoadingErrorProps {
  isLoading: boolean;
  error: string | null;
}

const LoadingError: React.FC<LoadingErrorProps> = ({ isLoading, error }) => {
  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Spinner />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-lg text-red-600">{error}</p>
      </div>
    );
  }

  return null;
};

export default LoadingError;
