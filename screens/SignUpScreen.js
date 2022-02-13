import React from "react";
import { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  ActivityIndicator,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

const API = "https://Azza123.pythonanywhere.com";
const API_LOGIN = "/auth";

export default function SignUpScreen({ navigation }) {
  return (
    <View style={commonStyles.container}>
      <Text>Sign Up Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
