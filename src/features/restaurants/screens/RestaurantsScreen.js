import React from "react";
import { Searchbar } from "react-native-paper";
import { RestaurantInfo } from "../components/RestaurantInfo";
import { RestaurantSearch, RestaurantList } from "./RestaurantScreen.styles";
import { Spacer } from "../../../components/spacer/spacerComponent";
import { SafeArea } from "../../../components/utility/SafeAreaComponent";

export const RestaurantsScreen = () => (
  <SafeArea>
    <RestaurantSearch>
      <Searchbar />
    </RestaurantSearch>
    <RestaurantList
      data={[
        { name: 1 },
        { name: 2 },
        { name: 3 },
        { name: 4 },
        { name: 5 },
        { name: 6 },
        { name: 7 },
        { name: 8 },
        { name: 9 },
        { name: 10 },
        { name: 11 },
        { name: 12 },
        { name: 13 },
        { name: 14 },
      ]}
      renderItem={() => (
        <Spacer position="bottom" size="large">
          <RestaurantInfo />
        </Spacer>
      )}
      keyExtractor={(item) => item.name}
      // contentContainerStyle={{ padding: 16 }}
    />
  </SafeArea>
);