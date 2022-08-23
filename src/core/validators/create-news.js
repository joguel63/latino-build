export const ValidateCreateNews = (newsForm, isEdit) => {
  const validations = [
    !!newsForm.title,
    !!newsForm.description,
    !!newsForm.body,
  ];
  if (!isEdit) validations.push(!!newsForm.picture);
  if (!validations.every((valid) => valid))
    return "Todos los campos son obligatorios y todas las secciones deben tener un parrafo";
  else return undefined;
};
