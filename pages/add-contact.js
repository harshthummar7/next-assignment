import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { ContactForm } from "@/component/ContactForm";
import { colorFunction, fetchContact, setLocalStorage } from "@/utils/helper";

export default function Addcontact() {
  const router = useRouter();
  const [contacts, setContact] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    address: "",
  });

  useEffect(() => {
    setContact(fetchContact() || []);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    let contact = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      company: formData.company,
      address: formData.address,
      color: colorFunction(),
    };
    let list = [...contacts, contact];
    setContact(list);
    setLocalStorage(JSON.stringify(list));
    router.push("/");
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  return (
    <ContactForm
      handleSubmit={handleSubmit}
      handleInputChange={handleInputChange}
      action={"add"}
    />
  );
}
