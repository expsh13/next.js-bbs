import React from "react";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";
import { BBSData } from "@/app/types/types";

type PropsType = {
  data: BBSData;
};

export const BBSCard = ({ data }: PropsType) => {
  const { id, username, title, content } = data;
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{username}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>{content}</p>
      </CardContent>
      <CardFooter>
        <Link className="text-blue-500" href={`/bbs-posts/${id}`}>
          Read More
        </Link>
      </CardFooter>
    </Card>
  );
};
