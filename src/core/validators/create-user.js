export const validateCreateUser = (values) => {
  const {
    role_id,
    name,
    last_name,
    dni,
    email,
    address,
    membership_number,
    birthdate,
  } = values;

  const errors = {};
  if (!role_id) errors.role_id = "Campo Obligatorio";
  if (!name) errors.name = "Campo Obligatorio";
  if (!last_name) errors.last_name = "Campo Obligatorio";
  if (!dni) errors.dni = "Campo Obligatorio";
  if (!address) errors.address = "Campo Obligatorio";
  if (!membership_number) errors.membership_number = "Campo Obligatorio";
  if (!birthdate) errors.birthdate = "Campo Obligatorio";
  if (!email) errors.email = "Campo Obligatorio";
  else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email))
    errors.email = "Direccion de correo invalida";

  return errors;
};
