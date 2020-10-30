import React from "react";
import {TouchableOpacity,View,Text,StyleSheet} from "react-native";
import COLORS from "../../constants/colors";
import FONTS from "../../constants/fonts";


const Button=({children})=>{
	return (
		<TouchableOpacity style={styles.btnContainer}>
			<View style={styles.btn}>
				<Text style={styles.btnText}>{children}</Text>
			</View>
		</TouchableOpacity>
	)
}

const styles=StyleSheet.create({
	btnContainer:{
		marginVertical:10,
		backgroundColor:COLORS.black,
		width:"80%",
	},
	btn:{
		paddingVertical:10,
		paddingHorizontal:10,
		alignItems:"center",
	},
	btnText:{
		color:COLORS.white,
		fontFamily:FONTS.SpaceMonoBold,
		fontSize:16,
		textTransform:"uppercase",
		textAlign:"center"
	}
});

export default Button;