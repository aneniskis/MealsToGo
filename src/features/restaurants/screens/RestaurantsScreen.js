import React, { useContext } from "react";
import { RestaurantInfo } from "../components/RestaurantInfo";
import { RestaurantList, Loading } from "./RestaurantScreen.styles";
import { Spacer } from "../../../components/spacer/spacerComponent";
import { SafeArea } from "../../../components/utility/SafeAreaComponent";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { Search } from "../components/SearchComponent";
import { TouchableOpacity } from "react-native";

export const RestaurantsScreen = ({ navigation }) => {
  // const restaurantContext = useContext(RestaurantsContext);
  const { isLoading, restaurants } = useContext(RestaurantsContext);
  // console.log(error);
  // console.log(restaurantContext);
  return (
    <SafeArea>
      <Search />
      {isLoading && <Loading size={"large"} color="#D0421B" />}
      {!isLoading && (
        <RestaurantList
          data={restaurants}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("RestaurantDetail", { restaurant: item })
              }
            >
              <Spacer position="bottom" size="large">
                <RestaurantInfo restaurant={item} />
              </Spacer>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.name}
        />
      )}
    </SafeArea>
  );
};
