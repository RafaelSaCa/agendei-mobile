import { COLORS, FONT_SIZE } from "../../constants/theme.js";

export const styles = {
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    marginTop: 80,
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: "space-between",
    marginBottom: 80
  },

  textHour:{
    fontSize: FONT_SIZE.lg,
    fontWeight: "bold",
    color: COLORS.gray2,
    marginTop: 50,
    marginLeft: 15

  },

  theme:{
    todayTextColor: COLORS.red,
    selectedDayBackgroundColor: COLORS.blue,
    selectedDayTextColor: COLORS.white,
    arrowColor: COLORS.blue
  }
};
