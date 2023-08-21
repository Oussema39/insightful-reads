import Image from "next/image";

type User =
  | {
      name?: string | null | undefined;
      email?: string | null | undefined;
      image?: string | null | undefined;
    }
  | undefined;

type HomeProps = {
  user: User;
};

const Home = ({ user }: HomeProps) => {
  const userImage = user?.image ? (
    <Image
      src={user?.image}
      width={100}
      height={100}
      alt={user?.name ?? "Profile Pic"}
      priority={true}
      style={{ display: "block" }}
    />
  ) : null;

  return (
    <div>
      <h1 style={{ display: "inline" }}>
        Welcome home {user?.name}
        {userImage}
      </h1>
    </div>
  );
};

export default Home;
