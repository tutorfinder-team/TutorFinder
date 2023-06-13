import { useState } from 'react';
import Modal from '@/Components/Modal';

function CertificationModalForm({ certification, onSubmit, onClose }) {
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Validate form data
    const newErrors = {};
    if (!formData.name) {
      newErrors.name = 'Name is required';
    }
    if (!formData.issuer) {
      newErrors.issuer = 'Issuer is required';
    }
    if (!formData.date) {
      newErrors.date = 'Date is required';
    }
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    // Submit form data
    onSubmit(formData);
  };

  return (
    <Modal show onHide={onClose}>
      <div className="bg-white rounded-lg overflow-hidden shadow-xl">
        <div className="p-4 flex justify-between items-center bg-gray-100">
          <Modal.Title className="text-lg font-medium">
            {certification ? 'Edit' : 'Add'} Certification
          </Modal.Title>
          <button onClick={onClose}>
            
          </button>
        </div>
        <div className="p-4">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
                Name
              </label>
              <input
                className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                  errors.name ? 'border-red-500' : ''
                }`}
                id="name"
                type="text"
                name="name"
                placeholder="e.g. Certified Scrum Master"
                value={formData.name || ''}
                onChange={handleInputChange}
              />
              {errors.name && (
                <p className="text-red-500 text-xs italic">{errors.name}</p>
              )}
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="issuer">
                Issuer
              </label>
              <input
                className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                  errors.issuer ? 'border-red-500' : ''
                }`}
                id="issuer"
                type="text"
                name="issuer"
                placeholder="e.g. Scrum Alliance"
                value={formData.issuer || ''}
                onChange={handleInputChange}
              />
              {errors.issuer && (
                <p className="text-red-500 text-xs italic">{errors.issuer}</p>
              )}
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="date">
                Date
              </label>
              <input
                className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                  errors.date ? 'border-red-500' : ''
                }`}
                id="date"
                type="date"
                name="date"
                value={formData.date || ''}
                onChange={handleInputChange}
              />
              {errors.date && (
                <p className="text-red-500 text-xs italic">{errors.date}</p>
              )}
            </div>

            <div className="flex items-center justify-end">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                {certification ? 'Save' : 'Add'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </Modal>
  );
}
export default CertificationModalForm;