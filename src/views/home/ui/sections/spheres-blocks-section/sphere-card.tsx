"use client";

import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/shared/components/ui/card";
import {SphereType} from "@/views/home/types";

const SphereCard = ({sphere}: { sphere: SphereType }) => {
  return (
    <Card className={`${sphere.color} text-white shadow-md cursor-pointer h-full`}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-lg font-semibold">{sphere.name}</CardTitle>
        <sphere.icon className="h-4 w-4"/>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-white/80 mb-2">
          {sphere.description}
        </CardDescription>
      </CardContent>
    </Card>
  );
};

export default SphereCard;