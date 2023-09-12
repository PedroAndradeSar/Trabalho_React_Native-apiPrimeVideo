import { Image, StyleSheet, TouchableOpacity } from "react-native";

export const MoviesCard = (props) => {
    console.log("props.moviesURL:", props.moviesURL);
  return (
    <TouchableOpacity>
      <Image style={styles.img} source={props.movieURL} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  img: {
    marginRight: 20,
  },
});
