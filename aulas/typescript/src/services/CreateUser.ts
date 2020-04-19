/**
Para Criar : name, email e password
*/

interface TechObjects{
    title: String,
    experience: number
}

interface CreateUserData {
  name?: String;
  email: string;
  password: string;
  techs: Array<String | TechObjects>;
}
export default function createUser({ name = "", email, password }: CreateUserData) {
  const user = {
    name,
    email,
    password,
  };
  return user;
}
