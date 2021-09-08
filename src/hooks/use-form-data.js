import { useState } from "react";

const useFormData = () => {
  const [formData, setFormData] = useState(null);

  const setData = (data) => {
    setFormData((prevState) => {
      return {
        ...prevState,
        ...data,
      };
    });
  };

  return [formData, setData];
};

export default useFormData;
