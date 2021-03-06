import React, { useState,useRef, useContext, useEffect } from "react";
import Dialog from "react-native-dialog";
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Image,
    ImageBackground,
    TouchableOpacity,
    FlatList,
    Animated,
    Platform,
    Button
} from 'react-native';

import { LogBox } from 'react-native';
import { VictoryPie } from 'victory-native';
import firebase from '@react-native-firebase/database';
import {db} from '../config';

import {Svg} from 'react-native-svg';

import { COLORS, FONTS, SIZES, icons, images } from '../../constants';

import {AuthContext} from '../navigation/AuthProvider';

const Home = () => {

    // dummy data
    const confirmStatus = "C"
    const pendingStatus = "P"

    const [visible, setVisible] = React.useState(false);
    const [visibleG, setVisibleG] = React.useState(false);
    const [text, onChangeText] = React.useState("Useless Text");
    const [number, onChangeNumber] = React.useState(null);

    const showDialog = ({ item }) => {
      setVisible(true);
    };
  
    const handleCancel = () => {
      setVisible(false);
    };
  
    const handleDelete = () => {
      // The user has pressed the "Delete" button, so here you can do your own logic.
      // ...Your logic
      setVisible(false);
    };

    const showDialogG = ({ item }) => {
        setVisibleG(true);
      };
    
      const handleCancelG = () => {
        setVisibleG(false);
      };
    
      const handleDeleteG = () => {
        // The user has pressed the "Delete" button, so here you can do your own logic.
        // ...Your logic
        setVisibleG(false);
      };

    useEffect(() => {
        LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
    }, [])

    let categoriesData = [
        {
            id: 1,
            name: "Eğitim",
            icon: icons.education,
            color: COLORS.yellow,
            expenses: [
                {
                    id: 1,
                    title: "",
                    description: "",
                    location: "",
                    total: 0.00,
                    status: confirmStatus
                },
                {
                    id: 2,
                    title: "",
                    description: "",
                    location: "",
                    total: 0.00,
                    status: confirmStatus
                },
                {
                    id: 3,
                    title: "",
                    description: "",
                    location: "",
                    total: 0.00,
                    status: confirmStatus
                },
                {
                    id: 4,
                    title: "",
                    description: "",
                    location: "",
                    total: 0.00,
                    status: confirmStatus
                }
            ],
        },
        {
            id: 2,
            name: "Gıda",
            icon: icons.food,
            color: COLORS.lightBlue,
            expenses: [
                {
                    id: 5,
                    title: "",
                    description: "",
                    location: "",
                    total: 0.00,
                    status: confirmStatus,
                },

                {
                    id: 6,
                    title: "",
                    description: "",
                    location: "ByProgrammers' Pharmacy",
                    total: 0.00,
                    status: confirmStatus,
                },

                {
                    id: 7,
                    title: "",
                    description: "",
                    location: "ByProgrammers' Pharmacy",
                    total: 0.00,
                    status: confirmStatus,
                },

                {
                    id: 8,
                    title: "",
                    description: "",
                    location: "ByProgrammers' Pharmacy",
                    total: 0.00,
                    status: confirmStatus,
                },

            ],
        },
        {
            id: 3,
            name: "Çocuk",
            icon: icons.baby_car,
            color: COLORS.darkgreen,
            expenses: [
                {
                    id: 9,
                    title: "",
                    description: "",
                    location: "ByProgrammers' Toy Store",
                    total: 0.00,
                    status: confirmStatus,
                },
                {
                    id: 10,
                    title: "",
                    description: "",
                    location: "ByProgrammers' Baby Care Store",
                    total: 0.00,
                    status: confirmStatus,
                },
                {
                    id: 11,
                    title: "",
                    description: "",
                    location: "ByProgrammers' Supermarket",
                    total: 0.00,
                    status: confirmStatus,
                },
                {
                    id: 12,
                    title: "",
                    description: "",
                    location: "ByProgrammers' Fashion Store",
                    total: 0.00,
                    status: confirmStatus,
                },
            ],
        },
        {
            id: 4,
            name: "Kişisel Bakım",
            icon: icons.healthcare,
            color: COLORS.peach,
            expenses: [
                {
                    id: 13,
                    title: "",
                    description: "",
                    location: "ByProgrammers' Pharmacy",
                    total: 0.00,
                    status: confirmStatus,
                },
                {
                    id: 14,
                    title: "",
                    description: "",
                    location: "ByProgrammers' Pharmacy",
                    total: 0.00,
                    status: confirmStatus,
                },
                {
                    id: 15,
                    title: "",
                    description: "",
                    location: "ByProgrammers' Pharmacy",
                    total: 0.00,
                    status: confirmStatus,
                },
                {
                    id: 16,
                    title: "",
                    description: "",
                    location: "ByProgrammers' Pharmacy",
                    total: 0.00,
                    status: confirmStatus,
                },
            ],
        },
        {
            id: 5,
            name: "Spor",
            icon: icons.sports_icon,
            color: COLORS.purple,
            expenses: [
                {
                    id: 17,
                    title: "",
                    description: "",
                    location: "ByProgrammers' Gym",
                    total: 0.00,
                    status: confirmStatus,
                },
                {
                    id: 18,
                    title: "",
                    description: "",
                    location: "ByProgrammers' Gym",
                    total: 0.00,
                    status: confirmStatus,
                },

                {
                    id: 19,
                    title: "",
                    description: "",
                    location: "ByProgrammers' Gym",
                    total: 0.00,
                    status: confirmStatus,
                },

                {
                    id: 20,
                    title: "",
                    description: "",
                    location: "ByProgrammers' Gym",
                    total: 0.00,
                    status: confirmStatus,
                },
            ],
        },
        {
            id: 6,
            name: "Kıyafet",
            icon: icons.cloth_icon,
            color: COLORS.red,
            expenses: [
                {
                    id: 21,
                    title: "",
                    description: "",
                    location: "ByProgrammers' Mall",
                    total: 0.00,
                    status: confirmStatus,
                },
                {
                    id: 22,
                    title: "",
                    description: "",
                    location: "ByProgrammers' Mall",
                    total: 0.00,
                    status: confirmStatus,
                },

                {
                    id: 23,
                    title: "",
                    description: "",
                    location: "ByProgrammers' Mall",
                    total: 0.00,
                    status: confirmStatus,
                },

                {
                    id: 24,
                    title: "",
                    description: "",
                    location: "ByProgrammers' Mall",
                    total: 0.00,
                    status: confirmStatus,
                },
            ],
        },
        {
            id: 7,
            name: "Pazar",
            icon: icons.chart,
            color: COLORS.purple,
            expenses: [{
                    id: 25,
                    title: "",
                    description: "",
                    location: "Eryaman",
                    total: 0.00,
                    status: confirmStatus,
                },
                {
                    id: 26,
                    title: "",
                    description: "",
                    location: "Eryaman",
                    total: 0.00,
                    status: confirmStatus,
                },

                {
                    id: 27,
                    title: "",
                    description: "",
                    location: "Eryaman",
                    total: 0.00,
                    status: confirmStatus,
                },

                {
                    id: 28,
                    title: "",
                    description: "",
                    location: "Eryaman",
                    total: 0.00,
                    status: confirmStatus,
                },
            ],
        },
        {
            id: 8,
            name: "Hobi",
            icon: icons.chart,
            color: COLORS.black,
            expenses: [
                {
                    id: 29,
                    title: "",
                    description: "",
                    location: "Çankaya",
                    total: 0.00,
                    status: confirmStatus,
                },
                {
                    id: 30,
                    title: "",
                    description: "",
                    location: "Koru",
                    total: 0.00,
                    status: confirmStatus,
                },

                {
                    id: 31,
                    title: "",
                    description: "",
                    location: "Çankaya",
                    total: 0.00,
                    status: confirmStatus,
                },

                {
                    id: 32,
                    title: "",
                    description: "",
                    location: "Koru",
                    total: 0.00,
                    status: confirmStatus,
                },

            ],
        }
    ]

    const categoryListHeightAnimationValue = useRef(new Animated.Value(170)).current;

    const [categories, setCategories] = React.useState(categoriesData)
    const [viewMode, setViewMode] = React.useState("chart")
    const [selectedCategory, setSelectedCategory] = React.useState(null)
    const [showMoreToggle, setShowMoreToggle] = React.useState(false)
    const {logout} = useContext(AuthContext);
 
    function renderNavBar() {
        return (
            <View
                style={{
                    flexDirection: 'row',
                    height: 50,
                    justifyContent: 'space-between',
                    alignItems: 'flex-end',
                    paddingHorizontal: SIZES.padding,
                    backgroundColor: COLORS.white,
                }}
            >
                
                <TouchableOpacity
                    style={{ justifyContent: 'center', width: 50, }}
                    onPress={() => console.log('Go Back')}
                >

                    <Image
                        source={icons.back_arrow}
                        style={{
                            width: 30,
                            height: 30,
                            tintColor: COLORS.primary
                        }}
                    />
                </TouchableOpacity>

                
                    <Text style={{ color: COLORS.primary, ...FONTS.h2 }}>Giderler</Text>
         
                  
                <TouchableOpacity
                    style={{ justifyContent: 'center', alignItems: 'flex-end', width: 50 }}
                    onPress={() => logout()}
                >
                    <Image
                        source={icons.more}
                        style={{
                            width: 30,
                            height: 30,
                            tintColor: COLORS.primary
                        }}
                    />
                </TouchableOpacity>

            </View>

            
        )
    }

    function renderHeader() {
      
    }
   

    function renderCategoryHeaderSection() {
        return (
            <View style={{ flexDirection: 'row', padding: SIZES.padding, justifyContent: 'space-between', alignItems: 'center' }}>

                {/* Button */}
                <View style={{ flexDirection: 'row' }}>   
                {/*gelirekle   */}  
                <TouchableOpacity
                    style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: viewMode == "Ekle" ? COLORS.darkgreen : COLORS.darkgreen,
                        height: 50,
                        width: 120,
                        borderRadius: 25
                    }}
                    onPress={() => setViewMode("GelirEkle")}
                     >
                          <Text>Gelir Ekle</Text>
                     </TouchableOpacity>   

                     {/*giderekle   */}
                <TouchableOpacity
                    style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: viewMode == "Ekle" ? COLORS.yellow : COLORS.yellow,
                        height: 50,
                        width: 120,
                        borderRadius: 25
                    }}
                    onPress={() => setViewMode("Ekle")}
                     >
                          <Text>Gider Ekle</Text>
                     </TouchableOpacity>   

                     {/*chart*/}
                 <TouchableOpacity
                        style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: viewMode == "chart" ? COLORS.secondary : null,
                            height: 50,
                            width: 50,
                            borderRadius: 25
                        }}
                        onPress={() => setViewMode("chart")}
                    >
                        <Image
                            source={icons.chart}
                            resizeMode="contain"
                            style={{
                                width: 20,
                                height: 20,
                                tintColor: viewMode == "chart" ? COLORS.white : COLORS.darkgray,
                            }}
                        />
                    </TouchableOpacity>

        
                     {/*listeleme*/}
                <TouchableOpacity
                        style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: viewMode == "list" ? COLORS.secondary : null,
                            height: 50,
                            width: 50,
                            borderRadius: 25,
                            marginLeft: SIZES.base
                        }}
                        onPress={() => setViewMode("list")}
                    >
                        <Image
                            source={icons.menu}
                            resizeMode="contain"
                            style={{
                                width: 20,
                                height: 20,
                                tintColor: viewMode == "list" ? COLORS.white : COLORS.darkgray,
                            }}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }





    function renderCategoryList() {
        const renderItem = ({ item }) => (
            <TouchableOpacity
                onPress={() => setSelectedCategory(item)}
                style={{
                    flex: 1,
                    flexDirection: 'row',
                    margin: 5,
                    paddingVertical: 6,
                    paddingHorizontal: SIZES.padding,
                    borderRadius: 5,
                    backgroundColor: COLORS.white,
                    ...styles.shadow
                }}
            >
                <Image
                    source={item.icon}
                    style={{
                        width: 20,
                        height: 20,
                        tintColor: item.color
                    }}
                />
                <Text style={{ marginLeft: SIZES.base, color: COLORS.primary, ...FONTS.h4 }}>{item.name}</Text>
            </TouchableOpacity>
        )

        return (
            <View style={{ paddingHorizontal: SIZES.padding - 5 }}>
                <Animated.View style={{ height: categoryListHeightAnimationValue }}>
                    <FlatList
                        data={categories}
                        renderItem={renderItem}
                        keyExtractor={item => `${item.id}`}
                        numColumns={2}
                    />
                </Animated.View>

                <TouchableOpacity
                    style={{
                        flexDirection: 'row',
                        marginVertical: SIZES.base + 10,
                        justifyContent: 'center'
                    }}
                    onPress={() => {
                            Animated.timing(categoryListHeightAnimationValue, {
                                toValue: 172.5,
                                duration: 500,
                                useNativeDriver: false
                            }).start()
                    }}
                >
                </TouchableOpacity>
            </View>
        )
    }

    function renderIncomingExpensesTitle() {
        return (
            <View style={{ height: 30, backgroundColor: COLORS.lightGray2, padding: SIZES.padding - 30 }}>
                {/* Title */}
                <Text style={{ ...FONTS.h2, color: COLORS.primary }}>Harcama Detayları</Text>
            </View>
        )
    }

    function renderIncomingExpenses() {
        let allExpenses = selectedCategory ? selectedCategory.expenses : []
        let incomingExpenses = allExpenses.filter(a => a.status == "C")

        const renderItem = ({ item, index }) => (
            <View style={{
                width: 300,
                marginRight: SIZES.padding,
                marginLeft: index == 0 ? SIZES.padding : 0,
                marginVertical: SIZES.radius,
                borderRadius: SIZES.radius,
                backgroundColor: COLORS.white,
                ...styles.shadow
            }}>
                {/* Title */}
                <View style={{ flexDirection: 'row', padding: SIZES.padding, alignItems: 'center' }}>
                    <View
                        style={{
                            height: 50,
                            width: 50,
                            borderRadius: 25,
                            backgroundColor: COLORS.lightGray,
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginRight: SIZES.base
                        }}
                    >
                        <Image
                            source={selectedCategory.icon}
                            style={{
                                width: 30,
                                height: 30,
                                tintColor: selectedCategory.color
                            }}
                        />
                    </View>

                    <Text style={{ ...FONTS.h3, color: selectedCategory.color, }}>{selectedCategory.name}</Text>
                </View>

                {/* Expense Description */}
                <View style={{ paddingHorizontal: SIZES.padding }}>
                    {/* Title and description */}
                    <Text style={{ ...FONTS.h2, }}>{item.title}</Text>
                    <Text style={{ ...FONTS.body3, flexWrap: 'wrap', color: COLORS.darkgray }}>
                        {item.description}
                    </Text>
                </View>

                {/* Price */}
                <View
                    style={{
                        height: 50,
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderBottomStartRadius: SIZES.radius,
                        borderBottomEndRadius: SIZES.radius,
                        backgroundColor: selectedCategory.color,
                    }}
                >
                    <Text style={{ color: COLORS.white, ...FONTS.body3 }}>{item.total.toFixed(2)} TL</Text>
                </View>
            </View>
        )

        return (
            <View>
                {renderIncomingExpensesTitle()}

                {
                    incomingExpenses.length > 0 &&
                    <FlatList
                        data={incomingExpenses}
                        renderItem={renderItem}
                        keyExtractor={item => `${item.id}`}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                    />
                }

                {
                    incomingExpenses.length == 0 &&
                    <View style={{ alignItems: 'center', justifyContent: 'center', height: 300 }}>
                        <Text style={{ color: COLORS.primary, ...FONTS.h3 }}>No Record</Text>
                    </View>
                }

            </View>

        )
    }

    function processCategoryDataToDisplay() {
        // Filter expenses with "Confirmed" status
        let chartData = categories.map((item) => {
            let confirmExpenses = item.expenses.filter(a => a.status == "C")
            var total = confirmExpenses.reduce((a, b) => a + (b.total || 0), 0)
            var realExpenses = item.expenses.filter(a => a.total > 0.00)

            return {
                name: item.name,
                y: total,
                expenseCount: realExpenses.length,
                color: item.color,
                id: item.id
            }
        })

        // filter out categories with no data/expenses
        let filterChartData = chartData.filter(a => a.y > 0)

        // Calculate the total expenses
        let totalExpense = filterChartData.reduce((a, b) => a + (b.y || 0), 0)

        // Calculate percentage and repopulate chart data
        let finalChartData = filterChartData.map((item) => {
            let percentage = (item.y / totalExpense * 100).toFixed(0)
            return {
                label: `${percentage}%`,
                y: Number(item.y),
                expenseCount: item.expenseCount,
                color: item.color,
                name: item.name,
                id: item.id
            }
        })

        return finalChartData
    }

    function setSelectCategoryByName(name) {
        let category = categories.filter(a => a.name == name)
        setSelectedCategory(category[0])
    }

    function renderChart() {

        let chartData = processCategoryDataToDisplay()
        let colorScales = chartData.map((item) => item.color)
        let totalExpenseCount = chartData.reduce((a, b) => a + (b.expenseCount || 0), 0)

        console.log("Check Chart")
        console.log(chartData)

        if(Platform.OS == 'ios')
        {
            return (
                <View  style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <VictoryPie
                        
                        data={chartData}
                        labels={(datum) => `${datum.y}`}
                        radius={({ datum }) => (selectedCategory && selectedCategory.name == datum.name) ? SIZES.width * 0.4 : SIZES.width * 0.4 - 10}
                        innerRadius={70}
                        labelRadius={({ innerRadius }) => (SIZES.width * 0.4 + innerRadius) / 2.5}
                        style={{
                            labels: { fill: "white", ...FONTS.body3 },
                            parent: {
                                ...styles.shadow
                            },
                        }}
                        width={SIZES.width * 0.8}
                        height={SIZES.width * 0.8}
                        colorScale={colorScales}
                        events={[{
                            target: "data",
                            eventHandlers: {
                                onPress: () => {
                                    return [{
                                        target: "labels",
                                        mutation: (props) => {
                                            let categoryName = chartData[props.index].name
                                            setSelectCategoryByName(categoryName)
                                        }
                                    }]
                                }
                            }
                        }]}
    
                    />
    
                    <View style={{ position: 'absolute', top: '42%', left: "42%" }}>
                        <Text style={{ ...FONTS.h1, textAlign: 'center' }}>{totalExpenseCount}</Text>
                        <Text style={{ ...FONTS.body3, textAlign: 'center' }}>Exses</Text>
                    </View>
                </View>
    
            )
        }
        else
        {
            // Android workaround by wrapping VictoryPie with SVG
            return (
              <View  style={{ alignItems: 'center', justifyContent: 'center' }}>
                  <View >
                    <Text style={{  position: 'relative', top: '48%', right: "30%" , color: COLORS.primary, ...FONTS.h3 }}>KATEGORİLER</Text>
                    <Text style={{  position: 'relative', top: '48%', right: "30%" ,color: COLORS.darkgray, ...FONTS.body4 }}>Toplam : {categories.length}</Text>
                </View>

                    <Svg width={SIZES.width} height={SIZES.width} style={{width: "100%", height: "auto"}}>

                        <VictoryPie
                            standalone={false} // Android workaround
                            data={chartData}
                            labels={(datum) => `${datum.y}`}
                            radius={({ datum }) => (selectedCategory && selectedCategory.name == datum.name) ? SIZES.width * 0.4 : SIZES.width * 0.4 - 10}
                            innerRadius={70}
                            labelRadius={({ innerRadius }) => (SIZES.width * 0.4 + innerRadius) / 2.5}
                            style={{
                                labels: { fill: "white", ...FONTS.body3 },
                                parent: {
                                    ...styles.shadow
                                },
                            }}
                            width={SIZES.width}
                            height={SIZES.width}
                            colorScale={colorScales}
                            events={[{
                                target: "data",
                                eventHandlers: {
                                    onPress: () => {
                                        return [{
                                            target: "labels",
                                            mutation: (props) => {
                                                let categoryName = chartData[props.index].name
                                                setSelectCategoryByName(categoryName)
                                            }
                                        }]
                                    }
                                }
                            }]}
        
                        />
                    </Svg>
                    <View style={{ position: 'absolute', top: '48%', left: "42%" }}>
                         <Text style={{ ...FONTS.h1, textAlign: 'center' }}>{totalExpenseCount}</Text>
                        <Text style={{ ...FONTS.body3, textAlign: 'center' }}>Harcama</Text>
                    </View>
                </View>
            )
        }
        
    }

    butceGuncelle = (number,id,text) =>{
        let MinusNumber = 0 - parseInt(number,10);
        datanew = datanew + MinusNumber;
        db.ref('/Cuzdan/Butce').set(datanew);

        for(var i=3; i>0 ; i--)
        {
                selectedCategory.expenses[i].title = selectedCategory.expenses[i-1].title;
                //selectedCategory.expenses[i].description = selectedCategory.expenses[i-1].description;
                selectedCategory.expenses[i].total = selectedCategory.expenses[i-1].total;
        }

        categories[id-1].expenses[0].title = text;
        categories[id-1].expenses[0].total = parseInt(number,10);

        var dbRef = db.ref('/Kategoriler/');
        var listRef = dbRef.push();
        listRef.set({
            'Gider' : categories[id-1].expenses[0].title + ': ' + number + ' TL'
        }
        )

        //db.ref('/Kategoriler/Eğitim/').set(categoriesData[0].expenses[0].title);
        //db.ref('/Kategoriler/Gıda/').set(categoriesData[1].expenses[0].title);
        //db.ref('/Kategoriler/Çocuk/').set(categoriesData[2].expenses[0].title);
        //db.ref('/Kategoriler/Kişisel Bakım/').set(categoriesData[3].expenses[0].title);
        //db.ref('/Kategoriler/Spor/').set(categoriesData[4].expenses[0].title);
        //db.ref('/Kategoriler/Kıyafet/').set(categoriesData[5].expenses[0].title);
        //db.ref('/Kategoriler/Pazar/').set(categoriesData[6].expenses[0].title);
        //db.ref('/Kategoriler/Hobi/').set(categoriesData[7].expenses[0].title);
        handleDelete();


    }


    function renderEkle() {
        let categoryName 

        const renderItem = ({ item }) => (
            <TouchableOpacity
                onPress={() => {
                    categoryName = item.name
                    setSelectCategoryByName(categoryName)}
                }

                style={{
                    flex: 1,
                    flexDirection: 'row',
                    margin: 5,
                    paddingVertical: 20,
                    paddingHorizontal: SIZES.padding,
                    borderRadius: 5,
                    backgroundColor: (selectedCategory && selectedCategory.name == item.name) ? item.color : COLORS.white,
                    ...styles.shadow
                }}
            >
                <Image
                    source={item.icon}
                    style={{
                        width: 20,
                        height: 20,
                        tintColor: item.color
                    }}
                />
                <Text style={{ marginLeft: SIZES.base, color: COLORS.primary, ...FONTS.h3 }}>{item.name}</Text>
            </TouchableOpacity>
        )

        return (
            <View style={{ paddingHorizontal: SIZES.padding - 50 }}>
                    <FlatList
                        data={categories}
                        renderItem={renderItem}
                        keyExtractor={item => `${item.id}`}
                        numColumns={2}
                    />
                   
                    <View style={styles.Bcontainer}>
                        <View style={styles.buttonContainer}>
                            <Button title="Gider Ekle" color= "#d24dff" onPress={showDialog} />
                            <Dialog.Container visible={visible}>
                                <Dialog.Title> Ürün Ekle</Dialog.Title>
                                <Dialog.Input
                                    placeholder="Ürün Açıklaması"
                                    keyboardType="default"
                                    style={styles.input}
                                    onChangeText={onChangeText}
                                    Text={text}>
                                </Dialog.Input>
                                <Dialog.Input
                                    placeholder="Ödeme Tutarı"
                                    keyboardType="numeric"
                                    style={styles.input}
                                    onChangeText={onChangeNumber}
                                    value={number}>
                                </Dialog.Input>
                                <Dialog.Button label="İptal" onPress={handleCancel} />
                                <Dialog.Button label="Ekle" onPress={ () => butceGuncelle(number,selectedCategory.id,text)} />
                            </Dialog.Container>
                        </View>
    
                    </View>


            </View>
        )
    }

    function butceoku(){

        db.ref('/Cuzdan/Butce').on('value', snapshot => 
        { 
            console.log('User data: ', snapshot.val()); 
            global.datanew = snapshot.val();
        }
        );
    }

    butceyazYeniDatabase = (number) =>{
        db.ref('/Cuzdan/Butce').set(number);
        handleDeleteG();
    }

    butceyaz = (number) =>{
        /*firebase.database().ref('butce').set('aa')*/

        db.ref('/Cuzdan/Butce').on('value', snapshot => 
            { 
                console.log('User data: ', snapshot.val()); 
                global.data = snapshot.val();
            }
        );
        console.log(data);
        let datanew = parseInt(data,10);
        //data = number + data;
        datanew = datanew + parseInt(number,10);

        console.log(datanew);
        
        db.ref('/Cuzdan/Butce').set(datanew);
        handleDeleteG();
    }

    function renderGelirEkle() {
        let categoryName 
        butceoku();
        //var CurrentValue = data;

        return (
            <View style={{ paddingHorizontal: SIZES.padding, 
                paddingVertical: SIZES.padding, 
                backgroundColor:  '#a83baa'  , 
                borderRadius: 5,
                width:350,
                height:250
                }}>
            
            <View style={{ height: 30, padding: SIZES.padding - 30 }}>
                {/* Title */}
                <Text style={{ ...FONTS.h2, color: COLORS.primary }}>Toplam Bütçe</Text>

            </View>
            <View style={{ flex: 1, justifyContent:'flex-end', alignItems: 'flex-end' }}>
            <Text style={{ fontSize: 50, color: '#FFF', padding: - 30, fontWeight: '200' }}>{datanew} TL</Text>
            </View>




                <View style={styles.Bcontainer}>
                        <View style={  styles.buttonContainer}>
                        <Button title="Ekle" color= "#ff4d94" onPress={showDialogG} />
                            <Dialog.Container visible={visibleG}>
                                <Dialog.Title> Gelir Eke</Dialog.Title>
                                <Dialog.Description>
                                    {categoryName}
                                </Dialog.Description>
                                <Dialog.Input
                                    placeholder="Para"
                                    keyboardType="numeric"
                                    style={styles.input}
                                    onChangeText={onChangeNumber}
                                    //onChangeText={text => this.SetState({text:text})}
                                    value={number}
                                   >
                                </Dialog.Input>
                                <Dialog.Button label="İptal" onPress={handleCancelG} />
                                <Dialog.Button label="Ekle" onPress={ () => butceyaz(number)} />
                            </Dialog.Container>  
                        </View>
                    </View>
                </View>  
        )
    }
  
            
    function renderExpenseSummary() {
        let data = processCategoryDataToDisplay()

        const renderItem = ({ item }) => (
            <TouchableOpacity
                style={{
                    flexDirection: 'row',
                    height: 40,
                    paddingHorizontal: SIZES.radius,
                    borderRadius: 10,
                    backgroundColor: (selectedCategory && selectedCategory.name == item.name) ? item.color : COLORS.white
                }}
                onPress={() => {
                    let categoryName = item.name
                    setSelectCategoryByName(categoryName)
                }}
            >
                {/* Name/Category */}
                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                    <View
                        style={{
                            width: 20,
                            height: 20,
                            backgroundColor: (selectedCategory && selectedCategory.name == item.name) ? COLORS.white : item.color,
                            borderRadius: 5
                        }}
                    />

                    <Text style={{ marginLeft: SIZES.base, color: (selectedCategory && selectedCategory.name == item.name) ? COLORS.white : COLORS.primary, ...FONTS.h3 }}>{item.name}</Text>
                </View>

                {/* Expenses */}
                <View style={{ justifyContent: 'center' }}>
                    <Text style={{ color: (selectedCategory && selectedCategory.name == item.name) ? COLORS.white : COLORS.primary, ...FONTS.h3 }}>{item.y} TL - {item.label}</Text>
                </View>
            </TouchableOpacity>
        )

        return (
            <View style={{ padding: SIZES.padding }}>
                <FlatList
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={item => `${item.id}`}
                />
            </View>

        )
    }

    return (
        <View style={{ flex: 1, backgroundColor: COLORS.lightGray2 }}>
            {/*ilk database degerini oku ve ekrana yazmak uzere kaydet*/}
            {butceoku()}
            
            {/* Nav bar section */}
            {renderNavBar()}

            {/* Header section */}
            {renderHeader()}

            {/* Category Header Section */}
            {renderCategoryHeaderSection()}

            <ScrollView style={{ backgroundColor: 'whitesmoke', marginHorizontal:20 }} showsVerticalScrollIndicator={false}>
           
                {
                    viewMode == "list" &&
                    <View>
                        {renderCategoryList()}
                        {renderIncomingExpenses()}
                    </View>
                }
                {
                    viewMode == "chart" &&
                    <View>
                        {renderChart()}
                        {renderExpenseSummary()}
                    </View>
                }
                {
                    viewMode == "Ekle" &&
                    <View>
                        {renderEkle()}
                        
                    </View>
                }
                {
                    viewMode == "GelirEkle" &&
                    <View>
                        {renderGelirEkle()}

                    </View>
                }
                      

            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 2,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 3,
    },
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
    },
    Bcontainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonContainer: {
        flex: 1,
    }
})

export default Home;