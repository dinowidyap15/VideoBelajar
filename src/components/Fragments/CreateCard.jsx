import React, { useState, useEffect, useRef } from "react";
import Button from "../Elements/Button";
import InputForm from "../Elements/Input";

const CreateCardPage = ({ addCard, editCard, updateCard, cancelEdit }) => {
  const initialFormState = {
    id: "",
    thumbnail: "",
    title: "",
    description: "",
    avatar: "",
    name: "",
    role: "",
    company: "",
    price: "",
    category: "",
  };

  const [formData, setFormData] = useState(initialFormState);
  const [error, setError] = useState("");
  const formRef = useRef(null);

  useEffect(() => {
    if (editCard) {
      setFormData(editCard);
      formRef.current?.scrollIntoView({ behavior: "smooth" });
    } else {
      setFormData(initialFormState);
    }
  }, [editCard]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const requiredFields = ["title", "description", "name", "role", "company", "price", "category"];
    const isFormValid = requiredFields.every((field) => formData[field]?.trim());

    if (!isFormValid) {
      setError("Harap isi semua kolom yang diperlukan!");
      return;
    }

    if (editCard) {
      updateCard(formData);
    } else {
      const cardWithId = { ...formData, id: Date.now() };
      addCard(cardWithId);
    }

    setFormData(initialFormState);
    setError("");
  };

  const handleCancel = (e) => {
    e.preventDefault();
    e.stopPropagation();
    editCard ? cancelEdit() : setFormData(initialFormState);
  };

  return (
    <section id="addcard" ref={formRef} className="flex max-w-full justify-center mx-auto xl:pt-16 lg:pt-14 md:pt-12 pt-8 xl:px-32 lg:px-20 md:px-16 px-6 gap-8 bg-bg-main">
      <div className="relative w-full h-auto max-w-xl bg-white rounded-xl sm:p-7 p-4 border border-bg-border">
        <h3 className="flex justify-center font-poppins font-semibold text-lg mb-4">{editCard ? "Edit Kelas" : "Tambah Kelas Baru"}</h3>

        <form onSubmit={handleSubmit}>
          {["title", "description", "thumbnail", "avatar", "name", "role", "company", "price"].map((field) => (
            <div key={field} className="mb-2">
              <InputForm
                label={field}
                id={field}
                type="text"
                value={formData[field]}
                onChange={(e) => setFormData({ ...formData, [field]: e.target.value })}
                className="mt-1 w-full h-10 px-4 border border-bg-border rounded-lg text-dark-1 
                focus:outline-none focus:ring-1 focus:ring-gr-300"
              />
            </div>
          ))}
          <div>
            <label htmlFor="category" className="flex items-center gap-1 font-lato font-regular text-dark-2 sm:text-md text-sm">
              category <span className="font-poppins text-red-500">*</span>
            </label>
            <select
              id="category"
              value={formData.category}
              onChange={(e) => setFormData({ ...formData, category: e.target.value })}
              className="mb-2 font-lato !sm:text-md w-full mt-2 h-12 px-4 border border-bg-border rounded-lg text-dark-1 focus:outline-none focus:ring-1 focus:ring-gr-300 appearance-none"
            >
              <option value="">Pilih Kategori</option>
              <option value="Digital & Teknologi">Digital & Teknologi</option>
              <option value="Pemasaran">Pemasaran</option>
              <option value="Desain">Desain</option>
              <option value="Pengembangan Diri">Pengembangan Diri</option>
              <option value="Bisnis">Bisnis</option>
            </select>
          </div>

          {error && <p className="text-tertiary-400 text-start my-2">{error}</p>}

          <div className="flex justify-between gap-4 mt-4">
            <Button 
              variant="primary" 
              onClick={handleCancel} 
              btn={3} 
              type="button"
            >
              Batal
            </Button>
            <Button 
              variant="primary" 
              btn={1} 
              type="submit"
            >
              {editCard ? "Update Kelas" : "Tambah Kelas"}
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default CreateCardPage;