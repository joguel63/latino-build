import React from "react";
import { Field } from "formik";
import { roles } from "core/utils";
export const CreateUser = (props) => {
  const { values, errors, touched, handleChange, handleBlur, isEdit } = props;

  console.log(values);
  return (
    <>
      <div>
        <Field
          type="text"
          placeholder="Nombres"
          className="form-control"
          autoComplete="name"
          name="name"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.name}
          required
        />
        {errors.name && touched.name && errors.name}
      </div>
      <div>
        <Field
          type="text"
          className="form-control"
          placeholder="Apellidos"
          autoComplete="last_name"
          name="last_name"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.last_name}
          required
        />
        {errors.last_name && touched.last_name && errors.last_name}
      </div>
      <div>
        <Field
          type="text"
          placeholder="Numero de cedula"
          className="form-control"
          autoComplete="dni"
          name="dni"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.dni}
          required
        />
        {errors.dni && touched.dni && errors.dni}
      </div>
      <div>
        <Field
          type="text"
          className="form-control"
          placeholder="Numero de membresia"
          autoComplete="current-password"
          name="membership_number"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.membership_number}
          required
        />
        {errors.membership_number &&
          touched.membership_number &&
          errors.membership_number}
      </div>
      <div>
        <Field
          type="email"
          placeholder="Correo Electronico"
          className="form-control"
          autoComplete="email"
          name="email"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.email}
          required
        />
        {errors.email && touched.email && errors.email}
      </div>
      <div>
        <Field
          type="text"
          className="form-control"
          placeholder="Dirección"
          autoComplete="address"
          name="address"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.address}
          required
        />
        {errors.address && touched.address && errors.address}
      </div>
      <div>
        <Field
          type="date"
          className="form-control"
          placeholder="Fecha de nacimiento"
          autoComplete="birthdate"
          name="birthdate"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.birthdate}
          required
        />
        {errors.birthdate && touched.birthdate && errors.birthdate}
      </div>
      {isEdit && (
        <div>
          <Field
            type="password"
            className="form-control"
            placeholder="Contraseña"
            autoComplete="password"
            name="password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
            required
          />
          {errors.password && touched.password && errors.password}
        </div>
      )}
      <div>
        <select
          type="select"
          className="form-control"
          name="role_id"
          placeholder="Rol de usuario"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.role_id}
        >
          <option value={roles.user}>Usuario</option>
          <option value={roles.admin}>Administrador</option>
        </select>
        {errors.role_id && touched.role_id && errors.role_id}
      </div>
    </>
  );
};
