import { View, Text, StyleSheet } from "react-native";

function MealDetails({
  duration,
  compelexity,
  affordibility,
  style,
  textStyle,
}) {
  return (
    <View style={[styles.details, style]}>
      <Text style={styles.detailsItem}>{duration}m</Text>
      <Text style={styles.detailsItem}>{compelexity}</Text>
      <Text style={styles.detailsItem}>{affordibility}</Text>
    </View>
  );
}
export default MealDetails;

const styles = StyleSheet.create({
  details: {
    flexDirection: "row",
    alignContent: "center",
    padding: 8,
    justifyContent: "center",
  },
  detailsItem: {
    flexDirection: "column",
    marginHorizontal: 4,
    fontSize: 12,
    justifyContent: "center",
    alignContent: "center",
  },
});
