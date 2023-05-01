import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { ContactForm } from "@/component/ContactForm";
import { fetchContact, setLocalStorage } from "@/utils/helper";
import { colors } from "@/utils/constants";

var i = 0;
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

  const colorFunction = () => {
    const color = colors[i % colors.length];
    i = i + 1;
    return color;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const namePattern = /^[a-zA-Z]+ ?[a-zA-Z]+$/;
    const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
    const phonePattern = /^\d{10}$/;

    if (!namePattern.test(formData.name) || formData.name > 15) {
      alert(
        "Please enter a valid name containing only alphabets and maximum 15 length"
      );
      return;
    }

    if (!emailPattern.test(formData.email)) {
      alert("Please enter a valid email address");
      return;
    }

    if (!phonePattern.test(formData.phone)) {
      alert("Please enter a valid phone number");
      return;
    }

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
