import SignIn from "./(auth)/signin/page";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/authOptions";
import Home from "./home/page";

const Index = async () => {
  const session = await getServerSession(authOptions);

  return <main>{session ? <Home user={session.user} /> : <SignIn />}</main>;
};

export default Index;
