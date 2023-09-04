import Link from "next/link";
import React from "react";

const ArticleNotFound = () => {
  return (
    <div>
      Article not found <Link href="/">back home {"->"}</Link>
    </div>
  );
};

export default ArticleNotFound;
