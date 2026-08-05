import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import "./../../global.css";
import Layout from "../layout/Layout";
import Opcoes from "../components/Opcoes";

export default function App() {
  return (
    <Layout>
      <Opcoes />
    </Layout>
  );
}
