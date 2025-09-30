import { useEffect, useState } from "react";

type DeviceType = "mobile" | "tablet" | "desktop";

export function useDevice() {
  const [device, setDevice] = useState<DeviceType>(() => {
    if (typeof window !== "undefined") {
      return getDeviceType(window.innerWidth);
    }
    return "desktop";
  });

  useEffect(() => {
    const handleResize = () => {
      setDevice(getDeviceType(window.innerWidth));
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return device;
}

function getDeviceType(width: number): DeviceType {
  if (width < 1024) return "mobile";
  return "desktop";
}
