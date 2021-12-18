import React from "react";
import {
    SafeAreaView,
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    FlatList
} from "react-native";

import { icons, images, SIZES, COLORS, FONTS } from '../constants'

const Home = ({ navigation }) => {

    // Dummy Datas

    const initialCurrentLocation = {
        streetName: "Bab-Ezouar",
        gps: {
            latitude: 1.5496614931250685,
            longitude: 110.36381866919922
        }
    }

    const categoryData = [
        {
            id: 1,
            name: "Slim Orange ",
            icon: icons.rice_bowl,
        },
        {
            id: 2,
            name: "Slim Citron",
            icon: icons.noodle,
        },
        {
            id: 3,
            name: "Slim Ananas",
            icon: icons.hotdog,
        },
        {
            id: 4,
            name: "Slim Pomme",
            icon: icons.salad,
        },
        {
            id: 5,
            name: "Slim Fraise ",
            icon: icons.hamburger,
        },
        {
            id: 6,
            name: "Selecto",
            icon: icons.pizza,
        },
        {
            id: 7,
            name: "Gazouz Blanche",
            icon: icons.fries,
        },
        {
            id: 8,
            name: "Sitop Menthe",
            icon: icons.sushi,
        },
        {
            id: 9,
            name: "Sirop Grenadine",
            icon: icons.donut,
        },
        {
            id: 10,
            name: "Jus Orange",
            icon: icons.drink,
        },

    ]

    // price rating
    const affordable = 1
    const fairPrice = 2
    const expensive = 3

    const restaurantData = [
        {
            id: 1,
            name: "Distrubuteur Rouiba Centre",
            rating: 4.8,
            categories: [5, 7],
            priceRating: affordable,
            photo: images.burger_restaurant_1,
            duration: "30 - 45 Packs",
            location: {
                latitude: 1.5347282806345879,
                longitude: 110.35632207358996,
            },
            courier: {
                avatar: images.avatar_1,
                name: "Amy"
            },
            menu: [
                {
                    menuId: 1,
                    name: "Selecto",
                    photo: images.crispy_chicken_burger,
                    description: "La start de l'équipe Hamoud",
                    calories: 200,
                    price: 10
                },
                {
                    menuId: 2,
                    name: "Selecto Lite",
                    photo: images.honey_mustard_chicken_burger,
                    description: "Moins de sucre pour une bonne santé",
                    calories: 250,
                    price: 15
                },
                {
                    menuId: 3,
                    name: "Slim Pomme",
                    photo: images.baked_fries,
                    description: "Nafhatlek f hamoud tafah",
                    calories: 194,
                    price: 8
                }
            ]
        },
        {
            id: 2,
            name: "Distributeur Rghaya Ville",
            rating: 4.8,
            categories: [2, 4, 6],
            priceRating: expensive,
            photo: images.pizza_restaurant,
            duration: "15 - 20 Packs",
            location: {
                latitude: 1.556306570595712,
                longitude: 110.35504616746915,
            },
            courier: {
                avatar: images.avatar_2,
                name: "Mourad"
            },
            menu: [
                {
                    menuId: 4,
                    name: "Sirop Menth",
                    photo: images.hawaiian_pizza,
                    description: "Healthy edition",
                    calories: 250,
                    price: 15
                },
                {
                    menuId: 5,
                    name: "Sirop Grenadine",
                    photo: images.pizza,
                    description: "Fraicheur tropical",
                    calories: 250,
                    price: 20
                },
                {
                    menuId: 6,
                    name: "Sirop Citron",
                    photo: images.tomato_pasta,
                    description: "Rajoutez de l'eau et goutez la fraicheur du citron",
                    calories: 100,
                    price: 10
                },
                {
                    menuId: 7,
                    name: "Cola",
                    photo: images.honey_mustard_chicken_burger,
                    description: "Coca cola est Algerienne",
                    calories: 100,
                    price: 10
                }
            ]
        },
        {
            id: 3,
            name: "Distributeur Bab ezzouar",
            rating: 4.8,
            categories: [3],
            priceRating: expensive,
            photo: images.hot_dog_restaurant,
            duration: "20 - 25 Packs",
            location: {
                latitude: 1.5238753474714375,
                longitude: 110.34261833833622,
            },
            courier: {
                avatar: images.avatar_3,
                name: "Khaled"
            },
            menu: [
                {
                    menuId: 8,
                    name: "Slim Fraise",
                    photo: images.tomato_pasta,
                    description: "Des fraises Bio",
                    calories: 100,
                    price: 20
                }
            ]
        },
        {
            id: 4,
            name: "Distributeur Bordj El-kiffan",
            rating: 4.8,
            categories: [8],
            priceRating: expensive,
            photo: images.japanese_restaurant,
            duration: "10 - 15 Packs",
            location: {
                latitude: 1.5578068150528928,
                longitude: 110.35482523764315,
            },
            courier: {
                avatar: images.avatar_4,
                name: "Ahmad"
            },
            menu: [
                {
                    menuId: 9,
                    name: "Jus Orange",
                    photo: images.crispy_chicken_burger,
                    description: "Fraicheur de l'orange",
                    calories: 100,
                    price: 50
                }
            ]
        },
        {
            id: 5,
            name: "Distributeur Baba Hssan",
            rating: 4.8,
            categories: [1, 2],
            priceRating: affordable,
            photo: images.noodle_shop,
            duration: "15 - 20 Packs",
            location: {
                latitude: 1.558050496260768,
                longitude: 110.34743759630511,
            },
            courier: {
                avatar: images.avatar_4,
                name: "Youcef"
            },
            menu: [
                {
                    menuId: 10,
                    name: "Sirop Menth",
                    photo: images.baked_fries,
                    description: "Menth nature",
                    calories: 200,
                    price: 5
                },
                {
                    menuId: 11,
                    name: "Slim Orange",
                    photo: images.hawaiian_pizza,
                    description: "Soda Orange ",
                    calories: 300,
                    price: 8
                },
                {
                    menuId: 12,
                    name: "Gazouz blanche",
                    photo: images.japanese_restaurant,
                    description: "La beauté de la table",
                    calories: 300,
                    price: 8
                },
                {
                    menuId: 13,
                    name: "Selecto",
                    photo: images.honey_mustard_chicken_burger,
                    description: "L'africaine",
                    calories: 300,
                    price: 8
                },

            ]
        },
        {

            id: 6,
            name: "Distributeurs Harrach",
            rating: 4.9,
            categories: [9, 10],
            priceRating: affordable,
            photo: images.kek_lapis_shop,
            duration: "35 - 40 Packs",
            location: {
                latitude: 1.5573478487252896,
                longitude: 110.35568783282145,
            },
            courier: {
                avatar: images.avatar_1,
                name: "Said"
            },
            menu: [
                {
                    menuId: 12,
                    name: "selecto",
                    photo: images.honey_mustard_chicken_burger,
                    description: "l'africaine",
                    calories: 100,
                    price: 2
                },
                {
                    menuId: 13,
                    name: "Sirop Menth",
                    photo: images.japanese_restaurant,
                    description: "healthy mode",
                    calories: 100,
                    price: 3
                },
                {
                    menuId: 14,
                    name: "Gazouz la blanche",
                    photo: images.tomato_pasta,
                    description: "La start de la table",
                    calories: 300,
                    price: 20
                }
            ]

        }


    ]

    const [categories, setCategories] = React.useState(categoryData)
    const [selectedCategory, setSelectedCategory] = React.useState(null)
    const [Stock, setRestaurants] = React.useState(restaurantData)
    const [currentLocation, setCurrentLocation] = React.useState(initialCurrentLocation)


    function onSelectCategory(category) {
        //filter restaurant
        let restaurantList = restaurantData.filter(a => a.categories.includes(category.id))

        setRestaurants(restaurantList)

        setSelectedCategory(category)
    }

    function getCategoryNameById(id) {
        let category = categories.filter(a => a.id == id)

        if (category.length > 0)
            return category[0].name

        return ""
    }

    function renderHeader() {
        return (
            <View style={{ flexDirection: 'row', height: 50 }}>
                <TouchableOpacity
                    style={{
                        width: 50,
                        paddingLeft: SIZES.padding * 2,
                        justifyContent: 'center'
                    }}
                >
                    <Image
                        source={icons.nearby}
                        resizeMode="contain"
                        style={{
                            width: 30,
                            height: 30
                        }}
                    />
                </TouchableOpacity>

                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <View
                        style={{
                            width: '70%',
                            height: "100%",
                            backgroundColor: COLORS.lightGray3,
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: SIZES.radius
                        }}
                    >
                        <Text style={{ ...FONTS.h3 }}>{currentLocation.streetName}</Text>
                    </View>
                </View>

                <TouchableOpacity
                    style={{
                        width: 50,
                        paddingRight: SIZES.padding * 2,
                        justifyContent: 'center'
                    }}
                >
                    <Image
                        source={icons.basket}
                        resizeMode="contain"
                        style={{
                            width: 30,
                            height: 30
                        }}
                    />
                </TouchableOpacity>
            </View>
        )
    }

    function renderMainCategories() {
        const renderItem = ({ item }) => {
            return (
                <TouchableOpacity
                    style={{
                        padding: SIZES.padding,
                        paddingBottom: SIZES.padding * 2,
                        backgroundColor: (selectedCategory?.id == item.id) ? COLORS.primary : COLORS.white,
                        borderRadius: SIZES.radius,
                        alignItems: "center",
                        justifyContent: "center",
                        marginRight: SIZES.padding,
                        ...styles.shadow
                    }}
                    onPress={() => onSelectCategory(item)}
                >
                    <View
                        style={{
                            width: 50,
                            height: 50,
                            borderRadius: 25,
                            alignItems: "center",
                            justifyContent: "center",
                            backgroundColor: (selectedCategory?.id == item.id) ? COLORS.white : COLORS.lightGray
                        }}
                    >
                        <Image
                            source={item.icon}
                            resizeMode="contain"
                            style={{
                                width: 30,
                                height: 30
                            }}
                        />
                    </View>

                    <Text
                        style={{
                            marginTop: SIZES.padding,
                            color: (selectedCategory?.id == item.id) ? COLORS.white : COLORS.black,
                            ...FONTS.body5
                        }}
                    >
                        {item.name}
                    </Text>
                </TouchableOpacity>
            )
        }

        return (
            <View style={{ padding: SIZES.padding * 2 }}>
                <Text style={{ ...FONTS.h1 }}>Main</Text>
                <Text style={{ ...FONTS.h1 }}>Categories</Text>

                <FlatList
                    data={categories}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={item => `${item.id}`}
                    renderItem={renderItem}
                    contentContainerStyle={{ paddingVertical: SIZES.padding * 2 }}
                />
            </View>
        )
    }

    function renderRestaurantList() {
        const renderItem = ({ item }) => (
            <TouchableOpacity
                style={{ marginBottom: SIZES.padding * 2 }}
                onPress={() => navigation.navigate("Stock", {
                    item,
                    currentLocation
                })}
            >
                {/* Image */}
                <View
                    style={{
                        marginBottom: SIZES.padding
                    }}
                >
                    <Image
                        source={item.photo}
                        resizeMode="cover"
                        style={{
                            width: "100%",
                            height: 200,
                            borderRadius: SIZES.radius
                        }}
                    />

                    <View
                        style={{
                            position: 'absolute',
                            bottom: 0,
                            height: 50,
                            width: SIZES.width * 0.3,
                            backgroundColor: COLORS.white,
                            borderTopRightRadius: SIZES.radius,
                            borderBottomLeftRadius: SIZES.radius,
                            alignItems: 'center',
                            justifyContent: 'center',
                            ...styles.shadow
                        }}
                    >
                        <Text style={{ ...FONTS.h4 }}>{item.duration}</Text>
                    </View>
                </View>

                {/* Restaurant Info */}
                <Text style={{ ...FONTS.body2 }}>{item.name}</Text>

                <View
                    style={{
                        marginTop: SIZES.padding,
                        flexDirection: 'row'
                    }}
                >
                    {/* Rating */}
                    <Image
                        source={icons.star}
                        style={{
                            height: 20,
                            width: 20,
                            tintColor: COLORS.primary,
                            marginRight: 10
                        }}
                    />
                    <Text style={{ ...FONTS.body3 }}>{item.rating}</Text>

                    {/* Categories */}
                    <View
                        style={{
                            flexDirection: 'row',
                            marginLeft: 10
                        }}
                    >
                        {
                            item.categories.map((categoryId) => {
                                return (
                                    <View
                                        style={{ flexDirection: 'row' }}
                                        key={categoryId}
                                    >
                                        <Text style={{ ...FONTS.body3 }}>{getCategoryNameById(categoryId)}</Text>
                                        <Text style={{ ...FONTS.h3, color: COLORS.darkgray }}> . </Text>
                                    </View>
                                )
                            })
                        }

                        {/* Price */}
                        {
                            [1, 2, 3].map((priceRating) => (
                                <Text
                                    key={priceRating}
                                    style={{
                                        ...FONTS.body3,
                                        color: (priceRating <= item.priceRating) ? COLORS.black : COLORS.darkgray
                                    }}
                                >$</Text>
                            ))
                        }
                    </View>
                </View>
            </TouchableOpacity>
        )

        return (
            <FlatList
                data={Stock}
                keyExtractor={item => `${item.id}`}
                renderItem={renderItem}
                contentContainerStyle={{
                    paddingHorizontal: SIZES.padding * 2,
                    paddingBottom: 30
                }}
            />
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            {renderHeader()}
            {renderMainCategories()}
            {renderRestaurantList()}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.lightGray4
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 1,
    }
})

export default Home;