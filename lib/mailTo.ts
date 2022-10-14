export const mailTo = (
  name: string,
  email: string,
  subject: string,
  message: string
) => {
  return `mailto:alinta.kawakami@gmail.com?subject=${subject}
  &body=Hi, my name is ${name}. ${message} (${email})`;
};
