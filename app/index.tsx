import { Alert, Text, View } from "react-native";
import DeviceInfo from "react-native-device-info";
import { useState, useEffect } from "react";

export default function Index() {
  const [uniqueId, setUniqueId] = useState("");
  const [serialNumber, setSerialNumber] = useState("");
  const appId = DeviceInfo.getBundleId();
  const buildNumber = DeviceInfo.getBuildNumber();
  const version = DeviceInfo.getVersion();

  useEffect(() => {
    DeviceInfo.getUniqueId().then((id) => setUniqueId(id));
    DeviceInfo.getSerialNumber().then((serial) => setSerialNumber(serial));
  }, []);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>앱 ID: {appId}</Text>
      <Text>빌드 번호: {buildNumber}</Text>
      <Text>버전: {version}</Text>
      <Text>고유 ID: {uniqueId}</Text>
      <Text>시리얼 번호: {serialNumber}</Text>
    </View>
  );
}
