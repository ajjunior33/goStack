import { Request, Response } from "express";
import createUser from "./services/CreateUser";

export function helloWorld(request: Request, response: Response) {
  const user = createUser({
    email: "ajjunior33@gmail.com",
    password: "123",
    techs: [
      "Node.Js ",
      "React",
      "React Native",
      {
        title: "JavaScript",
        experience: 100,
      },
      {
        title: "PHP",
        experience: 2,
      },
    ],
  });

  return response.json({ messager: "Hello, world" });
}
