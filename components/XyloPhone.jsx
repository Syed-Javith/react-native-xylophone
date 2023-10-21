import { StyleSheet, View } from "react-native"
import Box from "./Box"

const colors = [
    { index : 1 ,
    color : "red"},
    { index : 2 ,
    color : "yellow"},
    { index : 3 ,
    color : "blue" },
    { index : 4 ,
    color :"green" },
    { index : 5 ,
    color : "orange"},
    { index : 6 ,
    color : "violet" },
    { index : 7 ,
    color : "pink"}
]

export default function XyloPhone(){
    return <View style={styles.XyloPhone}>
                {
                    colors.map((color , id)=>{
                        return <Box key={id} color={color.color} index={color.index}/>
                    })
                }
            </View>
}

const styles = StyleSheet.create({
    XyloPhone : {
        justifyContent : 'center',
    }
})