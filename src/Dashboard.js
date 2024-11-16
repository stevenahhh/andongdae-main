// src/components/Dashboard.js
import React, { useState } from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import useKakaoLoader from './useKakaoLoader'; // 훅 경로를 맞춰주세요

const center = {
  // 지도의 중심좌표
  lat: 34.969578,
  lng: 127.479576,
};

export default function AddMapClickEventWithMarker() {
  useKakaoLoader();

  // 마커의 위치를 저장하는 state
  const [position, setPosition] = useState({
    lat: 33.450701,
    lng: 126.570667,
  });

  // 도로명 주소를 저장하는 state
  const [roadAddress, setRoadAddress] = useState('');

  // 인포윈도우 Open 여부를 저장하는 state
  const [isOpen, setIsOpen] = useState(false);

  // 가상의 데이터 예시 (실제 데이터에 맞게 수정)
  const weatherData = {
    rainfall: '1320mm',
    avgTemp: '14.2°C',
    soilInfo: 'Loamy soil',
  };

  // 지도 클릭 시 도로명 주소 가져오기
  const handleMapClick = (_, mouseEvent) => {
    const latlng = mouseEvent.latLng;
    setPosition({
      lat: latlng.getLat(),
      lng: latlng.getLng(),
    });

    // 카카오맵 geocoder를 사용하여 도로명 주소 가져오기
    const geocoder = new window.kakao.maps.services.Geocoder();
    geocoder.coord2Address(latlng.getLng(), latlng.getLat(), (result, status) => {
      if (status === window.kakao.maps.services.Status.OK) {
        const address = result[0].road_address ? result[0].road_address.address_name : '';
        setRoadAddress(address);
        setIsOpen(true); // 인포윈도우 열림
      }
    });
  };

  return (
    <>
      <Map
        id="map"
        center={center}
        style={{
          width: '100%',
          height: '80vh',
          position: 'relative'
        }}
        level={3} // 지도의 확대 레벨
        onClick={handleMapClick} // 지도 클릭 시 이벤트 핸들러
      >
        <MapMarker position={position} clickable={true} />

        {isOpen && (
          <div style={{
            position: 'absolute',
            top: '50%', // 세로 중앙 정렬을 위해 50%로 설정
            left: '1em', // 브라우저 공간의 왼쪽에 붙어 있도록 설정
            transform: 'translateY(-50%)', // 세로 방향으로 정확하게 중앙에 맞추기 위해 사용
            backgroundColor: 'white',
            border: '1px solid #ccc',
            borderRadius: '10px',
            boxShadow: '0 2px 6px rgba(0,0,0,0.3)',
            padding: '10px',
            width: '250px',
            height: 'auto', // 정보 창의 높이를 설정
            overflowY: 'auto', // 내용이 넘칠 경우 스크롤 추가
            textAlign: 'left',
            zIndex: 1000 // 지도의 다른 요소보다 위에 표시
          }}>
            {/* <p>도로명 주소: {roadAddress}</p> */}
            <p>도로명 주소: 전남 순천시 석현동 산 243-3</p>
            <p>연평균 강수량: {weatherData.rainfall}</p>
            <p>연평균 기온: {weatherData.avgTemp}</p>
            {/* <p>토지 정보: {weatherData.soilInfo}</p> */}
            <p style={{ display: 'none' }}>{roadAddress} </p>
            <p style={{ display: 'none' }}>{weatherData.soilInfo}</p>
          </div>


        )}
      </Map>
    </>
  );
}
