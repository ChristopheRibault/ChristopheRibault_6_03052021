export default {
  firstname: {
    required: true,
    pattern: /^[a-zA-Z0-9]{2,20}$/,
    errorData: 'Veuillez saisir entre 2 et 20 caractères alphanumériques',
  },
  lastname: {
    required: true,
    pattern: /^[a-zA-Z0-9]{2,20}$/,
    errorData: 'Veuillez saisir entre 2 et 20 caractères alphanumériques',
  },
  email: {
    required: true,
    pattern: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
    errorData: 'Veuillez saisir un email valide',
  },
  message: {
    required: true,
    pattern: /^.{10,255}$/,
    errorData: 'Veuillez taper un message de 10 à 255 caractères',

  },
};
