import jsonwebtoken, { JwtPayload } from "jsonwebtoken";

interface IAccessTokenPaylad extends JwtPayload {
  email: string;
}

export async function getUserWithAccessToken(accessToken: string) {
  if (!process.env.JWT_SECRET) {
    console.error("JWT_SECRET env variable not set!");
    process.exit(1);
  }

  const decoded = jsonwebtoken.verify(
    accessToken,
    process.env.JWT_SECRET
  ) as IAccessTokenPaylad;

  const email = decoded?.email;

  // const client = await initDB();
  // const userRepository = client.em.getRepository(User);
  // const user = await userRepository.findOne({ email }, { fields: ["email"] });

  // return {
  //   email: user?.email,
  // };
}
