export const convertFile = (file: File, setImage: React.Dispatch<React.SetStateAction<string | undefined>>) => {
  const reader = new FileReader();

  reader.onloadend = () => {
    setImage(reader.result?.toString());
  };
  reader.readAsDataURL(file);
};
