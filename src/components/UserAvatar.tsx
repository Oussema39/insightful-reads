"use client";
import { Avatar } from "@mui/material";
import { useSession } from "next-auth/react";
import React from "react";

type UserAvatarProps = {
  withBorders?: boolean;
  borderColor?: "string";
  height?: number;
  width?: number;
};

const UserAvatar = ({ height, width }: UserAvatarProps) => {
  const { data } = useSession();
  return (
    <Avatar
      sx={{ height, width }}
      sizes="sm"
      src={data?.user?.image || ""}
      alt="user-avatar"
    >
      {!data?.user?.image && data?.user?.name?.at(0)}
    </Avatar>
  );
};

export default UserAvatar;
