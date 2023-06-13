// import { TbCertificate } from "react-icons/all";
// import CardLayout from "./CardLayout";


// function Certifications() {
//     return (
//         <CardLayout cardName="Certifications" Icon={TbCertificate} isFile>
//             <h1 className="opacity-[0.5]"> No Certifications uploaded yet.</h1>
//         </CardLayout>
//     );
// }

// export default Certifications;
import { useState } from 'react';
import axios from 'axios';
import { TbCertificate } from 'react-icons/all';
import CardLayout from './CardLayout';
import CertificationModalForm from './CertificationForm';

function Certifications() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCertification, setSelectedCertification] = useState(null);

  const handleCardClick = (certification) => {
    setSelectedCertification(certification);
    setIsModalOpen(true);
  };

  const handleFormSubmit = (formData) => {
    // Send AJAX request to Laravel backend to process form data
    axios.post('/certifications', formData)
      .then(() => {
        // If form submission is successful, close modal and update UI
        setIsModalOpen(false);
        // TODO: Update UI to reflect new certification
      })
      .catch((error) => {
        // If there is an error, log it to the console
        console.error(error);
      });
  };

  return (
    <>
      <CardLayout
        cardName="Certifications"
        Icon={TbCertificate}
        onClick={() => handleCardClick(certification)}
      >
        <h1 className="opacity-[0.5]"> No Certifications uploaded yet.</h1>
      </CardLayout>

      {isModalOpen && (
        <CertificationModalForm
          certification={selectedCertification}
          onSubmit={handleFormSubmit}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </>
  );
}

export default Certifications;


