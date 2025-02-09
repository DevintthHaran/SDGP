import React, { useState, useEffect, useRef } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header";
import ContactList from "./components/ContactList";
import "./App1.css";

// Mock API function to save contact (replace with actual API call)
const saveContact = async (contactData) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ data: { ...contactData, id: Date.now() } });
    }, 1000);
  });
};

function App() {
  // Define state for contacts
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [preview, setPreview] = useState(null); // Profile picture preview

  const [values, setValues] = useState({
    name: "",
    email: "",
    title: "",
    phone: "",
    address: "",
    status: "",
  });
  const [file, setFile] = useState(null);
  const modalRef = useRef(null);
  const fileRef = useRef(null);

  // Fetch contacts
  const getAllContacts = async (page = 1, size = 10) => {
    try {
      console.log("Fetching contacts...");
      setCurrentPage(page);
      // Simulate fetching data (Replace with API call)
      setData([{ id: 1, name: "John Doe", email: "john@example.com" }]);
    } catch (error) {
      console.error("Error fetching contacts:", error);
    }
  };

  // Open/close modal
  const toggleModal = (show) => {
    if (modalRef.current) {
      if (show) {
        modalRef.current.showModal();
      } else {
        modalRef.current.close();
      }
    }
  };

  // Handle input change
  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  // Handle file change and show preview
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);

    // Generate preview URL
    if (selectedFile) {
      const objectURL = URL.createObjectURL(selectedFile);
      setPreview(objectURL);
    }
  };
  const handleNewContact = async (event) => {
    event.preventDefault();
    try {
      const newContact = { 
        ...values, 
        profilePhoto: preview // Save the preview URL instead of file
      };
      const { data: savedContact } = await saveContact(newContact);
  
      // Update contact list with new entry
      setData((prevData) => [...prevData, savedContact]);
  
      console.log("Saved Contact:", savedContact);
      toggleModal(false);
      setValues({
        name: "",
        email: "",
        title: "",
        phone: "",
        address: "",
        status: "",
      });
      setFile(null);
      setPreview(null); // Reset preview
      fileRef.current.value = ""; // Reset file input
    } catch (error) {
      console.log("Error saving contact:", error);
    }
  };
  

  

  useEffect(() => {
    getAllContacts();
  }, []);

  return (
    <>
      <Header toggleModal={toggleModal} nbOfContacts={data.length} />
      <main className="main">
        <div className="container">
          <Routes>
            <Route path="/" element={<Navigate to="/contacts" />} />
            <Route
              path="/contacts"
              element={<ContactList data={data} currentPage={currentPage} getAllContacts={getAllContacts} />}
            />
          </Routes>
        </div>
      </main>

      {/* Modal */}
      <dialog ref={modalRef} className="modal">
        <div className="modal__header">
          <h3>New Contact</h3>
          <i onClick={() => toggleModal(false)} className="bi bi-x-lg"></i>
        </div>
        <div className="divider"></div>
        <div className="modal__body">
          <form onSubmit={handleNewContact}>
            <div className="user-details">
              {["name", "email", "title", "phone", "address", "status"].map((field) => (
                <div className="input-box" key={field}>
                  <span className="details">{field.charAt(0).toUpperCase() + field.slice(1)}</span>
                  <input type="text" name={field} value={values[field]} onChange={onChange} required />
                </div>
              ))}
              <div className="file-input">
                <span className="details">Profile Photo</span>
                <input type="file" onChange={handleFileChange} ref={fileRef} accept="image/*" required />
              </div>

              {/* Profile picture preview */}
              {preview && (
                <div className="preview-container">
                  <img src={preview} alt="Profile Preview" className="profile-preview" />
                </div>
              )}
            </div>
            <div className="form_footer">
              <button type="button" className="btn btn-danger" onClick={() => toggleModal(false)}>
                Cancel
              </button>
              <button type="submit" className="btn">
                Save
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </>
  );
}

export default App;