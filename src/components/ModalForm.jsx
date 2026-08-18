import { useEffect, useRef, useState } from "react"

const ModalForm = ({ isOpen, onClose, initialTitle, onFormSubmit }) => {
  // ***** STEP 5 *****
  const [title, setTitle] = useState(initialTitle);
  const inputRef = useRef(null);  // input auto focus hobe
  // ***** END of STEP 5 *****

  // ***** STEP 6 *****
  useEffect(() => {
    setTitle(initialTitle)
  }, [initialTitle])
  // ***** END of STEP 6 *****

  // ***** STEP 7 ***** Focus on the Input When the Modal is Open
  useEffect(() => {
    if(isOpen) {
      // inputRef.current.focus();
      setTimeout(() => inputRef.current?.focus(), 0);
    }
  }, [isOpen]);
  // ***** END of STEP 7 *****

  // ***** STEP 8 ***** Close on Esc key
  useEffect(() => {
    function handleKey(e) {
      // console.log(e.key)
      if(e.key === 'Escape') onClose();
    }

    if(isOpen) document.addEventListener('keydown', handleKey);

    // Cleanup
    return () => {
      document.removeEventListener('keydown', handleKey);
    }
  }, [isOpen, onClose]);
  // ***** END of STEP 8 *****

  // ***** STEP 9 *****
  // handle form submit
  const handleSubmit = e => {
    e.preventDefault();
    const trimmedTitle = title.trim();
    if(!trimmedTitle) return;
    // else
    onFormSubmit(trimmedTitle);
    // Clear Input Fields
    setTitle('');
  }
  // ***** END of STEP 9 *****

  // ***** STEP 10 *****
  // isOpen = false
  if( ! isOpen ) return;
  // ***** END of STEP 10 *****

  // else ***** STEP 11 (Full JSX) *****
  return (
    // Outer Layer Div
    <div
      onClick={onClose}
      className="fixed inset-0 flex items-center justify-center bg-black/50 z-40"
    >
      {/* Modal */}
      <div
        onClick={e => e.stopPropagation()}
        className="bg-white rounded-xl w-full max-w-md p-6 shadow-lg"
      >
        <h2 className="text-xl font-semibold mb-4">
          {/* Edit / Add */}
          {initialTitle ? 'Edit' : 'Add'} Todo
        </h2>

        <form
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            ref={inputRef}
            value={title}
            onChange={e => setTitle(e.target.value)}
            className="w-full border rounded px-3 py-2 mb-4 focus:outline-0 focus:ring-2 focus:ring-blue-400"
          />
          <div className="flex justify-end gap-x-4">
            {/* Close Modal Button */}
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border rounded"
            >
              Cancel
            </button>
            {/* Submit Button */}
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 rounded disabled:opacity-50 text-white"
              // disabled={!title ? true : false}
              // disabled={!title && true}
              // disabled={!title}
              disabled={!title.trim()}
            >
              {initialTitle ? 'Edit' : 'Add'} Form
            </button>
          </div>
        </form>
      </div>
      {/* END of Modal */}
    </div>
  )
}

export default ModalForm;