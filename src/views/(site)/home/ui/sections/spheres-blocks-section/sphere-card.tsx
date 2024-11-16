"use client";

import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/shared/components/ui/card";
import {SphereType} from "../../../types";

const SphereCard = ({sphere}: { sphere: SphereType }) => {
  return (
    <Card className={"text-text-light shadow-md border cursor-pointer h-full"}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-lg font-semibold text-text-orange">{sphere.name}</CardTitle>
        <sphere.icon className="text-text-blue h-6 w-6"/>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-text-gray/80 mb-2">
          {sphere.description}
        </CardDescription>
      </CardContent>
    </Card>
  );
};

export default SphereCard;