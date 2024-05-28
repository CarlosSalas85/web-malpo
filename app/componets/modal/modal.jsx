const Modal = ({ onClose, children }) => {
    return (
      <div className="fixed inset-0 z-50 flex overflow-auto bg-gray-800 bg-opacity-75">
        <div className="relative m-auto w-full max-w-md rounded bg-white p-8 shadow-lg">
          <button
            className="absolute right-0 top-0 m-4 text-rojoMalpo hover:text-gray-400"
            onClick={onClose}
          >
            <img
              className="mr-3 h-8 w-8"
              alt={`icono`}
              src={`https://c.animaapp.com/o0ROixJd/img/cancel@2x.png`}
            />
          </button>
          <div className="mt-4">{children}</div>
        </div>
      </div>
    );
  };
  