import { useFormik } from "formik";
import React from "react";

const YoutubeForm = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      channel: "",
    },
  });

  return (
    <div>
      <form /*method="GET"*/>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          onChange={formik.handleChange}
          value={formik.values.name}
        />
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          name="email"
          // onChange={(e) => formik.handleChange("email")(e?.target?.value)}
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        <label htmlFor="channel">Channel</label>
        <input
          type="text"
          id="channel"
          name="channel"
          onChange={formik.handleChange}
          value={formik.values.channel}
        />

        <button>Submit</button>
      </form>
    </div>
  );
};

export default YoutubeForm;