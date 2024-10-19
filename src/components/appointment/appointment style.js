import { COLORS, FONT_SIZE } from "../../constants/theme.js";

export const styles = {
  appointment: {
    flex: 1,
    backgroundColor: COLORS.white,
    padding: 12,
    borderWidth: 1,
    borderColor: COLORS.gray4,
  },

  name: {
    fontSize: FONT_SIZE.md,
    color: COLORS.gray1,
    marginTop: 5,
  },

  specialty: {
    fontSize: FONT_SIZE.sm,
    color: COLORS.gray3,
  },

  icon: {
    width: 25,
    height: 25,
    marginRight: 5,
  },

  bookingDate: {
    fontSize: FONT_SIZE.sm,
    color: COLORS.gray3,
    marginTop: 5,
  },

  bookingHour: {
    fontSize: FONT_SIZE.sm,
    color: COLORS.gray3,
    marginTop: 5,
  },

  booking: {
    flexDirection: "row",
  },

  containerBooking: {
    flex: 1,
  },

  containerButton: {
    marginTop: 5
  },

  container: {
    flexDirection: "row",
  },
};