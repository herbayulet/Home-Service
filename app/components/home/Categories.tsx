import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import Layout from "../ui/Layout";
import { icons } from "@/app/utils/icons";

const Categories = () => {
  const emptyComponent = () => {
    return <Text>Tidak ada data</Text>;
  };

  return (
    <View style={styles.container}>
      <Layout>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ fontWeight: "700", fontSize: 20 }}>Kategori</Text>
          <Text style={{ fontWeight: "700", fontSize: 14 }}>Liat Semua</Text>
        </View>
        <View style={styles.flatListContainer}>
          <FlatList
            data={icons}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <View
                key={item.id}
                style={{
                  // flex: 1,
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  marginHorizontal: 15,
                  marginTop: 10,
                }}
              >
                <View
                  style={{
                    backgroundColor: "#FFFFFF33", // Warna dengan opacity
                    borderRadius: 999, // Agar bentuk bulat
                    padding: 15, // Atur padding sesuai kebutuhan
                  }}
                >
                  <Image source={item.fileName} style={styles.gambar} />
                </View>
                <Text>{item.name}</Text>
              </View>
            )}
            ListEmptyComponent={emptyComponent}
          />
        </View>
      </Layout>
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: "center",
    // justifyContent: "center",
  },
  flatListContainer: {
    // flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  gambar: {
    width: 40,
    height: 40,
    // marginRight: 10,
  },
});
