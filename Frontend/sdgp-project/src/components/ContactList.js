import React from 'react';
import Contact from './Contact';
import './ContactList.css'; // Ensure this file exists for styling

const ContactList = ({ data, currentPage, getAllContacts, totalPages }) => {
  return (
    <main className='main'>
      {data.length === 0 && <div>No Contacts. Please add a new contact</div>}
      <ul className='contact_list'>
        {data.length > 0 &&
          data.map(contact => (
            <Contact contact={contact} key={contact.id} /> // Pass full contact object
          ))}
      </ul>

      {/* Check if totalPages is greater than 1 */}
      {data.length > 0 && totalPages > 1 && (
        <div className='pagination'>
          <a onClick={() => getAllContacts(currentPage - 1)} className={currentPage === 0 ? 'disabled' : ''}>&laquo;</a>
          {[...Array(totalPages).keys()].map((page) => (
            <a onClick={() => getAllContacts(page)} className={currentPage === page ? 'active' : ''} key={page}>
              {page + 1}
            </a>
          ))}
          <a onClick={() => getAllContacts(currentPage + 1)} className={currentPage + 1 === totalPages ? 'disabled' : ''}>&raquo;</a>
        </div>
      )}
    </main>
  );
};

export default ContactList;