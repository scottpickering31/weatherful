import { createSelector } from "reselect";

const selectShowSettings = (state) => state.showSettings.showSettings;
const selectUserData = (state) => state.userData.userData;
const selectTimeFrame = (state) => state.timeFrame.activeTimeFrame;

export const makeSelectShowSettings = () =>
  createSelector([selectShowSettings], (showSettings) => showSettings);

export const makeSelectUserData = () =>
  createSelector([selectUserData], (userData) => userData);

export const makeSelectTimeFrame = () =>
  createSelector([selectTimeFrame], (activeTimeFrame) => activeTimeFrame);
