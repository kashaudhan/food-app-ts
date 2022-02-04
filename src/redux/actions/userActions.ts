import axios from "axios";
import { LocationGeocodedAddress } from "expo-location";
import { Dispatch } from "react";

export interface UpdateLocationAction {
  readonly type: "ON_UPDATE_LOCATION";
  payload: LocationGeocodedAddress;
}

export interface UpdateErrorAction {
  readonly type: "ON_USER_ERROR";
  payload: any;
}

export type UserAction = UpdateLocationAction | UpdateErrorAction;

// User Actions trigger from Components

export const onUpdateLocation = (location: LocationGeocodedAddress) => {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      // save our location in local storage
      dispatch({
        type: "ON_UPDATE_LOCATION",
        payload: location,
      });
    } catch (error) {
      dispatch({
        type: "ON_USER_ERROR",
        payload: error,
      });
    }
  };
};
