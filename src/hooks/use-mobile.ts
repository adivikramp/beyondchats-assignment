import * as React from "react";

const BREAKPOINTS = {
  MOBILE: 768,
  TABLET: 1024,
  LAPTOP: 1440,
  MONITOR: Infinity,
};

type DeviceType = "mobile" | "tablet" | "laptop" | "monitor";

export function useDeviceType() {
  const [deviceType, setDeviceType] = React.useState<DeviceType | undefined>(undefined);

  React.useEffect(() => {
    const updateDeviceType = () => {
      const width = window.innerWidth;

      if (width < BREAKPOINTS.MOBILE) {
        setDeviceType("mobile");
      } else if (width >= BREAKPOINTS.MOBILE && width < BREAKPOINTS.TABLET) {
        setDeviceType("tablet");
      } else if (width >= BREAKPOINTS.TABLET && width < BREAKPOINTS.LAPTOP) {
        setDeviceType("laptop");
      } else {
        setDeviceType("monitor");
      }
    };

    updateDeviceType();

    window.addEventListener("resize", updateDeviceType);

    return () => window.removeEventListener("resize", updateDeviceType);
  }, []);

  return deviceType;
}

export function useIsMobile() {
  const deviceType = useDeviceType();
  return deviceType === "mobile";
}

export function useIsTablet() {
  const deviceType = useDeviceType();
  return deviceType === "tablet";
}

export function useIsLaptop() {
  const deviceType = useDeviceType();
  return deviceType === "laptop";
}

export function useIsMonitor() {
  const deviceType = useDeviceType();
  return deviceType === "monitor";
}