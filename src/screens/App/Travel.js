import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import * as Speech from "expo-speech";
import { Colors } from "../../constants/Colors";

const Travel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSpeaking, setIsSpeaking] = useState(false);

  useEffect(() => {
    const speak = () => {
      setIsSpeaking(true);
      Speech.speak(dummyData[currentIndex].title);
      Speech.speak(dummyData[currentIndex].details, {
        onDone: () => setIsSpeaking(false),
      });
      setIsSpeaking(true);
    };

    speak();
  }, [currentIndex]);

  const handleNextPress = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % dummyData.length);
  };

  const dummyData = [
    {
      title: "Indra Deva constructed the temple",
      details:
        "According to popular legend, the Meenakshi temple is situated in the heart of the temple city and was erected by Indra Deva himself. Shilpa Shastra literature and sculptures can be seen in the temple.",
      imgUrl:
        "https://www.savaari.com/blog/wp-content/uploads/2022/11/sreekumar-parameswaran-UhvebPHqSKk-unsplash_11zon-1024x684.jpg",
    },
    {
      title: "The 33,000 scriptures",
      details:
        "Tamil Hindus flock to this temple to worship Sunderashwar and Meenakshi. The temple has over 33,000 scriptures as well as 14 entrances with two golden sculptures. With a height of 170 feet, the entryway on the southern side of the sanctum is the tallest.",
      imgUrl:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Ftimesofindia.indiatimes.com%2Ftravel%2Fdestinations%2Fthe-complete-guide-to-visiting-meenakshi-amman-temple-in-madurai%2Farticleshow%2F107052733.cms&psig=AOvVaw2LllcSayub5cFNfwJaJebW&ust=1721360232173000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCLDF09zUr4cDFQAAAAAdAAAAABAE",
    },
    {
      title: "The Thousand Pillars hall",
      details:
        "Meenakshi Temple is also one of India’s seven wonders. Another outstanding piece of architecture is the Hall of Thousand Pillars, which is built on a single piece of granite. The rock is shaped into a mandapam, which is used for weddings.",
      imgUrl:
        "https://www.abhibus.com/blog/wp-content/uploads/2023/04/Madurai-Meenakshi-Temple-History-Timings-How-to-Reach.jpg",
    },
    {
      title: "Vishwanatha Nayak rebuilt",
      details:
        "The temple was robbed and destroyed before being rebuilt by Vishwanath Nayak during the rule of the Pandayan Empire in 1560, around 2500 years ago. Madurai was the capital at the time and was ruled by Tirumalai Nayak.",
      imgUrl:
        "https://www.holidify.com/images/cmsuploads/compressed/Koodalazhagar_(17)_20170428195902.jpg",
    },
    {
      title: "Goddess Meenakshi’s Idol",
      details:
        "The Goddess Meenakshi or Parvati idol is sculpted in a greenish stone. It’s breathtakingly beautiful, holy, and has flashy pupils as if the Goddess were alive. This Hindu temple is dedicated to a menstruation Goddess. The goddess can also be shown with three breasts because Parvati was created with three breasts. It was a curse that the third breast would disappear once she met the proper man.",
      imgUrl:
        "https://c8.alamy.com/comp/RM5P9E/sculpture-meenakshi-temple-madurai-tamil-nadu-india-asia-RM5P9E.jpg",
    },
    {
      title: "This temple attracts up to a million visitors",
      details:
        "Friday is considered a noteworthy day in April, and approximately 25,000 people visit on this day. Furthermore, in April, according to a festival commemorating the wedding and union of the Gods. The Meenakshi Thirikalayanam is the name of the celebration. Furthermore, the temple’s annual revenue is approximately $60 million.",
      imgUrl:
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiQOnqnBzgTvF93b_BilMNVAADUeqlEsZlwOvYGkk49gLRVbSJB5VZgXvgGTEg61JVhRhsFq5YFhP2X9nZIZz3Wmlrz0DpaVIkm1KVk9oPAH_qR1QMDMTyX4pLAJ-wJXyL2pEisC3hWFwA/s640/Picture%2520043.jpg",
    },
  ];

  return (
    <View style={styles.container}>
      <View
        style={{
          width: 300,
          height: 300,
          marginVertical: 10,
        }}
      >
        <Image
          src={dummyData[currentIndex].imgUrl}
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            borderRadius: 20,
          }}
        />
      </View>
      <Text
        style={{
          fontSize: 20,
          fontWeight: "bold",
        }}
      >
        Facts about Meenakshi Temple
      </Text>

      <View style={styles.detailContainer}>
        <Text
          style={{
            fontSize: 16,
            fontWeight: "bold",
            marginBottom: 10,
          }}
        >
          {dummyData[currentIndex].title}
        </Text>
        <Text
          style={{
            fontSize: 14,
            color: "gray",
          }}
        >
          {dummyData[currentIndex].details}
        </Text>
      </View>

      <Pressable
        style={[styles.nextBtn, isSpeaking && styles.disabledBtn]}
        onPress={handleNextPress}
        disabled={isSpeaking}
      >
        <Text
          style={{
            fontSize: 16,
            fontWeight: "bold",
            color: "white",
            marginVertical: 10,
          }}
        >
          Next
        </Text>
      </Pressable>
    </View>
  );
};

export default Travel;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    // justifyContent: "center",
    marginTop: 40,
    marginHorizontal: 10,
  },
  detailContainer: {
    marginVertical: 20,
    width: "90%",
    padding: 15,
    borderRadius: 10,
    borderColor: Colors.secondary,
    borderWidth: 1,
  },
  nextBtn: {
    backgroundColor: Colors.secondary,
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    width: "90%",
  },
  disabledBtn: {
    backgroundColor: "gray",
  },
});
