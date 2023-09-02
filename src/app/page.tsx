import { Session, getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/authOptions";
import Home from "./home/_page";

const Index = async () => {
  const session = (await getServerSession(authOptions)) as Session;

  return (
    <main>
      <Home user={session.user} />
    </main>
  );
};

export default Index;
