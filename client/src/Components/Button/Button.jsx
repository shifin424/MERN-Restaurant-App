
const Button = ({ onClick, text, className, loading }) => {
    return (
        <div>
            <button
                type="submit"
                onClick={onClick}
                className={`text-white px-14 py-2 rounded-lg transition w-full ${className}`}
                disabled={loading} // Disable the button during loading
            >
                {loading ? (
                    <div className="flex items-center justify-center">
                        <span className="mr-2">Submitting...</span>
                        <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                    </div>
                ) : (
                    text
                )}
            </button>
        </div>
    );
};

export default Button;