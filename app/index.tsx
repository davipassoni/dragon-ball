import { router } from "expo-router"
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"

export default function incial() {

    return (
        <>
            <View style={s.wrapInicial}>
                <Text style={s.titulo}>Comsumo da api do Dragon ball</Text>
            </View>
            <View style={s.wrapInicial}>
                <Image style={s.img} source={require('@/assets/android-icon-192x192.webp')}
                    alt="logo" />
            </View>

            <View style={s.wrapInicial}>
                <TouchableOpacity style={s.btn} onPress={()=>{
                    router.push("/list")
                }}>
                    <Text style={s.btnText}>Visitar personagens</Text>
                </TouchableOpacity>
            </View>
        </>

    )
}


const s = StyleSheet.create({
    wrapInicial: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'

    },
    titulo: {
        fontSize: 32,
        fontWeight: 'bold',
        alignSelf: 'center',
        textAlign: 'center',
        textShadowColor: '#e37e0abf',
        textShadowOffset: { width: 0, height: 2 },
        textShadowRadius: 10,
        color: "black"

    },
    img: {
        width: '90%',
        height: 300
    },
    btn: {
        backgroundColor: '#2168c5',
        paddingHorizontal: 30,
        paddingVertical: 10,
        borderRadius: 999,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,


    },
    btnText: {
        color: '#fff',
        fontSize: 22

    }
})