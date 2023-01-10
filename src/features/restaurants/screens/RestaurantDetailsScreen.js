import React from "react";

import { RestaurantInfo } from "../components/RestaurantInfo";
import { SafeArea } from "../../../components/utility/SafeAreaComponent";

export const RestaurantDetailsScreen = ({ route }) => {
  const { restaurant } = route.params;
  return (
    <SafeArea>
      <RestaurantInfo restaurant={restaurant} />
    </SafeArea>
  );
};
