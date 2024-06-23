import create from "zustand";
import axios from "axios";

// zustand로 변수와 함수들 정의
const useWeatherStore = create((set, get) => ({
  weather: null,
  city: "",
  loading: false, // 로딩 상태 정의
  error: null, // 에러 상태 정의
  setCity: (newCity) => set({ city: newCity }), // city값 업데이트
  fetchWeather: async (city) => {
    // 업데이트된 city값으로 api요청, 데이터 받아옴
    set({ loading: true, error: null }); // 로딩 값 true로 정의 -> 로딩중...
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=7af55e96169e0d695910384c4760f2d0&units=metric`
      );
      set({ weather: response.data, loading: false });
    } catch (error) {
      set({ error: error.message, loading: false });
      console.log("error 발생");
      alert("에러발생");
    }
  },
}));

export default useWeatherStore;
