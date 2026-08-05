import { useLocalSearchParams } from "expo-router";
import Layout from "../layout/Layout";

export default function Details() {
  const params = useLocalSearchParams();

  return <Layout></Layout>;
}
