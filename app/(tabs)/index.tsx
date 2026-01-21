import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
      {/*<Link href='/login'style={styles.button} >Login Screen</Link>*/}
    </View>
  );
}

// Entry point of the App. It will execute when the Server/App is started.
// The View is the div tag in normal html or react projects
// The Text is the p tag in normal html or react projects
// The index is the main screen in the app/project. But other screens can created as well.
// In React Native we have a file based Routing.
// All the Files/ Screens created in the app folder will be binded together by the Layout file present in the app folder.





//There are different ways to apply styling. 
// It could be the usual inline styling using the style attribute like shown above for the View Component.
// Or we can use the stylesheet from react-native like shown below.
const styles = StyleSheet.create({
 button: {
        width:100, height:20, backgroundColor:'lightblue', textAlign:'center', marginTop:20, textAlignVertical:'center', borderRadius:5
      }
});