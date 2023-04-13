import { View, StyleSheet } from "react-native";
import { MEALS } from "../data/dummy-data";
function MealsOverviewScreen(){
    return (
    <View style={styles.container}>
        <text>Meals Overview Screen</text>
        </View>
    );
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
    container: {
        flex:1,
        padding: 16
    }
});