import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import Layout from "../ui/Layout";
import { images } from "@/app/utils/bisnis";

const LastBisnis = () => {
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
          <Text style={{ fontWeight: "700", fontSize: 20 }}>
            Bisnis sebelumnye
          </Text>
          <Text style={{ fontWeight: "700", fontSize: 14 }}>Liat Semua</Text>
        </View>
        <View style={styles.flatListContainer}>
          <FlatList
            data={images}
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
                    backgroundColor: "#FFFFFF", // Warna dengan opacity
                    borderRadius: 20, // Agar bentuk bulat
                    padding: 15, // Atur padding sesuai kebutuhan
                  }}
                >
                  <Image source={item.fileName} style={styles.gambar} />
                  <Text
                    style={{
                      textAlign: "center",
                      marginTop: 10,
                      fontSize: 20,
                      fontWeight: "700",
                    }}
                  >
                    {item.category}
                  </Text>
                  <Text style={{ textAlign: "center", marginTop: 5 }}>
                    {item.name}
                  </Text>
                </View>
              </View>
            )}
            ListEmptyComponent={emptyComponent}
          />
        </View>
      </Layout>
    </View>
  );
};

export default LastBisnis;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: -200,
    // alignItems: "center",
    // justifyContent: "center",
  },
  flatListContainer: {
    // flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  gambar: {
    width: 200,
    height: 200,
    borderRadius: 20,
    // marginRight: 10,
  },
});
