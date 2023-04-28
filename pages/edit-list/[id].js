import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { ContactForm } from "@/component/ContactForm";
import { fetchContact, setLocalStorage } from "@/utils/helper";

export default function Editlist() {
  const router = useRouter();
  const { id } = router.query;
  const [value, setValue] = useState({});
  const [data, setData] = useState([]);

  const newEditedValue = (newContact) => {
    setLocalStorage(
      JSON.stringify([...data.slice(0, id), newContact, ...data.slice(id + 1)])
    );
    router.push("/");
  };

  useEffect(() => {
    const data1 = fetchContact();
    if (data1 && data1[id]) {
      setValue(data1[id]);
      const { name, email, phone, company, address, color } = data1[id];
      setFormData({ name, email, phone, company, address, color });
      setData(data1);
    }
  }, [id]);
  ///////////////////////////////////////////

  const [formData, setFormData] = useState({
    name: value.name,
    email: value.email,
    phone: value.phone,
    company: value.company,
    address: value.address,
    color: value.color,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    newEditedValue(formData);
  };
  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <div>
      {value && (
        <ContactForm
          handleSubmit={handleSubmit}
          handleInputChange={handleInputChange}
          action={formData}
        />
      )}
    </div>
  );
}
