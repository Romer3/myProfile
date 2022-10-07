const getAge = (dateString: string) => {
  const today = new Date();
  const birthDate = new Date(dateString);
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
};

export const about = {
  picture: '/avatar.jpg',
  description: [
    `I live in Haifa, Israel. I was born in Ukraine, 15 July 2005. I'm ${getAge(
      '2005-07-15'
    )} years old. I'm a Programmer. `,
    'Coding has been my passion and hobby since I was 13 years old, and I love computer since I was a kid.',
    'Apart from programming, I also enjoy playing tennis and walking with my friends.'
  ],
};
