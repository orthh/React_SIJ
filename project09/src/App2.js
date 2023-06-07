import React, { useState } from "react";
import { useMap, MapMarker, Map } from "react-kakao-maps-sdk";

const App2 = () => {
  const [centerLat, setCenterLat] = useState(33.450701);
  const [centerLon, setCenterLon] = useState(126.570667);
  const [level, setLevel] = useState(3);

  const [data, setData] = useState(
    [
      {
        content: <div style={{ color: "#000" }}>카카오</div>,
        latlng: { lat: 33.450705, lng: 126.570677 },
      },
      {
        content: <div style={{ color: "#000" }}>생태연못</div>,
        latlng: { lat: 33.450936, lng: 126.569477 },
      },
      {
        content: <div style={{ color: "#000" }}>텃밭</div>,
        latlng: { lat: 33.450879, lng: 126.56994 },
      },
      {
        content: <div style={{ color: "#000" }}>근린공원</div>,
        latlng: { lat: 33.451393, lng: 126.570738 },
      },
    ],
    []
  );

  const EventMarkerContainer = ({ position, content }) => {
    const map = useMap();
    const [isVisible, setIsVisible] = useState(false);

    return (
      <MapMarker
        position={position} // 마커를 표시할 위치
        // @ts-ignore
        onClick={(marker) => map.panTo(marker.getPosition())}
        onMouseOver={() => setIsVisible(true)}
        onMouseOut={() => setIsVisible(false)}
      >
        {isVisible && content}
      </MapMarker>
    );
  };

  const smhrdMarker = () => {
    console.log("smhrd Marker Function");
    setCenterLat(35.149896);
    setCenterLon(126.9197772);

    setData([
      {
        content: <div style={{ color: "#000" }}>본점</div>,
        latlng: { lat: 35.149896, lng: 126.9197772 },
      },
      {
        content: <div style={{ color: "#000" }}>남구점</div>,
        latlng: { lat: 35.110479, lng: 126.877456 },
      },
    ]);

    setLevel(8);
  };

  return (
    <div>
      <Map // 지도를 표시할 Container
        center={{
          // 지도의 중심좌표
          lat: centerLat,
          lng: centerLon,
        }}
        style={{
          // 지도의 크기
          width: "100%",
          height: "450px",
        }}
        level={level} // 지도의 확대 레벨
      >
        {data.map((value) => (
          <EventMarkerContainer
            key={`EventMarkerContainer-${value.latlng.lat}-${value.latlng.lng}`}
            position={value.latlng}
            content={value.content}
          />
        ))}
      </Map>
      <button onClick={smhrdMarker}>스마트인재개발원</button>
    </div>
  );
};

export default App2;
