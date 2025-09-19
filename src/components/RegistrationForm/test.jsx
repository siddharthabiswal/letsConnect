{/* Services Modal */}
<Modal
  isOpen={showServiceModal}
  onClose={() => setShowServiceModal(false)}
  title="Select Services"
>
  <ul className="modalList">
    {services.map((service, index) => (
      <li key={index} className="modalListItem">
        <label>
          <input
            type="checkbox"
            checked={userForm.userServices.includes(service)}
            onChange={() => handleServiceToggle(service)}
          />
          {service}
        </label>
      </li>
    ))}
  </ul>
  <button onClick={() => setShowServiceModal(false)}>Done</button>
</Modal>

{/* Localities Modal */}
<Modal
  isOpen={showLocalityModal}
  onClose={() => setShowLocalityModal(false)}
  title="Select Localities"
>
  <ul className="modalList">
    {localities.map((loc, index) => (
      <li key={index} className="modalListItem">
        <label>
          <input
            type="checkbox"
            checked={userForm.userLocality.includes(loc)}
            onChange={() => handleLocalityToggle(loc)}
          />
          {loc}
        </label>
      </li>
    ))}
  </ul>
  <button onClick={() => setShowLocalityModal(false)}>Done</button>
</Modal>
