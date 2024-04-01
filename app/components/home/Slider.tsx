import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { images } from "@/app/utils/images";
import Layout from "../ui/Layout";

const Slider = () => {
  const emptyComponent = () => {
    return <Text>Tidak ada data</Text>;
  };

  return (
    <View style={{ marginTop: 10 }}>
      <Layout>
        <Text style={{ fontWeight: "700", fontSize: 20 }}>
          Gihdah liat-liat dulu
        </Text>
        <FlatList
          data={images}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <View key={item.id}>
              <Image source={item.fileName} style={styles.gambar} />
            </View>
          )}
          ListEmptyComponent={emptyComponent}
        />
      </Layout>
    </View>
  );
};

export default Slider;

const styles = StyleSheet.create({
  gambar: {
    width: 270,
    height: 150,
    objectFit: "contain",
    marginRight: 10,
  },
});
