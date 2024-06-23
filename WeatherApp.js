import React from "react";
import useWeatherStore from "./store/store";

// 주스탠드
const WeatherApp = () => {
  const { weather, city, loading, error, setCity, fetchWeather } =
    useWeatherStore();

  const handleSearch = () => {
    fetchWeather(city); // 업데이트된 city의 데이터로 api 요청
  };

  return (
    <div>
      <h1>날씨를 알려드립니다</h1>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="도시 이름을 영어로 입력하세요"
        required
      />
      <button onClick={handleSearch} disabled={loading}>
        {loading ? "Loading..." : "검색"} {/* 삼항연산자로 로딩 상태 표시*/}
      </button>
      {error && <p style={{ color: "red" }}>{error}</p>}{" "}
      {/* error객체의 초기값이 null인데 error가 발생하여 데이터가 생기면 빨간 글씨로 무슨 에러인지 나타내줌*/}
      {weather && (
        <div>
          <h2>{weather.name}의 날씨...</h2>
          <p>온도: {weather.main.temp} °C</p>
          <p>날씨: {weather.weather[0].description}</p>
        </div>
      )}
    </div>
  );
};

export default WeatherApp;
